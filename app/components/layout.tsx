"use client";

import { usePathname } from "next/navigation";
import { styled } from "@linaria/react";
import Button from "@/components/atoms/Button";

const StyledButton = styled(Button)`
  padding-inline: 1.5rem;
  text-align: start;
`;

const List = styled.aside`
  position: sticky;
  top: 64px;
  grid-area: sidebar;
  max-height: calc(100vh - 64px);
  overflow: auto;
  overscroll-behavior: contain;
`;

const Layout = styled.div`
  display: grid;
  grid-template-areas: "sidebar head toc" "sidebar content toc";
  grid-template-columns: minmax(min-content, 1fr) 4fr;
  grid-auto-columns: minmax(min-content, 1fr);
  grid-template-rows: min-content 1fr;
  grid-auto-rows: 1fr;
  column-gap: 3rem;
  align-items: start;
  padding-inline: 1rem;
  margin-block: 2rem;
  h1:first-child {
    margin-top: 0;
  }
  main {
    display: contents;
    & > :first-child {
      grid-area: head;
    }
    & > :last-child {
      grid-area: content;
    }
  }
  @media (width < 50rem) {
    grid-template-areas: "sidebar head" "sidebar toc" "sidebar content";
    grid-template-rows: min-content min-content;
  }
  @media (width < 35rem) {
    display: block;
    ${List} {
      display: none;
    }
  }
`;

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <Layout>
      <List>
        <nav>
          <StyledButton
            href="/components"
            variant={pathname === "/components" ? "solid" : "text"}
            themeColor="primary"
            size="large"
            block>
            Components Overview
          </StyledButton>
          <StyledButton
            href="/components/button"
            variant={pathname === "/components/button" ? "solid" : "text"}
            themeColor="primary"
            size="large"
            block>
            Button
          </StyledButton>
        </nav>
      </List>
      {children}
    </Layout>
  );
}
