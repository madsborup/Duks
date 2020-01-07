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
`;

export const ColumnHeader = styled.div<ColumnHeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${base.font.size.h5};
  font-weight: 500;
  color: ${base.colors.task.unassigned};
  padding-bottom: ${base.spacing.xxsmall}px;
  border-bottom: 1px solid ${rgba(base.colors.task.unassigned, 0.25)};;
  /* color: ${({ status }) => handleTaskColor(status)}; */
  /* border: 1px solid ${({ status }) => rgba(handleTaskColor(status), 0.20)}; */
`;

export const ColumnHeaderCounter = styled.div`
  font-size: ${base.font.size.small};
  color: ${base.colors.white};
  background: ${rgba(base.colors.task.unassigned, 0.25)};
  padding: 4px ${base.spacing.xxsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
`;