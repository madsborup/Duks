export enum FORM_TASK_STATUS {
  NOT_STARTED = "Not started",
  STARTED = "Started",
  REVIEW = "Ready for review",
  COMPLETED = "Completed"
}

export const statusLabels = {
  [FORM_TASK_STATUS.NOT_STARTED]: "Not started",
  [FORM_TASK_STATUS.STARTED]: "Started",
  [FORM_TASK_STATUS.REVIEW]: "Ready to be checked",
  [FORM_TASK_STATUS.COMPLETED]: "Completed"
};