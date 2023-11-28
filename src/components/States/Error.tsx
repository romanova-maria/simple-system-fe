import styled from "styled-components";
import { layoutStyles } from "./common-styles";
import { HTMLAttributes } from "react";

interface ErrorProps extends HTMLAttributes<HTMLElement> {
  message: string;
}
const Error = ({ message, ...props }: ErrorProps) => {
  return <div {...props}>Error: {message}</div>;
};

const StyledError = styled(Error)`
  ${layoutStyles};
  color: ${(props) => props.theme.palette.danger};
`;

export default StyledError;
