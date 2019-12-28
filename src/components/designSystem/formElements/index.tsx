import React, { ReactNode } from "react";
import { StyledLabel, StyledInput } from "./style";

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
    children?: ReactNode;
    value?: string | number;
}

export const Input = (props: InputProps) => {

    const {children, ...rest} = props;
    return (
        <StyledLabel>
            {children}
            <StyledInput
                {...rest}
            />
        </StyledLabel>
    );
};
