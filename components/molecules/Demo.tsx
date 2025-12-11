import { styled } from "@linaria/react";
import React from "react";
import Heading from "../atoms/Heading";

type DemoProps = {
  children: React.ReactNode;
  title: string;
  htmlText: string;
} & React.ComponentPropsWithRef<"button">;

const StyledHeading = styled(Heading)`
  position: absolute;
  top: -0.5lh;
  margin: 0;
  background-color: var(--background);
  outline: 0.5lh solid var(--background);
  font-size: medium;
`;

const Description = styled.div`
  position: relative;
  padding-inline: 1.5rem;
  border-top: 1px solid oklch(from var(--text) l c h / 0.3);
`;

const Content = styled.div`
  margin: 1.5rem;
`;

const Card = styled.div`
  margin-block: 1rem;
  border: 1px solid oklch(from var(--text) l c h / 0.3);
  border-radius: 0.5rem;
  break-inside: avoid;
`;

const Demo = ({ children, title, htmlText }: DemoProps) => (
  <Card>
    <Content>{children}</Content>
    <Description>
      <StyledHeading renderAs="h3" id={title}>
        {title}
      </StyledHeading>
      <p dangerouslySetInnerHTML={{ __html: htmlText }} />
    </Description>
  </Card>
);

export default Demo;
