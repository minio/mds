import React, { ReactNode, FC, MouseEventHandler, SVGProps } from "react";
import * as styled_components from "styled-components";

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

export { ApplicationLogo, Button, GlobalStyles, ThemeHandler, ThemedLogo };
