import React from "react";
import { connect } from 'react-redux'
import { StoreState } from '../../../reducers'
import { TaskData, TASK_STATUS } from "../../../actions";
import { getMemberTasks } from '../../../selectors/getMemberTasks'
import BoardTaskColumn from "../../../components/BoardTaskColumn";

interface Props {
  members: string[];
  memberTasks: TaskData[];
}

const TaskColumnsPeople: React.FC<Props> = (props: Props) => {
  const renderTaskColumns = () => {
    return props.members.map(member => {
      // return <BoardTaskColumn status={status} tasks={columnTasks} />;
    return <div>{member}{props.memberTasks.length}</div>
    });
  };

  return <React.Fragment>{renderTaskColumns()}</React.Fragment>;
};

const mapStateToProps = (state: StoreState ) => {
  return {
    memberTasks: getMemberTasks(state)
  }
}

export default connect(mapStateToProps)(TaskColumnsPeople)
