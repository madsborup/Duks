import styled from 'styled-components/macro'
import { ReactComponent as ArrowDown } from '../../../assets/svg/ArrowDown.svg';
import theme from '../theme'

export const DropdownArrow = styled(ArrowDown)`
  width: 12px;
  margin-top: -5px;
  cursor: pointer;

  path {
    stroke: ${theme.colors.textMuted};
  }
`;