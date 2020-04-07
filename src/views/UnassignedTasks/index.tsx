import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../../reducers';
import { ProjectData, TaskData } from '../../actions';
import { getProjectFromSlug } from '../../selectors/getProject';
import { View, Content } from '../../components/designSystem/layout';
import Head from '../../components/Head';
import Header from '../../components/Header';
import TaskCard from '../../components/TaskCard';
import { CardContainer } from './style';

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  currentProject: ProjectData;
  tasks: TaskData[];
}

const UnassignedTasks: React.FC<Props> = (props: Props) => {
  const renderTasks = () => {
    return props.tasks.map((task: TaskData) => {
      return (
        <React.Fragment>
          <TaskCard task={task} flowID={task.flowID} key={task.id} />
        </React.Fragment>
      );
    });
  };

  return (
    <View>
      <Head
        title={`${props.currentProject.title} - Unassigned tasks`}
        description={'View unassigned tasks'}
      />
      <Header title="Unassigned tasks" projectID={props.currentProject.id} />
      <Content>
        <CardContainer>{renderTasks()}</CardContainer>
      </Content>
    </View>
  );
};

const mapStateToProps = ({ projects, tasks }: StoreState, ownProps: Props) => {
  return {
    currentProject: getProjectFromSlug(projects, ownProps.match.params),
    tasks: Object.values(tasks.items).filter(task => {
      return task.assigned && task.assigned.length === 0;
    })
  };
};

export default connect(mapStateToProps)(UnassignedTasks);
