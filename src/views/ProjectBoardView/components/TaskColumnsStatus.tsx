import React from 'react'
import { TaskData, TASK_STATUS } from "../../../actions";
import BoardTaskColumn from "../../../components/BoardTaskColumn";

interface Props {
  tasks: { [key: string]: TaskData };
}

export const TaskColumnsStatus: React.FC<Props> = (props: Props) => {

  const renderTaskColumns = () => {
    return Object.values(TASK_STATUS).map(status => {
      if (typeof status !== "string" && status !== TASK_STATUS.UNASSIGNED) {
        let columnTasks = Object.values(props.tasks).filter(task => {
          return task.status === status;
        });

        return <BoardTaskColumn status={status} tasks={columnTasks} key={status}/>;
      }
    });
  }

  return (
    <React.Fragment>
      {renderTaskColumns()}
    </React.Fragment>
  )
}
