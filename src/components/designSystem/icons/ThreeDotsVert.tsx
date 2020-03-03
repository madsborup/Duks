import styled from 'styled-components/macro'
import { ReactComponent as ThreeDots } from '../../../assets/svg/ThreeDotsVert.svg';
import base from '../base'

export const ThreeDotsVert = styled(ThreeDots)`
  height: 14px;
  padding: ${base.spacing.xxsmall}px;
  margin-left: ${base.spacing.xxsmall}px;
  cursor: pointer;
  circle {
    fill: ${base.colors.iconDark};
  }

  &:hover {
    circle {
      fill: ${base.colors.text};
    }
  }
`;