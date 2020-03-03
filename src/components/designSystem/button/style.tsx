import styled from "styled-components/macro";
import base from "../base";
import { ButtonProps } from "./index";
import { tint } from "polished";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  font-size: ${base.font.size.regular};
  font-weight: 600;
  color: ${base.colors.text};
  background: ${base.colors.white};
  padding: ${props =>
    props.big
      ? `${base.spacing.small}px ${base.spacing.large}px`
      : `${base.spacing.xsmall}px ${base.spacing.medium}px`};
  border-radius: ${base.BORDER_RADIUS}px;
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover:enabled {
    cursor: pointer;
  }

  &:disabled {
    background: ${base.colors.viewBackground};
    color: ${base.colors.textMuted};
    cursor: inherit;
    font-weight: 500;
  }

`;

export const StyledPrimaryButton = styled(StyledButton)`
  background: ${base.colors.primary};
  color: ${base.colors.white};

  &:disabled {
    background: ${base.colors.viewBackground};
    color: ${base.colors.textMuted};
  }

  &:hover:enabled {
    background: ${base.colors.primaryMuted};
  }
`;

export const StyledOutlineButton = styled(StyledButton)`
  border: 1px solid ${base.colors.border};
  color: ${base.colors.heading};

  &:hover {
    background: ${base.colors.hover};
  }
`;

export const StyledTextButton = styled(StyledButton)`
  padding: 0;
  margin: 0 ${base.spacing.medium}px;
  background: none;
  border: 1px solid transparent;
  color: ${base.colors.textMuted};

  &:hover {
    color: ${base.colors.text};
    border: 1px solid transparent;
    background: none;
  }
`;

export const StyledDangerButton = styled(StyledButton)`
  border: 1px solid ${base.colors.danger};
  color: ${base.colors.danger};

  &:hover {
    background: ${base.colors.hover};
  }
`;