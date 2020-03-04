import styled, { keyframes } from 'styled-components/macro'
import { ReactComponent as SpinnerIcon } from '../../../assets/svg/spinner.svg';
import base from '../base'


const loading = keyframes`
  0% {
    path {
      transform: rotate(0deg)
    }
  }
  50% {
    path {
      transform: rotate(180deg)
    }
  }

  100% {
    transform: rotate(360deg)
  }
`;

export const Spinner = styled(SpinnerIcon)`
  height: 24px;
  animation: ${loading} 2s infinite;

  circle {
    stroke: ${base.colors.subHeading};
  }

  path {
    fill: ${base.colors.primary};
  }
`;