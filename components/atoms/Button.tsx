import React from "react";
import Link, { LinkProps } from "next/link";
import { css, cx } from "@linaria/core";

type Variant = "solid" | "outlined" | "dashed" | "light" | "text";

export const Variants: Variant[] = [
  "solid",
  "outlined",
  "dashed",
  "light",
  "text",
];

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  themeColor?: "primary" | PresetColor;
  size?: "large" | "small";
  block?: boolean;
  ghost?: boolean;
};

type ButtonProps = BaseProps &
  React.ComponentPropsWithRef<"button"> & {
    href?: never;
  };

type AnchorProps = BaseProps &
  Omit<LinkProps, keyof React.ComponentPropsWithRef<"button">>;

type MixedProps = ButtonProps | AnchorProps;

const styles = css`
  display: inline-block;
  padding: 0.25rem 1rem;
  border-radius: 0.35em;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  color: var(--text);
  font-family: inherit;
  font-size: 1rem;
  text-decoration: none;
  transition-property: color, background-color;
  transition-duration: var(--transition-duration);
  transition-timing-function: var(--transition-function);
  &[data-variant="solid"] {
    color: oklch(from var(--theme) calc((1 - sign(l - 0.7)) / 2) 0 0);
    background-color: var(--theme);
    border-color: var(--theme);
    box-shadow: 0 2px 0 oklch(from var(--theme) l c h / 0.4);
    &:not(:disabled) {
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
  }
  &[data-variant="outlined"],
  &[data-variant="dashed"] {
    color: var(--theme);
    background: var(--background);
    border-color: currentColor;
    &:not(:disabled) {
      &:hover {
        color: var(--theme-hover);
      }
      &:active {
        color: var(--theme-active);
      }
    }
    &[data-variant="dashed"] {
      border-style: dashed;
    }
    &[data-ghost="true"] {
      background-color: transparent;
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
    &:not(:disabled) {
      &:hover {
        background-color: color-mix(
          in oklch,
          var(--theme),
          calc(70% - var(--accent) * 100%) var(--background)
        );
      }
      &:active {
        background-color: color-mix(
          in oklch,
          var(--theme),
          calc(70% + var(--accent) * 100%) var(--background)
        );
      }
    }
  }
  &[data-size="small"] {
    padding: 0 0.5em;
  }
  &[data-size="large"] {
    padding-block: 0.4em;
    font-size: large;
  }
  &[data-block="true"] {
    width: 100%;
  }
  &:disabled {
    filter: grayscale(1);
    cursor: not-allowed;
  }
`;

const Button = ({
  children,
  className,
  variant = "outlined",
  themeColor,
  size,
  block,
  ghost,
  ...rest
}: MixedProps) => {
  const sharedProps = {
    className: cx(className, styles),
    "data-variant": variant,
    "data-theme": themeColor || "",
    "data-size": size,
    "data-block": block,
    "data-ghost": ghost,
  };
  if (rest.href !== undefined) {
    return (
      <Link {...sharedProps} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button {...sharedProps} {...rest}>
      {children}
    </button>
  );
};

export default Button;
