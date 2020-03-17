import styled from 'styled-components'
import theme from '../../../components/designSystem/theme'

export const StyledLoadingView = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Content = styled.div`
  padding: ${theme.spacing.small};
  font-size: ${theme.font.size.h3};
  color: ${theme.colors.textMuted};
  letter-spacing: 0.2px;
  font-weight: 500;
`;