import { ReactNode, MouseEventHandler, FC } from 'react';

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
}

declare const Button: FC<ButtonProps>;

export { Button };
