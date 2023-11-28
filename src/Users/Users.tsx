import {
  Accordion,
  Button,
  Input,
  Prompt as PromptHeader,
} from "../components";
import { FormEvent, useRef, useState } from "react";
import useUsers from "./hooks/useUsers";
import styled from "styled-components";
import { BREAKPOINTS } from "../styles/breakpoints";
import { Repositories } from "./Repositories";
import Loading from "../components/States/Loading";
import Error from "../components/States/Error";
import Empty from "../components/States/Empty";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${PromptHeader} {
    margin: 0.5rem 0;
  }
  ${Accordion} {
    margin-bottom: 1rem;
  }
`;

const SearchForm = styled.form`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  ${Input} {
    margin-bottom: 1rem;
  }

  @media (${BREAKPOINTS.desktop}) {
    flex-direction: unset;

    ${Input} {
      margin-bottom: unset;
      margin-right: 1rem;
      width: 25rem;
    }
  }
`;

const Users = () => {
  const [name, setName] = useState("");
  const { users, isLoading, error } = useUsers(name);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    inputRef.current && setName(inputRef.current.value);
  }

  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (error) {
    content = <Error message={error} />;
  } else {
    content = (
      <>
        {users.length > 0
          ? users.map((user) => (
              <Accordion key={user.id} title={user.login} headingLevel={2}>
                <Repositories login={user.login} />
              </Accordion>
            ))
          : name !== "" && (
              <Empty message="There are no users with this login" />
            )}
      </>
    );
  }

  return (
    <Container>
      <SearchForm onSubmit={(e) => handleSubmit(e)}>
        <Input ref={inputRef} placeholder="Enter username" />
        <Button type="submit">Search</Button>
      </SearchForm>
      {name && (
        <PromptHeader
          role="heading"
          aria-level={1}
        >{`Showing users for "${name}"`}</PromptHeader>
      )}
      {content}
    </Container>
  );
};

export default Users;
