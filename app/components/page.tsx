import Image from "next/image";
import Link from "next/link";
import { styled } from "@linaria/react";
import Section from "@/components/atoms/Section";

const Overview = styled.div`
  border: 1px solid oklch(from var(--text) l c h / 0.3);
  border-radius: 0.5rem;
  & > strong {
    display: block;
    border-bottom: inherit;
    padding: 1rem;
  }
  & > div {
    position: relative;
    aspect-ratio: 1;
    margin: 1rem;
  }
`;

const ComponentsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  gap: 2rem;
`;

export default function ComponentsPage() {
  return (
    <Section>
      <h1>Components</h1>
      <p>
        <strong>End Design</strong> provides plenty of UI components to enrich
        your web applications, and we will improve components experience
        consistently. We also recommend the not so great 🙄{" "}
        <a href="https://ant.design/" target="_blank">
          Ant Design
        </a>{" "}
        additionally.
      </p>
      <section>
        <h2>General</h2>
        <ComponentsGrid>
          <Link href="components/button">
            <Overview>
              <strong>Button</strong>
              <div>
                <picture>
                  <source
                    srcSet="button_l.svg"
                    media="(prefers-color-scheme: light)"
                  />
                  <Image
                    src="button_d.svg"
                    layout="fill"
                    alt="Buttons Illustration"
                  />
                </picture>
              </div>
            </Overview>
          </Link>
        </ComponentsGrid>
      </section>
    </Section>
  );
}
