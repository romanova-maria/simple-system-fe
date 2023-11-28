import { HTMLAttributes, PropsWithChildren, useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import { WithHeadingLevel } from "../../types";

interface AccordionProps
  extends PropsWithChildren,
    WithHeadingLevel,
    HTMLAttributes<HTMLElement> {
  title: string;
}

const Accordion = ({
  title,
  children,
  headingLevel,
  ...props
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...props}>
      <Header
        title={title}
        isOpen={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        headingLevel={headingLevel}
      />
      {isOpen && <div>{children}</div>}
    </div>
  );
};

const StyledAccordion = styled(Accordion)``;

export default StyledAccordion;
