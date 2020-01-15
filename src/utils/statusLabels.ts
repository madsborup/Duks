import { TASK_STATUS } from "../actions";

export const statusLabels = {
  [TASK_STATUS.UNASSIGNED]: "Unassigned",
  [TASK_STATUS.NOT_STARTED]: "Not started",
  [TASK_STATUS.STARTED]: "Started",
  [TASK_STATUS.STUCK]: "Stuck",
  [TASK_STATUS.REVIEW]: "Ready to be checked",
  [TASK_STATUS.COMPLETED]: "Completed"
};