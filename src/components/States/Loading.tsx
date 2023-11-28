import styled from "styled-components";
import { layoutStyles } from "./common-styles";
import { HTMLAttributes } from "react";

const Loading = (props: HTMLAttributes<HTMLElement>) => {
  return <div {...props}>Loading...</div>;
};

const StyledLoading = styled(Loading)`
  ${layoutStyles};
`;

export default StyledLoading;
