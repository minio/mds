import { Theme } from "@emotion/react";
import { ButtonStatesProps, ButtonVariant } from "./Button.types";
export declare const buttonVariant: (
  theme: Theme,
  variantName: ButtonVariant,
) => ButtonStatesProps;
export declare const buttonCSS: (
  theme: Theme,
  variant: ButtonVariant,
  iconOnly?: boolean,
) => import("@emotion/react").SerializedStyles;
