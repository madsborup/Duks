import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, Route } from 'react-router-dom';
import { StoreState } from '../../reducers';
import { TaskData, FlowData, ProjectData } from '../../actions';
import { getProjectFromSlug } from '../../selectors/getProject';
import Head from '../../components/Head';
import SegmentedControl from '../../components/SegmentedControl';
import Header from '../../components/Header';
import Subheader from '../../components/Subheader';
import LoadingView from '../../views/viewHelpers/LoadingView';
import StatusBoard from './components/StatusBoard';
import AssignedBoard from './components/AssignedBoard';
import { View, Content } from '../../components/designSystem/layout';

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  currentProject: ProjectData;
  tasks: { [key: string]: TaskData };
  flows: { [key: string]: FlowData };
}

const Boards: React.FC<Props> = (props: Props) => {
  const { currentProject } = props;
  const { projectSlug } = props.match.params;

  if (currentProject) {
    return (
      <View>
        <Head title={`${currentProject.title} - Boards`} description={'View task boards'} />
        <Header projectID={currentProject.id} title="Boards" />
        <Subheader>
          <SegmentedControl
            controls={[
              { label: 'Status', path: `/${projectSlug}/boards` },
              {
                label: 'Assigned',
                path: `/${projectSlug}/boards/assigned`
              }
            ]}
          />
        </Subheader>
        <Content>
          <Route
            path="/:projectSlug/boards"
            exact
            render={() => <StatusBoard tasks={props.tasks} />}
          />
          <Route
            path="/:projectSlug/boards/assigned"
            exact
            render={() => <AssignedBoard tasks={props.tasks} currentProject={currentProject} />}
          />
        </Content>
      </View>
    );
  }
  return <LoadingView />;
};

const mapStateToProps = ({ projects, tasks, flows }: StoreState, ownProps: Props) => {
  return {
    currentProject: getProjectFromSlug(projects, ownProps.match.params),
    tasks: tasks.items,
    flows: flows.items
  };
};

export default connect(mapStateToProps)(Boards);
