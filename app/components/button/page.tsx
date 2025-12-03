import Heading from "@/components/atoms/Heading";
import Section from "@/components/atoms/Section";

export default function ButtonPage() {
  return (
    <Section>
      <Heading>Button</Heading>
      To trigger an operation.
      <Heading as="h2" id="when-to-use">
        When To Use
      </Heading>
      <p>
        A button means an operation (or a series of operations). Clicking a
        button will trigger its corresponding business logic.
      </p>
      <p>In Ant Design we provide 5 types of button.</p>
      <ul>
        <li>
          🔵 Primary button: used for the main action, there can be at most one
          primary button in a section.
        </li>
        <li>
          ⚪️ Default button: used for a series of actions without priority.
        </li>
        <li>😶 Dashed button: commonly used for adding more actions.</li>
        <li>🔤 Text button: used for the most secondary action.</li>
        <li>🔗 Link button: used for external links.</li>
      </ul>
      <p>And 4 other properties additionally.</p>
      <ul>
        <li>
          🔴 <code>danger</code>: used for actions of risk, like deletion or
          authorization.
        </li>
        <li>
          👻 <code>ghost</code>: used in situations with complex background,
          home pages usually.
        </li>
        <li>
          🚫 <code>disabled</code>: used when actions are not available.
        </li>
        <li>
          🔃 <code>loading</code>: adds a loading spinner in button, avoids
          multiple submits too.
        </li>
      </ul>
      <Heading as="h2" id="examples">
        Examples
      </Heading>
      <button>Button</button>
    </Section>
  );
}
