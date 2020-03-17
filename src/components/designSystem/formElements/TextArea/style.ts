import styled from "styled-components";
import theme from "../../theme";
import { Props } from './index'

export const StyledTextArea = styled.textarea<Props>`
  font-size: ${({ big }) => (big ? theme.font.size.h3 : theme.font.size.regular)};
  font-weight: ${({ big }) => big ? "600" : "400"};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.BORDER_RADIUS};
  padding: ${theme.spacing.xsmall};
  min-height: ${({ big }) => big ? "40px" : "100px"};
  box-shadow: none;
  outline: none;
  resize: none;

  &:focus {
    border: 1px solid ${theme.colors.primary};
  }
`;
