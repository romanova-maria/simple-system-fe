import styled from "styled-components";
import { layoutStyles } from "./common-styles";
import { HTMLAttributes } from "react";

interface EmptyProps extends HTMLAttributes<HTMLElement> {
  message: string;
}
const Empty = ({ message, ...props }: EmptyProps) => {
  return <div {...props}>{message}</div>;
};

const StyledEmpty = styled(Empty)`
  ${layoutStyles};
`;

export default StyledEmpty;
