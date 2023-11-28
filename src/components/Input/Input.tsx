import { ForwardedRef, forwardRef, InputHTMLAttributes } from "react";
import styled from "styled-components";
import { buttonSharedStyles } from "../shared-styles";
import { BREAKPOINTS } from "../../styles/breakpoints";

const Input = (
  props: InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>,
) => {
  return <input ref={ref} {...props} />;
};

const StyledInputWithRef = styled(
  forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(Input),
)`
  ${buttonSharedStyles};
  border: 1px solid ${(props) => props.theme.colors.gray};
  background-color: ${(props) => props.theme.colors.lightGray};
  padding: 0 0.5rem;

  @media (${BREAKPOINTS.desktop}) {
    width: 10rem;
  }
`;

export default StyledInputWithRef;
