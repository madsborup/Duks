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
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background: ${base.colors.border};
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
  transition: box-shadow 0.2s ease-in-out;
  border: 1px solid ${tint(0.2, base.colors.highlight)};

  &:hover {
    background: ${tint(0.1, base.colors.highlight)};
  }
`;

export const StyledTextButton = styled(StyledButton)`
  background: none;
  border: 0;
`;
