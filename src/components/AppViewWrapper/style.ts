import styled from 'styled-components'
import { NAVBAR_WIDTH } from '../designSystem/layout'

export const StyledAppViewWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: ${NAVBAR_WIDTH}px 1fr;
  grid-template-areas: 'nav main'
`;