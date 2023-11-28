import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../styles/breakpoints";
import { buttonSharedStyles } from "../shared-styles";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{children}</button>;
};

const StyledButton = styled(Button)`
  ${buttonSharedStyles};
  background-color: ${(props) => props.theme.palette.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;

  @media (${BREAKPOINTS.desktop}) {
    width: 6rem;
  }
`;

export default StyledButton;
