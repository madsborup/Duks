import styled from 'styled-components'
import base from '../base'

export const StyledLabel = styled.label`
  font-size: ${base.font.size.regular};
  font-weight: 400;
  color: ${base.colors.textMuted};
  letter-spacing: ${base.font.letterSpacing.heading};
  margin: ${base.spacing.small}px 0 ${base.spacing.xxsmall}px;
  position: relative;
`;