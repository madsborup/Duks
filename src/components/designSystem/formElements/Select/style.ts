import styled from "styled-components/macro";
import Select from 'react-select'
import base from "../../base";

export const StyledSelect = styled.select`
  padding: ${base.spacing.xsmall}px ${base.spacing.small}px;
  font-size: ${base.font.size.regular};
  border: 1px solid ${base.colors.border};
  font-weight: 400;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 1px solid ${base.colors.primary};
  }
`;
