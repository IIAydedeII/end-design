import React from "react";
import { styled } from "@linaria/react";

type Variant = "solid" | "outlined" | "dashed" | "light" | "text";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  themeColor?: "primary" | PresetColor;
  block?: boolean;
} & React.ComponentPropsWithRef<"button">;

const StyledButton = styled.button`
  min-height: 2rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: solid;
  font-family: inherit;
  font-size: 1rem;
  transition-property: color, background-color;
  transition-duration: var(--transition-duration);
  transition-timing-function: var(--transition-function);
  &[data-variant="solid"] {
    color: oklch(from var(--theme) calc((1 - sign(l - 0.7)) / 2) 0 0);
    background-color: var(--theme);
    border-color: var(--theme);
    box-shadow: 0 2px 0 oklch(from var(--theme) l c h / 0.4);
    &:hover {
      background-color: var(--theme-hover);
      border-color: var(--theme-hover);
    }
    &:active {
      background-color: var(--theme-active);
      border-color: var(--theme-active);
      box-shadow: none;
      transform: translateY(1px);
    }
  }
  &[data-variant="outlined"],
  &[data-variant="dashed"] {
    color: var(--theme);
    background: var(--background);
    border-color: currentColor;
    &:hover {
      color: var(--theme-hover);
    }
    &:active {
      color: var(--theme-active);
    }
    &[data-variant="dashed"] {
      border-style: dashed;
    }
  }
  &[data-variant="light"],
  &[data-variant="text"] {
    background-color: color-mix(in oklch, var(--theme), 70% var(--background));
    border-color: color-mix(in oklch, var(--theme), 70% var(--background));
    &[data-variant="text"] {
      background-color: transparent;
      border-color: transparent;
    }
    &:hover {
      background-color: color-mix(
        in oklch,
        var(--theme),
        calc(70% - var(--accent)) var(--background)
      );
    }
    &:active {
      background-color: color-mix(
        in oklch,
        var(--theme),
        calc(70% + var(--accent)) var(--background)
      );
    }
  }
  &[data-block="true"] {
    width: 100%;
  }
`;

const Button = ({
  children,
  variant = "outlined",
  themeColor,
  block,
  ...rest
}: ButtonProps) => (
  <StyledButton
    data-variant={variant}
    data-theme={themeColor || ""}
    data-block={block}
    {...rest}>
    {children}
  </StyledButton>
);

export default Button;
