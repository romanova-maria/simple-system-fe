import { Repository } from "../hooks/useRepositories";
import { HTMLAttributes } from "react";
import styled from "styled-components";
import { WithHeadingLevel } from "../../types";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 2rem;
`;

const Repository = ({
  name,
  html_url,
  stargazers_count,
  description,
  headingLevel,
  ...props
}: Repository & HTMLAttributes<HTMLAnchorElement> & WithHeadingLevel) => {
  return (
    <a href={html_url} target="_blank" rel="noreferrer" {...props}>
      <Header role="heading" aria-level={headingLevel}>
        <span>{name}</span> <span>{stargazers_count} &#9733;</span>
      </Header>
      {description && <div>{description}</div>}
    </a>
  );
};

const StyledRepository = styled(Repository)`
  background-color: ${(props) => props.theme.colors.gray};
  color: ${(props) => props.theme.colors.black};
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding: 1rem;
`;

export default StyledRepository;
