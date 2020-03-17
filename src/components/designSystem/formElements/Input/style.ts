import styled from "styled-components/macro";
import theme from "../../theme";

export const StyledInput = styled.input`
  font-size: ${theme.font.size.regular};
  font-weight: 400;
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.BORDER_RADIUS};
  padding: ${theme.spacing.xsmall};
  box-shadow: none;
  outline: none;

  ::placeholder {
    color: ${theme.colors.border};
  }

  &:focus {
    border: 1px solid ${theme.colors.primary};
  }
`;

export const StyledBigInput = styled.input`
  font-size: ${theme.font.size.h3};
  font-weight: 600;
  line-height: 1;
  border: 1px solid transparent;
  border-radius: ${theme.BORDER_RADIUS};
  padding: ${theme.spacing.xsmall};
  margin-top: ${theme.spacing.small};
  box-shadow: none;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 1px solid ${theme.colors.border};
    cursor: text;
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  padding: ${theme.spacing.small} 0 ${theme.spacing.xxsmall};
  align-items: center;
`;

export const SwitchLabel = styled.label`
  font-size: ${theme.font.size.regular};
  font-weight: 400;
  color: ${theme.colors.textMuted};
  letter-spacing: ${theme.font.letterSpacing.heading};
  margin-right: ${theme.spacing.xsmall};
`;

export const StyledSwitch = styled.input`
  height: 20px;
  width: 20px;
  border: 1px solid ${theme.colors.border};
  outline: 0;
  border-radius: 2px;
  cursor: pointer;

  &:checked {
    background: ${theme.colors.secondary};
  }
`;