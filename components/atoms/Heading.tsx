import { styled } from "@linaria/react";
import { slugify } from "@/utils/stringUtils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  children: React.ReactNode;
  level?: HeadingLevel;
  id?: string;
} & React.ComponentPropsWithoutRef<"h1">;

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

const Heading = ({ children, level, id, ...rest }: HeadingProps) => (
  <H as={level && `h${level}`} id={slugify(id)} {...rest}>
    {children}
    {id && (
      <Anchor href={`#${slugify(id)}`} tabIndex={-1} className="a-reset">
        #&nbsp;
      </Anchor>
    )}
  </H>
);

export default Heading;
