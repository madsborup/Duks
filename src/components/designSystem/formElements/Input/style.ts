import styled from "styled-components/macro";
import base from "../../base";

export const StyledInput = styled.input`
  font-size: ${base.font.size.regular};
  font-weight: 400;
  border: 1px solid ${base.colors.border};
  border-radius: ${base.BORDER_RADIUS}px;
  padding: ${base.spacing.xsmall}px ${base.spacing.small}px;
  box-shadow: none;
  outline: none;

  ::placeholder {
    color: ${base.colors.border};
  }

  &:focus {
    border: 1px solid ${base.colors.primary};
  }
`;

export const StyledBigInput = styled.input`
  font-size: ${base.font.size.h3};
  font-weight: 600;
  line-height: 1;
  border: 1px solid transparent;
  border-radius: ${base.BORDER_RADIUS}px;
  padding: ${base.spacing.xsmall}px ${base.spacing.small}px;
  margin-top: ${base.spacing.small}px;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 1px solid ${base.colors.border};
    cursor: text;
  }
`;

export const StyledSwitch = styled.input`
  height: 20px;
  width: 20px;
  border: 1px solid grey;

  &:checked {
    background: blue;
  }
`;