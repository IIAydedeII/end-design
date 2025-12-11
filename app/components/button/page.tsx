import { styled } from "@linaria/react";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";
import Demo from "@/components/molecules/Demo";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Examples = styled.div`
  columns: 2 auto;
  margin-block: 1rem;
  > :first-child,
  > :last-child {
    margin-block: 0;
  }
`;

export default function ButtonPage() {
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
      <p>In End Design we provide 4 types of button.</p>
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
        <dt>🪶Light button 🆕:</dt>
        <dd>An alternative variant that should’t be named “filled”.</dd>
      </dl>
      <p>And 4 other properties additionally.</p>
      <dl>
        <dt>
          🔴 <code>danger</code>:
        </dt>
        <dd>Used for actions of risk, like deletion or authorization.</dd>
        <dt>
          👻 <code>ghost</code>:
        </dt>
        <dd>Used in situations with complex background, home pages usually.</dd>
        <dt>
          🚫 <code>disabled</code>:
        </dt>
        <dd>Used when actions are not available.</dd>
        <dt>
          🔃 <code>loading</code>:
        </dt>
        <dd>Adds a loading spinner in button, avoids multiple submits too.</dd>
      </dl>
      <Heading renderAs="h2" id="examples">
        Examples
      </Heading>
      <Examples>
        <Demo
          title="Syntactic sugar"
          htmlText="Through the <code>type</code> syntactic sugar, use the preset button styles: <code>primary</code> buttons, <code>default</code> buttons, <code>dashed</code> buttons, <code>text</code> buttons, and <code>link</code> buttons.">
          <Container>
            <Button variant="solid" themeColor="blue">
              Primary Button
            </Button>
            <Button themeColor="blue">Default Button</Button>
            <Button variant="dashed" themeColor="blue">
              Dashed Button
            </Button>
            <Button variant="light" themeColor="blue">
              Text Button
            </Button>
          </Container>
        </Demo>
        <Demo
          title="Icon"
          htmlText="You can add an icon using the <code>icon</code> property.">
          <Container>
            <Button variant="solid">Primary Button</Button>
            <Button>Default Button</Button>
            <Button variant="dashed">Dashed Button</Button>
            <Button variant="light">Text Button</Button>
          </Container>
        </Demo>
        <Demo
          title="Color & Variant"
          htmlText="You can add an icon using the <code>icon</code> property.">
          <Container>
            <Container>
              <Button variant="solid">Solid</Button>
              <Button variant="outlined">Outlined</Button>
              <Button variant="dashed">Dashed</Button>
              <Button variant="light">Light</Button>
            </Container>
            <Container>
              <Button variant="solid" themeColor="blue">
                Solid
              </Button>
              <Button variant="outlined" themeColor="blue">
                Outlined
              </Button>
              <Button variant="dashed" themeColor="blue">
                Dashed
              </Button>
              <Button variant="light" themeColor="blue">
                Light
              </Button>
            </Container>
            <Container>
              <Button variant="solid" themeColor="red">
                Solid
              </Button>
              <Button variant="outlined" themeColor="red">
                Outlined
              </Button>
              <Button variant="dashed" themeColor="red">
                Dashed
              </Button>
              <Button variant="light" themeColor="red">
                Light
              </Button>
            </Container>
            <Container>
              <Button variant="solid" themeColor="pink">
                Solid
              </Button>
              <Button variant="outlined" themeColor="pink">
                Outlined
              </Button>
              <Button variant="dashed" themeColor="pink">
                Dashed
              </Button>
              <Button variant="light" themeColor="pink">
                Light
              </Button>
            </Container>
            <Container>
              <Button variant="solid" themeColor="purple">
                Solid
              </Button>
              <Button variant="outlined" themeColor="purple">
                Outlined
              </Button>
              <Button variant="dashed" themeColor="purple">
                Dashed
              </Button>
              <Button variant="light" themeColor="purple">
                Light
              </Button>
            </Container>
            <Container>
              <Button variant="solid" themeColor="cyan">
                Solid
              </Button>
              <Button variant="outlined" themeColor="cyan">
                Outlined
              </Button>
              <Button variant="dashed" themeColor="cyan">
                Dashed
              </Button>
              <Button variant="light" themeColor="cyan">
                Light
              </Button>
            </Container>
          </Container>
        </Demo>
      </Examples>
    </Section>
  );
}
