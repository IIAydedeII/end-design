import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { styled } from "@linaria/react";
import "./globals.css";

const Footer = styled.footer`
  padding: 1rem 2.5rem;
  border-top: 1px solid oklch(from var(--text) l c h / 0.3);
  background-color: oklch(from var(--primary) l c h / 0.1);
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

const Header = styled.header`
  padding: 1rem 2.5rem;
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
        <Footer>
          <Link href="https://github.com/IIAydedeII/end-design">
            https://github.com/IIAydedeII/end-design
          </Link>
        </Footer>
      </body>
    </html>
  );
}
