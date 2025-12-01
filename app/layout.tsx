import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@linaria/react";
import "./globals.css";

const Header = styled.header`
  padding: 1rem 2.5rem;
`;

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

export const metadata: Metadata = {
  title: "End Design",
  description: "This... is the End of Design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
