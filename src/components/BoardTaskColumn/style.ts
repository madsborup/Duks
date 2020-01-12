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
  border-radius: ${base.BORDER_RADIUS}px;
  background: #F7F8F9;
  padding: ${base.spacing.xsmall}px;
`;

export const ColumnHeader = styled.div<ColumnHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${base.font.size.h6};
  line-height: 1;
  font-weight: 600;
  color: ${base.colors.textFaded};
  padding-left: ${base.spacing.xxsmall}px;
`;

export const ColumnHeaderCounter = styled.div`
  font-size: ${base.font.size.small};
  color: ${base.colors.textFaded};
  background: ${base.colors.sidebar};
  padding: ${base.spacing.xxsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
`;