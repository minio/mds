import React, {
  ReactNode,
  FC,
  MouseEventHandler,
  SVGProps,
  HTMLAttributes,
} from "react";
import * as styled_components from "styled-components";
import { CSSObject } from "styled-components";

interface ThemeHandlerProps {
  darkMode?: boolean;
  children: ReactNode;
}

declare const ThemeHandler: FC<ThemeHandlerProps>;

declare const GlobalStyles: styled_components.GlobalStyleComponent<
  {},
  styled_components.DefaultTheme
>;

interface ButtonProps {
  id: string;
  name?: string;
  label?: string;
  variant?: "regular" | "callAction" | "secondary";
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  fullWidth?: boolean;
  disabled?: boolean;
  collapseOnSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
}

declare const Button: FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
>;

interface ApplicationLogoProps {
  applicationName: "console" | "operator" | "directpv" | "kes" | "subnet";
  subVariant?: "simple" | "AGPL" | "standard" | "enterprise";
  inverse?: boolean;
}

declare const ApplicationLogo: FC<ApplicationLogoProps>;

declare const ThemedLogo: FC<SVGProps<any>>;

interface GridCommonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: CSSObject;
}
type ConditionalProps =
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
type GridProps = GridCommonProps & ConditionalProps;

declare const Grid: FC<GridProps>;

interface LoginWrapperProps {
  logoProps: ApplicationLogoProps;
  form: ReactNode;
  formFooter?: ReactNode;
  promoHeader?: ReactNode;
  promoInfo?: ReactNode;
}

declare const LoginWrapper: FC<LoginWrapperProps>;

export {
  ApplicationLogo,
  Button,
  GlobalStyles,
  Grid,
  LoginWrapper,
  ThemeHandler,
  ThemedLogo,
};
