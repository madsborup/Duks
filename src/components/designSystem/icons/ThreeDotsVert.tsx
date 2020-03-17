import styled from 'styled-components/macro'
import { ReactComponent as ThreeDots } from '../../../assets/svg/ThreeDotsVert.svg';
import theme from '../theme'

export const ThreeDotsVert = styled(ThreeDots)`
  height: 14px;
  padding: ${theme.spacing.xxsmall};
  margin-left: ${theme.spacing.xxsmall};
  cursor: pointer;
  circle {
    fill: ${theme.colors.iconDark};
  }

  &:hover {
    circle {
      fill: ${theme.colors.text};
    }
  }
`;