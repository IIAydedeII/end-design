"use client";

import React, { useEffect, useState } from "react";
import { slugify } from "@/utils/stringUtils";
import { styled } from "@linaria/react";

type Title = string;

type ListItemProps = { children?: React.ReactNode; title: Title };

type Content = { title: Title; subcontents?: Content[] };

type ToCProps = {
  contents: Content[];
} & React.ComponentPropsWithoutRef<"nav">;

const Aside = styled.aside`
  position: relative;
  grid-area: toc;
  nav {
    position: sticky;
    top: 64px;
    max-height: calc(100vh - 64px);
    overflow: auto;
    overscroll-behavior: contain;
  }
  ul {
    list-style: none;
    padding: 0;
    margin-block: 0;
    font-size: small;
  }
  a {
    display: inline-block;
    padding: 0.25rem;
    padding-inline-start: 1em;
    border-inline-start: 2px solid oklch(from var(--theme) l c h / 0.3);
    &:hover {
      border-color: var(--theme);
    }
  }
  li li a {
    padding-inline-start: 2em;
  }
`;

const ListItem = ({ children, title, ...rest }: ListItemProps) => (
  <li {...rest}>
    <a href={`#${slugify(title)}`}>{title}</a>
    {children}
  </li>
);

const ToC = ({ contents, ...rest }: ToCProps) => {
  const [currentItem, setCurrentItem] = useState<string[]>([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const label = entry.target.getAttribute("aria-labelledby");
          if (label) {
            if (entry.isIntersecting) {
              setCurrentItem((prev) => [...prev, label]);
            } else {
              setCurrentItem((prev) => prev.filter((id) => id !== label));
            }
          }
        });
      },
      {
        rootMargin: "-64px 0px 0px 0px",
      }
    );

    contents.forEach(({ title }) => {
      const titleSlug = slugify(title);
      const el = document.getElementById(titleSlug);
      const elSection = el?.closest("section");

      if (elSection) {
        elSection.setAttribute("aria-labelledby", titleSlug);
        observer.observe(elSection);
      }
    });

    return () => observer.disconnect();
  }, [contents]);
  return (
    <Aside>
      <nav {...rest}>
        <ul>
          {contents.map(({ title, subcontents }) => (
            <ListItem
              title={title}
              key={title}
              data-theme={
                currentItem.includes(slugify(title)) ? "primary" : ""
              }>
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
};

export default ToC;
