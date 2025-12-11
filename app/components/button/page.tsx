import { styled } from "@linaria/react";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";

const Container = styled.div`
  display: inline flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  max-width: 50%;
  padding: 1rem;
  box-sizing: border-box;
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
      <Container>
        <Button variant="solid">Primary Button</Button>
        <Button>Default Button</Button>
        <Button variant="dashed">Dashed Button</Button>
        <Button variant="light">Text Button</Button>
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
      <Container>
        <Button variant="solid" themeColor="green">
          Solid
        </Button>
        <Button variant="outlined" themeColor="green">
          Outlined
        </Button>
        <Button variant="dashed" themeColor="green">
          Dashed
        </Button>
        <Button variant="light" themeColor="green">
          Light
        </Button>
      </Container>
      <Container>
        <Button variant="solid" themeColor="magenta">
          Solid
        </Button>
        <Button variant="outlined" themeColor="magenta">
          Outlined
        </Button>
        <Button variant="dashed" themeColor="magenta">
          Dashed
        </Button>
        <Button variant="light" themeColor="magenta">
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
        <Button variant="solid" themeColor="orange">
          Solid
        </Button>
        <Button variant="outlined" themeColor="orange">
          Outlined
        </Button>
        <Button variant="dashed" themeColor="orange">
          Dashed
        </Button>
        <Button variant="light" themeColor="orange">
          Light
        </Button>
      </Container>
      <Container>
        <Button variant="solid" themeColor="yellow">
          Solid
        </Button>
        <Button variant="outlined" themeColor="yellow">
          Outlined
        </Button>
        <Button variant="dashed" themeColor="yellow">
          Dashed
        </Button>
        <Button variant="light" themeColor="yellow">
          Light
        </Button>
      </Container>
      <Container>
        <Button variant="solid" themeColor="volcano">
          Solid
        </Button>
        <Button variant="outlined" themeColor="volcano">
          Outlined
        </Button>
        <Button variant="dashed" themeColor="volcano">
          Dashed
        </Button>
        <Button variant="light" themeColor="volcano">
          Light
        </Button>
      </Container>
      <Container>
        <Button variant="solid" themeColor="geekblue">
          Solid
        </Button>
        <Button variant="outlined" themeColor="geekblue">
          Outlined
        </Button>
        <Button variant="dashed" themeColor="geekblue">
          Dashed
        </Button>
        <Button variant="light" themeColor="geekblue">
          Light
        </Button>
      </Container>
      <Container>
        <Button variant="solid" themeColor="lime">
          Solid
        </Button>
        <Button variant="outlined" themeColor="lime">
          Outlined
        </Button>
        <Button variant="dashed" themeColor="lime">
          Dashed
        </Button>
        <Button variant="light" themeColor="lime">
          Light
        </Button>
      </Container>
      <Container>
        <Button variant="solid" themeColor="gold">
          Solid
        </Button>
        <Button variant="outlined" themeColor="gold">
          Outlined
        </Button>
        <Button variant="dashed" themeColor="gold">
          Dashed
        </Button>
        <Button variant="light" themeColor="gold">
          Light
        </Button>
      </Container>
    </Section>
  );
}
