import { styled } from "@linaria/react";
import { slugify } from "@/utils/stringUtils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  children: React.ReactNode;
  renderAs?: HeadingTag;
  id?: string;
} & React.ComponentPropsWithRef<"h1">;

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

const Heading = ({ children, renderAs, id, ...rest }: HeadingProps) => (
  <H as={renderAs} id={slugify(id)} {...rest}>
    {children}
    {id && (
      <Anchor href={`#${slugify(id)}`} tabIndex={-1}>
        #&nbsp;
      </Anchor>
    )}
  </H>
);

export default Heading;
