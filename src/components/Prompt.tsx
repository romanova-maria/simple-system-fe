import { HTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

const Prompt = ({
  children,
  ...props
}: PropsWithChildren & HTMLAttributes<HTMLElement>) => {
  return <div {...props}>{children}</div>;
};

const StyledPrompt = styled(Prompt)`
  color: ${(props) => props.theme.colors.darkGray};
`;

export default StyledPrompt;
