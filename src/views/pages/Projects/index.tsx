import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import history from '../../../helpers/history'
import { StoreState } from "../../../reducers";
import { AuthData, ProjectData, ProjectsData, fetchProjects } from "../../../actions";
import DashboardNavbar from "../../../components/Navbar";
import DashboardSidebar from "../../../components/Sidebar";
import DashboardHeader from "../../../components/Header";
import DashboardColumn from "../../ProjectColumnView";
import DashboardPeople from "../../ProjectPeopleView";
import DashboardTaskGroup from '../../ProjectTaskGroupView'
import DashboardWelcome from '../../DashboardWelcome'
import ProjectViewWrapper from "../../../components/ProjectViewWrapper";
import { Container } from "./style";

interface DashboardProps {
  fetchProjects: Function;
  auth: AuthData;
  projects: ProjectData[];
  isFetching: boolean;
}

class Dashboard extends React.Component<DashboardProps> {
  //when user gets redirected here after logging, redirect to latest created project the user is member of
  constructor (props: DashboardProps) {
    super(props);
  }

  componentDidMount() {
    if (this.props.auth.user.uid) {
      this.props.fetchProjects(this.props.auth.user.uid);
    }
  }

  render() {

    if (this.props.isFetching) {
      return (
        <Container>
          Loading projects...
        </Container>
      );
    } else if (this.props.projects.length > 0){
      return (
        <Container>
          <Redirect to={`/${this.props.projects[0].slug}`} />
          <DashboardNavbar isFetching={this.props.isFetching}/>
          <Route path="/:projectSlug" component={DashboardSidebar} />
          <ProjectViewWrapper>
            <Route path="/:projectSlug" component={DashboardHeader} />
            <Route path="/:projectSlug/column" exact component={DashboardColumn} />
            <Route path="/:projectSlug/people" exact component={DashboardPeople} />
            <Route path="/:projectSlug/tg/:taskgroupSlug" exact component={DashboardTaskGroup} />
          </ProjectViewWrapper>
        </Container>
      );
    } else {
      return (
        <div>
          No projects -> place onboarding here
        </div>
      )
    }
  }
}

const mapStateToProps = ({ auth, projects }: StoreState) => {
  return { auth, projects: Object.values(projects.items), isFetching: projects.isFetching };
};

export default connect(
  mapStateToProps,
  { fetchProjects }
)(Dashboard);
