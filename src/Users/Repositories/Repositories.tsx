import useRepositories from "../hooks/useRepositories";
import Repository from "./Repository";
import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";
import Loading from "../../components/States/Loading";
import Error from "../../components/States/Error";
import Empty from "../../components/States/Empty";
interface RepositoriesProps {
  login: string;
}

const Container = styled.div`
  ${Repository} {
    margin-top: 1rem;
    margin-left: 1rem;

    @media (${BREAKPOINTS.desktop}) {
      margin-left: 3rem;
    }
  }
`;

const Repositories = ({ login }: RepositoriesProps) => {
  const { repositories, isLoading, error } = useRepositories(login);
  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (repositories.length === 0) {
    return <Empty message="No repositories" />;
  }

  return (
    <Container>
      {repositories.map((repository) => (
        <Repository
          key={repository.html_url}
          stargazers_count={repository.stargazers_count}
          name={repository.name}
          description={repository.description}
          html_url={repository.html_url}
          headingLevel={3}
        />
      ))}
    </Container>
  );
};

export default Repositories;
