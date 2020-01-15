import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import _, { includes } from "lodash";
import { createStructuredSelector } from "reselect";
import { TaskData, ProjectsData, ProjectData } from "../../../actions";
import { StoreState } from "../../../reducers";
import { getProject } from "../../../selectors/getProject";
import base from "../../../components/designSystem/base";
import BoardTaskColumn from "../../../components/BoardTaskColumn";
import { TaskCounter } from "../style";

interface Props {
  tasks: { [key: string]: TaskData };
  projectSlug: string;
  currentProject: ProjectData;
}

const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${base.font.size.h5};
  line-height: 1;
  font-weight: 400;
  width: 100%;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: ${base.spacing.xsmall}px;
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const AssignedBoard: React.FC<Props> = (props: Props) => {
  const renderTaskColumns = () => {
    return props.currentProject.members.map((member, i) => {
      let columnTasks = Object.values(props.tasks).filter(task => {
        for (let key in task.assigned) {
          if (task.assigned[key].id === member.id) {
            return true;
          }
        }
      });

      const memberProfileAvatar = () => {
        return (
          <HeaderContent>
            <img src={member.photoURL} />
            <div>
              {member.name}
              <TaskCounter>{columnTasks.length}</TaskCounter>
            </div>
          </HeaderContent>
        );
      };

      return (
        <BoardTaskColumn
          headerContent={memberProfileAvatar()}
          tasks={columnTasks}
          key={i}
        />
      );
    });
  };

  return <React.Fragment>{renderTaskColumns()}</React.Fragment>;
};

const mapStateToProps = createStructuredSelector<
  StoreState,
  { projectSlug: string },
  { currentProject: ProjectData }
>({
  currentProject: getProject
});

export default connect(mapStateToProps)(AssignedBoard);
