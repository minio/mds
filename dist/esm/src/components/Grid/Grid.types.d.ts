import { HTMLAttributes, ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
interface GridCommonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: OverrideTheme;
}
export type ConditionalProps =
  | {
      container?: boolean;
      item?: never;
      wrap?: "nowrap" | "wrap-reverse" | "wrap";
      direction?: "column-reverse" | "column" | "row-reverse" | "row";
      columnSpacing?: number;
      rowSpacing?: number;
      xs?: never;
      sm?: never;
      md?: never;
      lg?: never;
      xl?: never;
    }
  | {
      container?: never;
      item?: boolean;
      wrap?: never;
      direction?: never;
      columnSpacing?: never;
      rowSpacing?: never;
      xs?: "auto" | "hidden" | number | boolean;
      sm?: "auto" | "hidden" | number | boolean;
      md?: "auto" | "hidden" | number | boolean;
      lg?: "auto" | "hidden" | number | boolean;
      xl?: "auto" | "hidden" | number | boolean;
    };
export type GridProps = GridCommonProps & ConditionalProps;
export {};
