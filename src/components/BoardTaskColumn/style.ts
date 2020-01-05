import styled from 'styled-components'
import base from '../designSystem/base'
import { TASK_STATUS } from '../../actions'
import { handleTaskColor } from '../../utils/handleTaskColor'
import { rgba } from 'polished'

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
  justify-content: center;
  font-size: ${base.font.size.h5};
  font-weight: 500;
  padding: ${base.spacing.xxsmall}px 0;
  width: 100%;
  color: ${({ status }) => handleTaskColor(status)};
  background: ${({ status }) => rgba(handleTaskColor(status), 0.22)};
  border: 1px solid ${({ status }) => rgba(handleTaskColor(status), 0.20)};
  border-radius: ${base.BORDER_RADIUS}px;
`;