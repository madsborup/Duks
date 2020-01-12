import styled from 'styled-components'
import base from '../designSystem/base'
import { TASK_STATUS } from '../../actions'
import { handleTaskColor } from '../../utils/handleTaskColor'
import { tint, rgba } from 'polished'

interface ColumnHeaderProps {
  status: TASK_STATUS;
}

export const StyledBoardTaskColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.xsmall}px ${base.spacing.xsmall}px ${base.spacing.medium}px;
  border-radius: ${base.BORDER_RADIUS}px;
`;

export const ColumnHeader = styled.div<ColumnHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${base.font.size.h5};
  line-height: 1;
  font-weight: 600;
  color: ${base.colors.highlight};
  padding-left: ${base.spacing.xxsmall}px;
`;

export const ColumnHeaderCounter = styled.div`
  font-size: ${base.font.size.small};
  color: ${base.colors.textFaded};
  background: ${base.colors.hover};
  padding: ${base.spacing.xxsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
`;