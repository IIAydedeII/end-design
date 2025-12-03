import { styled } from "@linaria/react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

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

const Heading = ({
  children,
  as,
  id,
}: Readonly<{
  children: React.ReactNode;
  as?: HeadingTag;
  id?: string;
}>) => (
  <H as={as}>
    {children}
    {id && (
      <Anchor href={`#${id}`} tabIndex={-1}>
        #&nbsp;
      </Anchor>
    )}
  </H>
);

export default Heading;
