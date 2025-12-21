import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@linaria/react";
import "./globals.css";

const Logo = styled(Link)`
  width: min-content;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  font-size: 1.25rem;
  white-space: nowrap;
  img {
    filter: invert();
  }
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 1rem 2.5rem;
  background-color: var(--background);
`;

export const metadata: Metadata = {
  title: "End Design",
  description: "This... is the End of Design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header>
          <Logo href="/">
            <Image
              src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
              alt="End Design Logo"
              width="32"
              height="32"
            />
            <b>End Design</b>
          </Logo>
        </Header>
        {children}
      </body>
    </html>
  );
}
