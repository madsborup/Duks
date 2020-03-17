import styled from 'styled-components'
import theme from '../theme'

export const StyledLabel = styled.label`
  font-size: ${theme.font.size.regular};
  font-weight: 400;
  color: ${theme.colors.textMuted};
  letter-spacing: ${theme.font.letterSpacing.heading};
  margin: ${theme.spacing.small} 0 ${theme.spacing.xxsmall};
  position: relative;
`;