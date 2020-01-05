import { TASK_STATUS } from '../actions'
import base from '../components/designSystem/base'

export const handleTaskColor = (status: TASK_STATUS) => {
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