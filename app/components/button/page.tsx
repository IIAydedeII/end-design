import { Metadata } from "next";
import { styled } from "@linaria/react";
import Button, { Variants } from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import Demo from "@/components/molecules/Demo";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Examples = styled.div`
  columns: 2 200px;
  margin-block: 1rem;
  > :first-child,
  > :last-child {
    margin-block: 0;
  }
`;

export default function ButtonPage() {
  const SelectPresetColors: (PresetColor | "")[] = [
    "",
    "blue",
    "red",
    "pink",
    "purple",
    "cyan",
  ];
  return (
    <Section>
      <Heading>Button</Heading>
      To trigger an operation.
      <Heading renderAs="h2" id="when-to-use">
        When To Use
      </Heading>
      <p>
        A button means an operation (or a series of operations). Clicking a
        button will trigger its corresponding business logic.
      </p>
      <p>In End Design we provide 5 types of button.</p>
      <dl>
        <dt>🔵 Solid button:</dt>
        <dd>
          Used for the main action, there can be at most one primary button in a
          section.
        </dd>
        <dt>⚪️ Outlined button (default):</dt>
        <dd>Used for a series of actions without priority.</dd>
        <dt>😶 Dashed button:</dt>
        <dd>Commonly used for adding more actions.</dd>
        <dt>🔤 Text button:</dt>
        <dd>Used for the most secondary action.</dd>
        <dt>🪶 Light button 🆕:</dt>
        <dd>An alternative variant that should’t be named “filled”.</dd>
      </dl>
      <p>And 2 other properties additionally.</p>
      <dl>
        <dt>
          👻 <code>ghost</code>:
        </dt>
        <dd>Used in situations with complex background, home pages usually.</dd>
        <dt>
          🚫 <code>disabled</code>:
        </dt>
        <dd>Used when actions are not available.</dd>
      </dl>
      <Heading renderAs="h2" id="examples">
        Examples
      </Heading>
      <Examples>
        <Demo
          title="Variant"
          htmlText="Through the <code>variant</code> property, use the different button styles: <code>solid</code> buttons, default buttons, <code>dashed</code> buttons, <code>light</code> buttons, and <code>text</code> buttons. No syntactic sugars used to prevent confusion.">
          <Container>
            <Button variant="solid" themeColor="primary">
              Primary Button
            </Button>
            <Button themeColor="primary">Default Button</Button>
            <Button variant="dashed" themeColor="primary">
              Dashed Button
            </Button>
            <Button variant="light" themeColor="primary">
              Light Button
            </Button>
            <Button variant="text" themeColor="primary">
              Text Button
            </Button>
          </Container>
        </Demo>
        <Demo
          title="Color"
          htmlText="<p>You can set the <code>color</code> and <code>variant</code> attributes at the same time can derive more variant buttons.</p>">
          <Container>
            {SelectPresetColors.map((color) => (
              <Container key={color}>
                {Variants.map((variant) => (
                  <Button
                    key={`${color}-${variant}`}
                    size="small"
                    variant={variant}
                    themeColor={color || undefined}
                    style={{ textTransform: "capitalize" }}>
                    {variant}
                  </Button>
                ))}
              </Container>
            ))}
          </Container>
        </Demo>
      </Examples>
    </Section>
  );
}

export const metadata: Metadata = {
  title: "Button - End Design",
};
