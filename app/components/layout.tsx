"use client";

import { usePathname } from "next/navigation";
import { styled } from "@linaria/react";
import Button from "@/components/atoms/Button";

const StyledButton = styled(Button)`
  padding-inline: 2rem;
  text-align: start;
`;

const ComponentsList = styled.aside`
  position: sticky;
  top: 64px;
  grid-row: span 2;
  height: calc(100vh - 64px);
  padding-inline: 0.5rem;
  border-right: 1px solid oklch(from var(--text) l c h / 0.05); //temporary
  overflow: auto;
  overscroll-behavior: contain;
`;

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(min-content, 1fr) 5fr;
  margin-top: calc(2 * 0.67rem);
  h1:first-child {
    margin-top: 0;
  }
`;

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <MainGrid>
      <ComponentsList>
        <StyledButton
          href="/components/button"
          variant={pathname === "/components/button" ? "solid" : "text"}
          themeColor="primary"
          size="large"
          block>
          Button
        </StyledButton>
      </ComponentsList>
      <main>{children}</main>
    </MainGrid>
  );
}
