import React from "react";
import Heading, { HeadingProps } from "./Heading";
import { slugify } from "@/utils/stringUtils";

type HeadingConfig = {
  text: string;
} & Pick<HeadingProps, "level">;

type SectionProps = {
  children: React.ReactNode;
  heading: HeadingConfig;
} & React.ComponentPropsWithoutRef<"section">;

const Section = ({
  children,
  heading: { text, level },
  ...rest
}: SectionProps) => {
  return (
    <section aria-labelledby={slugify(text)} {...rest}>
      <Heading level={level} id={text}>
        {text}
      </Heading>
      {children}
    </section>
  );
};

export default Section;
