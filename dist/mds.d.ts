import React, { ReactNode, MouseEventHandler, FC } from 'react';
import * as styled_components from 'styled-components';

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

declare const Button: FC<ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;

interface ThemeHandlerProps {
    darkMode?: boolean;
    children: ReactNode;
}

declare const ThemeHandler: FC<ThemeHandlerProps>;

declare const GlobalStyles: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

export { Button, GlobalStyles, ThemeHandler };
