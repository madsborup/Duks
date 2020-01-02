import styled from "styled-components";
import base from "../base";

export const StyledLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: ${base.font.size.regular};
    font-weight: 500;
    color: ${base.colors.meta};
    width: 100%;
    letter-spacing: ${base.font.letterSpacing.heading};
    margin-top: ${base.spacing.medium}px;
    position: relative;
`;

export const StyledInput = styled.input`
    font-size: ${base.font.size.regular};
    font-weight: 400;
    width: initial;
    border: 1px solid ${base.colors.border};
    border-radius: ${base.BORDER_RADIUS}px;
    padding: 10px 14px;
    margin-top: ${base.spacing.xxsmall}px;
    box-shadow: none;
    /* outline: none; */

    ::placeholder {
        color: ${base.colors.border};
    }

    &:focus {
        border: 1px solid ${base.colors.highlight};
    }
`;