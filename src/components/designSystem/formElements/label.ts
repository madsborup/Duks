import styled from 'styled-components'
import base from '../base'

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${base.font.size.regular};
  font-weight: 500;
  color: ${base.colors.meta};
  width: 100%;
  letter-spacing: ${base.font.letterSpacing.heading};
  margin: ${base.spacing.small}px 0 ${base.spacing.xxsmall}px;
  position: relative;
`;