import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { StyledComponent } from 'styled-components'
import { StyledButton, StyledPrimaryButton, StyledTextButton } from "./style";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    big?: boolean;
    to?: string;
    children: ReactNode;
}

const handleButtonLinking = (ButtonComponent: StyledComponent<"button", ButtonProps>, props: ButtonProps): JSX.Element => {
    const { to, children, ...rest } = props;
    const button = (<ButtonComponent {...rest}>{children}</ButtonComponent>);

    if (to) {
        return (
            <Link to={to}>
                {button}
            </Link>
        );
    }
    return button;
};

export const Button = (props: ButtonProps) => {
    return handleButtonLinking(StyledButton, props);
};

export const PrimaryButton = (props: ButtonProps): JSX.Element => {
    return handleButtonLinking(StyledPrimaryButton, props);
};

export const TextButton = (props: ButtonProps): JSX.Element => {
    return handleButtonLinking(StyledTextButton, props);
};
