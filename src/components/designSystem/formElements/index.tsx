import React, { ReactNode } from "react";
import { StyledLabel, StyledInput } from "./style";

interface InputProps {
    children?: ReactNode;
    value?: string | number;
    placeholder?: string;
    autofocus?: boolean;
}

export const Input = (props: InputProps) => {
    return (
        <StyledLabel>
            {props.children}
            <StyledInput
                value={props.value}
                placeholder={props.placeholder}
                autoFocus={props.autofocus}
            />
        </StyledLabel>
    );
};