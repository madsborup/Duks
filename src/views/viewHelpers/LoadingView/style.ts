import styled from 'styled-components'
import base from '../../../components/designSystem/base'

export const StyledLoadingView = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: ${base.font.size.h3};
  color: ${base.colors.textMuted};
  font-weight: 500;
  height: 100vh;
  width: 100%;
`;