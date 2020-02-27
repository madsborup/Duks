import styled from 'styled-components/macro'
import { ReactComponent as ArrowDown } from '../../../assets/svg/ArrowDown.svg';
import base from '../base'

export const DropdownArrow = styled(ArrowDown)`
  width: 12px;
  margin-top: -5px;
  cursor: pointer;

  path {
    stroke: ${base.colors.textMuted};
  }
`;