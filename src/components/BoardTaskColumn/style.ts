import styled from 'styled-components/macro'
import base from '../designSystem/base'

export const StyledBoardTaskColumn = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: ${base.BORDER_RADIUS}px;
  background: ${base.colors.shadow};
  padding: ${base.spacing.xsmall}px;
`;

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${base.spacing.xxsmall}px;
`;

export const ColumnHeaderCounter = styled.div`
  font-size: ${base.font.size.small};
  color: ${base.colors.iconDark};
  background: ${base.colors.subHeading};
  border: 1px solid ${base.colors.border};
  padding: ${base.spacing.xxsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
`;