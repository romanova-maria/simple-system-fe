import styled from "styled-components";
// @ts-expect-error: Cannot find module './../assets/down-arrow-svgrepo-com.svg?react'
import ArrowDown from "../../assets/down-arrow-svgrepo-com.svg?react";
// @ts-expect-error: Cannot find module './../assets/up-arrow-svgrepo-com.svg?react'
import ArrowUp from "../../assets/up-arrow-svgrepo-com.svg?react";
import { HTMLAttributes } from "react";
import { WithHeadingLevel } from "../../types";

interface HeaderProps extends HTMLAttributes<HTMLElement>, WithHeadingLevel {
  title: string;
  isOpen: boolean;
  onClick: () => void;
}

const Header = ({
  title,
  isOpen = false,
  onClick,
  headingLevel,
  ...props
}: HeaderProps) => {
  return (
    <div onClick={onClick} role="heading" aria-level={headingLevel} {...props}>
      {title}
      {isOpen ? <ArrowUp /> : <ArrowDown />}
    </div>
  );
};

const StyledHeader = styled(Header)`
  --header-height: 2rem;

  height: var(--header-height);
  background-color: ${(props) => props.theme.colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  svg {
    --svg-size: calc(var(--header-height) / 2);
    height: var(--svg-size);
    width: var(--svg-size);
  }
`;

export default StyledHeader;
