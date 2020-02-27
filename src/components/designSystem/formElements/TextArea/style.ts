import styled from "styled-components";
import base from "../../base";
import { Props } from './index'

export const StyledTextArea = styled.textarea<Props>`
  font-size: ${({ big }) => (big ? base.font.size.h3 : base.font.size.regular)};
  font-weight: ${({ big }) => big ? "600" : "400"};
  border: 1px solid ${base.colors.border};
  border-radius: ${base.BORDER_RADIUS}px;
  padding: ${base.spacing.xsmall}px;
  min-height: ${({ big }) => big ? "40px" : "100px"};
  box-shadow: none;
  outline: none;
  resize: none;

  &:focus {
    border: 1px solid ${base.colors.primary};
  }
`;
