import { styled } from "@linaria/react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  children: React.ReactNode;
  as?: HeadingTag;
  id?: string;
};

const Anchor = styled.a`
  position: absolute;
  inset-inline-end: 100%;
  opacity: 0;
`;

const H = styled.h1`
  position: relative;
  &:hover ${Anchor} {
    opacity: revert;
  }
`;

const Heading = ({ children, as, id }: HeadingProps) => (
  <H as={as} id={id}>
    {children}
    {id && (
      <Anchor href={`#${id}`} tabIndex={-1}>
        #&nbsp;
      </Anchor>
    )}
  </H>
);

export default Heading;
