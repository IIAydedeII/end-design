import React from "react";
import { styled } from "@linaria/react";
import { slugify } from "@/utils/stringUtils";
import Heading from "../atoms/Heading";

type DemoProps = {
  children: React.ReactNode;
  title: string;
  htmlText: string;
};

const StyledHeading = styled(Heading)`
  position: absolute;
  top: -0.5lh;
  margin: 0 -0.5lh;
  background-color: var(--background);
  border-inline: 0.5lh solid var(--background);
  font-size: medium;
  white-space: nowrap;
`;

const Description = styled.div`
  position: relative;
  padding-inline: 1.5rem;
  border-top: 1px solid oklch(from var(--text) l c h / 0.3);
`;

const Content = styled.div`
  margin: 1.5rem;
`;

const Card = styled.section`
  margin-block: 1rem;
  border: 1px solid oklch(from var(--text) l c h / 0.3);
  border-radius: 0.5rem;
  break-inside: avoid;
  &:target {
    outline: 1px solid var(--primary);
  }
`;

const Demo = ({ children, title, htmlText }: DemoProps) => (
  <Card id={slugify(title)}>
    <Content>{children}</Content>
    <Description>
      <StyledHeading renderAs="h1">{title}</StyledHeading>
      <p dangerouslySetInnerHTML={{ __html: htmlText }} />
    </Description>
  </Card>
);

export default Demo;
