import { Metadata } from "next";
import Link from "next/link";
import { styled } from "@linaria/react";

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin-block: calc(2 * 0.67rem);
  h1:first-child {
    margin-top: 0;
  }
`;

const Components = styled.aside`
  padding-inline: 0.5rem;
`;

export const metadata: Metadata = {
  title: "Button - End Design",
};

export default function ComponentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Main>
      <Components>
        <Link href="/components/button">Link to Button</Link>
      </Components>
      {children}
    </Main>
  );
}
