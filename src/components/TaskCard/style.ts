import styled from 'styled-components'
import base from '../designSystem/base'
import { TASK_STATUS } from '../../actions'

const handleTaskColor = (status: TASK_STATUS) => {
  switch (status) {
    case TASK_STATUS.UNASSIGNED:
      return base.colors.task.unassigned
    case TASK_STATUS.NOT_STARTED:
      return base.colors.task.notStarted
    case TASK_STATUS.STARTED:
      return base.colors.task.started
    case TASK_STATUS.STUCK:
      return base.colors.task.stuck
    case TASK_STATUS.REVIEW:
      return base.colors.task.review
    case TASK_STATUS.COMPLETED:
      return base.colors.task.completed
  }
}

interface ContainerProps {
  status: TASK_STATUS;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.xsmall}px;
  margin-bottom: ${base.spacing.small}px;
  border-radius: ${base.BORDER_RADIUS}px;
  background: ${base.colors.white};
  cursor: pointer;
  border-left: 5px solid ${({ status }) => handleTaskColor(status)};
`;

export const FlowTitle = styled.span`
  color: ${base.colors.textFaded};
  font-size: ${base.font.size.small};
`;

export const TaskTitle = styled.span`
  color: ${base.colors.text};
  font-size: ${base.font.size.regular};
  margin-top: ${base.spacing.xxsmall}px;
`;

