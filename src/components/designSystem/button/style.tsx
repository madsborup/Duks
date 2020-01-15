import styled from "styled-components";
import base from "../base";
import { ButtonProps } from "./index";
import { tint } from "polished";

export const StyledButton = styled.button<ButtonProps>`
  font-size: ${base.font.size.regular};
  font-weight: 400;
  color: ${base.colors.text};
  background: ${base.colors.white};
  padding: ${props =>
    props.big
      ? `${base.spacing.small}px ${base.spacing.large}px`
      : `${base.spacing.xsmall}px ${base.spacing.medium}px`};
  border-radius: ${base.BORDER_RADIUS}px;
  border: 1px solid ${base.colors.border};
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  outline: 0;
  cursor: pointer;

  &:hover {
    background: ${base.colors.hover};
  }

  &:focus {
    transition: box-shadow 0.2s ease-in-out;
  }
  &:active {
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background: ${base.colors.primary};
  color: ${base.colors.white};
  border: 1px solid ${base.colors.primary};
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    background: ${base.colors.primaryMuted};
  }
`;

export const StyledTextButton = styled(StyledButton)`
  background: none;
  border: 1px solid transparent;
  padding: 0;
  margin: 0 ${base.spacing.medium}px;

  &:hover {
    color: ${base.colors.textMuted};
    border: 1px solid transparent;
    background: none;
  }
`;
