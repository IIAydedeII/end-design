import { Metadata } from "next";
import { styled } from "@linaria/react";
import Button, { Variants } from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import ToC from "@/components/atoms/ToC";
import Demo from "@/components/molecules/Demo";
import Section from "@/components/molecules/Section";

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
    <main>
      <div>
        <Heading>Button</Heading>
        <p>To trigger an operation.</p>
      </div>
      <ToC
        contents={[
          { title: "When To Use" },
          {
            title: "Examples",
            subcontents: [
              { title: "Variant" },
              { title: "Color" },
              { title: "Disabled" },
              { title: "Ghost Button" },
              { title: "Block Button" },
            ],
          },
        ]}
      />
      <div>
        <Section heading={{ text: "When to Use", level: 2 }}>
          <p>
            A button means an operation (or a series of operations). Clicking a
            button will trigger its corresponding business logic.
          </p>
          <p>In End Design we provide 5 types of button.</p>
          <dl>
            <dt>🔵 Solid button:</dt>
            <dd>
              Used for the main action, there can be at most one primary button
              in a section.
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
            <dd>
              Used in situations with complex background, home pages usually.
            </dd>
            <dt>
              🚫 <code>disabled</code>:
            </dt>
            <dd>Used when actions are not available.</dd>
          </dl>
        </Section>
        <Section heading={{ text: "Examples", level: 2 }}>
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
              title="Ghost Button"
              htmlText="The <code>ghost</code> property will make a button's background transparent, this is commonly used in colored background. Will only work for <code>default</code> and <code>dashed</code> buttons.">
              <Container
                style={{ backgroundColor: "gainsboro", padding: "1em" }}>
                <Button themeColor="blue" ghost>
                  Default Button
                </Button>
                <Button variant="dashed" themeColor="blue" ghost>
                  Dashed Button
                </Button>
                <Button themeColor="red" ghost>
                  Default Button
                </Button>
              </Container>
            </Demo>
            <Demo
              title="Block Button"
              htmlText="The <code>block</code> property will make a button fit to its parent width.">
              <Container>
                <Button variant="solid" themeColor="primary" block>
                  Solid Button
                </Button>
                <Button themeColor="primary" block>
                  Default Button
                </Button>
                <Button variant="dashed" themeColor="primary" block>
                  Dashed Button
                </Button>
                <Button variant="light" themeColor="primary" block>
                  Light Button
                </Button>
                <Button variant="text" themeColor="primary" block>
                  Text Button
                </Button>
              </Container>
            </Demo>
            <Demo
              title="Color"
              htmlText="You can set the <code>color</code> and <code>variant</code> attributes at the same time can derive more variant buttons.">
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
            <Demo
              title="Disabled"
              htmlText="To mark a button as disabled, add the <code>disabled</code> property to the <code>Button</code>.">
              <Container>
                <Button variant="solid" themeColor="primary" disabled>
                  Solid Button
                </Button>
                <Button themeColor="primary" disabled>
                  Default Button
                </Button>
                <Button variant="dashed" themeColor="primary" disabled>
                  Dashed Button
                </Button>
                <Button variant="light" themeColor="primary" disabled>
                  Light Button
                </Button>
                <Button variant="text" themeColor="primary" disabled>
                  Text Button
                </Button>
              </Container>
            </Demo>
          </Examples>
        </Section>
        <Section heading={{ text: "API", level: 2 }}>
          <p>
            Different button styles generated by setting Button properties. The
            recommended order is: <code>type</code> -&gt; <code>shape</code>{" "}
            -&gt; <code>size</code> -&gt; <code>loading</code> -&gt;{" "}
            <code>disabled</code>.
          </p>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Description</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Version</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <code>autoInsertSpace</code>
                  </th>
                  <td>
                    We add a space between two Chinese characters by default,
                    which removed by setting <code>autoInsertSpace</code> to{" "}
                    <code>false</code>.
                  </td>
                  <td>boolean</td>
                  <td>
                    <code>true</code>
                  </td>
                  <td>5.17.0</td>
                </tr>
                <tr>
                  <th>
                    <code>block</code>
                  </th>
                  <td>Option to fit button width to its parent width</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>classNames</code>
                  </th>
                  <td>
                    Customize class for each semantic structure inside the
                    component. Supports object or function.
                  </td>
                  <td>
                    Record&lt;
                    <a href="/components/button#semantic-dom">SemanticDOM</a>,
                    string&gt; | {"(info: { props })"}=&gt; Record&lt;
                    <a href="/components/button#semantic-dom">SemanticDOM</a>,
                    string&gt;
                  </td>
                  <td>-</td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>color</code>
                  </th>
                  <td>Set button color</td>
                  <td>
                    <code>default</code> | <code>primary</code> |{" "}
                    <code>danger</code> |{" "}
                    <a href="/components/button#presetcolors">PresetColors</a>
                  </td>
                  <td>-</td>
                  <td>
                    <code>default</code>, <code>primary</code> and{" "}
                    <code>danger</code>: 5.21.0, <code>PresetColors</code>:
                    5.23.0
                  </td>
                </tr>
                <tr>
                  <th>
                    <code>danger</code>
                  </th>
                  <td>
                    Syntactic sugar. Set the danger status of button. will
                    follow <code>color</code> if provided
                  </td>
                  <td>boolean</td>
                  <td>false</td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>disabled</code>
                  </th>
                  <td>Disabled state of button</td>
                  <td>boolean</td>
                  <td>false</td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>ghost</code>
                  </th>
                  <td>
                    Make background transparent and invert text and border
                    colors
                  </td>
                  <td>boolean</td>
                  <td>false</td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>href</code>
                  </th>
                  <td>Redirect url of link button</td>
                  <td>string</td>
                  <td>-</td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>htmlType</code>
                  </th>
                  <td>
                    Set the original html <code>type</code> of{" "}
                    <code>button</code>, see:{" "}
                    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#type">
                      MDN
                    </a>
                  </td>
                  <td>
                    <code>submit</code> | <code>reset</code> |{" "}
                    <code>button</code>
                  </td>
                  <td>
                    <code>button</code>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>icon</code>
                  </th>
                  <td>Set the icon component of button</td>
                  <td>ReactNode</td>
                  <td>-</td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>
                      <del>iconPosition</del>
                    </code>
                  </th>
                  <td>
                    Set the icon position of button, please use{" "}
                    <code>iconPlacement</code> instead
                  </td>
                  <td>
                    <code>start</code> | <code>end</code>
                  </td>
                  <td>
                    <code>start</code>
                  </td>
                  <td>5.17.0</td>
                </tr>
                <tr>
                  <th>
                    <code>iconPlacement</code>
                  </th>
                  <td>Set the icon position of button</td>
                  <td>
                    <code>start</code> | <code>end</code>
                  </td>
                  <td>
                    <code>start</code>
                  </td>
                  <td>-</td>
                </tr>
                <tr>
                  <th>
                    <code>loading</code>
                  </th>
                  <td>Set the loading status of button</td>
                  <td>boolean | {"{ delay: number, icon: ReactNode }"}</td>
                  <td>false</td>
                  <td>icon: 5.23.0</td>
                </tr>
                <tr>
                  <th>
                    <code>shape</code>
                  </th>
                  <td>Can be used to set button shape</td>
                  <td>
                    <code>default</code> | <code>circle</code> |{" "}
                    <code>round</code>
                  </td>
                  <td>
                    <code>default</code>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>size</code>
                  </th>
                  <td>Set the size of button</td>
                  <td>
                    <code>large</code> | <code>middle</code> |{" "}
                    <code>small</code>
                  </td>
                  <td>
                    <code>middle</code>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>styles</code>
                  </th>
                  <td>
                    Customize inline style for each semantic structure inside
                    the component. Supports object or function.
                  </td>
                  <td>
                    Record&lt;
                    <a href="/components/button#semantic-dom">SemanticDOM</a>,
                    CSSProperties&gt; | {"(info: { props })"}=&gt; Record&lt;
                    <a href="/components/button#semantic-dom">SemanticDOM</a>,
                    CSSProperties&gt;
                  </td>
                  <td>-</td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>target</code>
                  </th>
                  <td>
                    Same as target attribute of a, works when href is specified
                  </td>
                  <td>string</td>
                  <td>-</td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>type</code>
                  </th>
                  <td>
                    Syntactic sugar. Set button type. Will follow{" "}
                    <code>variant</code> &amp; <code>color</code> if provided
                  </td>
                  <td>
                    <code>primary</code> | <code>dashed</code> |{" "}
                    <code>link</code> | <code>text</code> | <code>default</code>
                  </td>
                  <td>
                    <code>default</code>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>onClick</code>
                  </th>
                  <td>
                    Set the handler to handle <code>click</code> event
                  </td>
                  <td>
                    (event: React.MouseEvent&lt;HTMLElement, MouseEvent&gt;)
                    =&gt; void
                  </td>
                  <td>-</td>
                  <td></td>
                </tr>
                <tr>
                  <th>
                    <code>variant</code>
                  </th>
                  <td>Set button variant</td>
                  <td>
                    <code>outlined</code> | <code>dashed</code> |{" "}
                    <code>solid</code> | <code>filled</code> | <code>text</code>{" "}
                    | <code>link</code>
                  </td>
                  <td>-</td>
                  <td>5.21.0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Section>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  title: "Button - End Design",
};
