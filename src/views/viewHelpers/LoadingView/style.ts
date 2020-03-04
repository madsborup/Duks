import styled from 'styled-components'
import base from '../../../components/designSystem/base'

export const StyledLoadingView = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  padding: ${base.spacing.small}px;
  font-size: ${base.font.size.h3};
  color: ${base.colors.textMuted};
  letter-spacing: 0.2px;
  font-weight: 500;
`;