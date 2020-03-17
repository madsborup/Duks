import styled from "styled-components/macro";
import theme from '../theme'
import { ButtonProps } from "./index";

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  flex: none;
  align-items: center;
  justify-content: center;
  font-size: ${theme.font.size.regular};
  font-weight: 600;
  color: ${theme.colors.text};
  background: ${theme.colors.white};
  padding: ${props =>
    props.big
      ? `${props.theme.spacing.small} ${props.theme.spacing.large}`
      : `${props.theme.spacing.xsmall} ${props.theme.spacing.medium}`};
  border-radius: ${theme.BORDER_RADIUS};
  border: 0;
  outline: 0;
  cursor: pointer;

  &:hover:enabled {
    cursor: pointer;
  }

  &:disabled {
    background: ${theme.colors.viewBackground};
    color: ${theme.colors.textMuted};
    cursor: inherit;
    font-weight: 500;
  }

`;

export const StyledPrimaryButton = styled(StyledButton)`
  background: ${theme.colors.primary};
  color: ${theme.colors.white};

  &:disabled {
    background: ${theme.colors.viewBackground};
    color: ${theme.colors.textMuted};
  }

  &:hover:enabled {
    background: ${theme.colors.primaryMuted};
  }
`;

export const StyledOutlineButton = styled(StyledButton)`
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.heading};

  &:hover {
    background: ${theme.colors.hover};
  }
`;

export const StyledTextButton = styled(StyledButton)`
  padding: 0;
  margin: 0 ${theme.spacing.medium};
  background: none;
  border: 1px solid transparent;
  color: ${theme.colors.textMuted};

  &:hover {
    color: ${theme.colors.text};
    border: 1px solid transparent;
    background: none;
  }
`;

export const StyledDangerButton = styled(StyledButton)`
  border: 1px solid ${theme.colors.danger};
  color: ${theme.colors.danger};

  &:hover {
    background: ${theme.colors.hover};
  }
`;