import styled, { keyframes } from 'styled-components/macro'
import { ReactComponent as SpinnerIcon } from '../../../assets/svg/spinner.svg';
import theme from '../theme'


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
    stroke: ${theme.colors.subHeading};
  }

  path {
    fill: ${theme.colors.primary};
  }
`;