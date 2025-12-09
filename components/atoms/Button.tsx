import { css, LinariaClassName } from "@linaria/core";
import { styled } from "@linaria/react";
import React from "react";

type Variant = "solid" | "outlined" | "dashed" | "light";

type ButtonProps = {
  children: React.ReactNode;
  variant?: Variant;
  themeColor?: PresetColors;
} & React.ComponentPropsWithRef<"button">;

const StyledButton = styled.button<{ variant?: Variant }>`
  height: 2rem;
  padding: 0 1rem;
  border-radius: 0.5rem;
  border-width: 1px;
  border-style: ${({ variant }) => (variant === "dashed" ? "dashed" : "solid")};
  font-family: inherit;
  font-size: 1rem;
`;

const StyleSolid = css`
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
  }
`;

const StyleOutlined = css`
  color: var(--theme);
  background: var(--background);
  border-color: currentColor;
  &:hover {
    color: var(--theme-hover);
  }
  &:active {
    color: var(--theme-active);
  }
`;

const StyleLight = css`
  color: var(--text);
  background-color: color-mix(in oklch, var(--theme), 70% var(--background));
  border-color: color-mix(in oklch, var(--theme), 70% var(--background));
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
`;

const variantMap: Record<Variant, LinariaClassName> = {
  solid: StyleSolid,
  outlined: StyleOutlined,
  dashed: StyleOutlined,
  light: StyleLight,
};

const Button = ({
  children,
  themeColor = "blue",
  variant = "outlined",
  ...rest
}: ButtonProps) => (
  <StyledButton
    className={variantMap[variant]}
    variant={variant}
    data-theme={themeColor}
    {...rest}>
    {children}
  </StyledButton>
);

export default Button;
