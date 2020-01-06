import styled from "styled-components";
import base from "../base";
import { ButtonProps } from "./index";
import { tint } from "polished";

export const StyledButton = styled.button<ButtonProps>`
  font-size: ${base.font.size.regular};
  font-weight: 500;
  color: ${base.colors.text};
  background: ${base.colors.white};
  padding: ${props =>
    props.big
      ? `${base.spacing.small}px ${base.spacing.large}px`
      : `${base.spacing.xsmall}px ${base.spacing.small}px`};
  border-radius: ${base.BORDER_RADIUS}px;
  border: 1px solid ${base.colors.border};
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    border: 1px solid ${base.colors.borderFocus};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${base.colors.border};
    transition: box-shadow 0.2s ease-in-out;
  }
  &:active {
    box-shadow: 0 0 0 2px ${base.colors.border};
    transition: box-shadow 0.2s ease-in-out;
  }
`;

export const StyledPrimaryButton = styled(StyledButton)`
  background: ${base.colors.highlight};
  color: ${base.colors.white};
  border: 1px solid ${base.colors.highlight};
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    background: ${base.colors.highlightFaded};
  }
`;

export const StyledTextButton = styled(StyledButton)`
  background: none;
  border: 1px solid transparent;
`;
