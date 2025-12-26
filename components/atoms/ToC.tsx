import React from "react";
import { slugify } from "@/utils/stringUtils";
import { styled } from "@linaria/react";

type Title = string;

type ListItemProps = { children?: React.ReactNode; title: Title };

type Content = { title: Title; subcontents?: Content[] };

type ToCProps = {
  contents: Content[];
} & React.ComponentPropsWithoutRef<"nav">;

const Aside = styled.aside`
  grid-area: toc;
`;

const ListItem = ({ children, title }: ListItemProps) => (
  <li>
    <a href={`#${slugify(title)}`}>{title}</a>
    {children}
  </li>
);

const ToC = ({ contents, ...rest }: ToCProps) => (
  <Aside>
    <nav {...rest}>
      <ul>
        {contents.map(({ title, subcontents }) => (
          <ListItem title={title} key={title}>
            {!!subcontents?.length && (
              <ul>
                {subcontents.map(({ title }) => (
                  <ListItem title={title} key={title} />
                ))}
              </ul>
            )}
          </ListItem>
        ))}
      </ul>
    </nav>
  </Aside>
);

export default ToC;
