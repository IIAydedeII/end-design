import { styled } from "@linaria/react";
import { slugify } from "@/utils/stringUtils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingProps = {
  children: React.ReactNode;
  level?: HeadingLevel;
  id?: string;
} & React.ComponentPropsWithoutRef<"h1">;

const H = styled.h1`
  position: relative;
  a:before {
    content: "# ";
    white-space: pre;
    position: absolute;
    inset-inline-end: 100%;
    opacity: 0;
  }
  &:hover,
  &:focus-within {
    a:before {
      opacity: revert;
    }
  }
`;

const Heading = ({ children, level, id, ...rest }: HeadingProps) => (
  <H as={level && `h${level}`} id={slugify(id)} {...rest}>
    {!id ? (
      <>{children}</>
    ) : (
      <a href={`#${slugify(id)}`} className="a-reset">
        {children}
      </a>
    )}
  </H>
);

export default Heading;
