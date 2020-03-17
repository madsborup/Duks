import styled from 'styled-components/macro'
import theme from '../designSystem/theme'

export const StyledBoardTaskColumn = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  background: ${theme.colors.shadow};
  padding: ${theme.spacing.xsmall};
`;

export const ColumnHeader = styled.div`
  display: flex;
  align-items: center;
  padding-left: ${theme.spacing.xxsmall};
`;

export const ColumnHeaderCounter = styled.div`
  font-size: ${theme.font.size.small};
  color: ${theme.colors.iconDark};
  background: ${theme.colors.subHeading};
  border: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.xxsmall};
  border-radius: ${theme.BORDER_RADIUS};
`;