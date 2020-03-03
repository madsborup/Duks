import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ModalRoot from "./components/modals/ModalRoot";
import { StoreState } from "./reducers";
import { ProjectsData } from "./actions";
import theme from "./components/designSystem/base";
import AppViewWrapper from "./components/AppViewWrapper";
import Navbar from "./components/Navbar";
import Project from "./views/Project";
import Boards from "./views/Boards";
import UnassignedTasks from "./views/UnassignedTasks";
import Flow from "./views/Flow";
import ProjectSettings from "./views/ProjectSettings";
import AppViewRedirect from "./views/viewHelpers/AppViewRedirect";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  isAuthenticated: boolean;
  isVerifyingUser: boolean;
  projects: ProjectsData;
}

const Routes: React.FC<Props> = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ModalRoot />
      <AppViewWrapper>
        <Switch>
          <Route path="/" exact component={AppViewRedirect} />
          <Route path="/:projectSlug" exact component={Project} />
          <Route path="/:projectSlug/boards" component={Boards} />
          <Route
            path="/:projectSlug/unassigned"
            exact
            component={UnassignedTasks}
          />
          <Route
            path="/:projectSlug/settings"
            exact
            component={ProjectSettings}
          />
          <Route path="/:projectSlug/:flowSlug" exact component={Flow} />
        </Switch>
      </AppViewWrapper>
    </ThemeProvider>
  );
};

const mapStateToProps = ({ auth, projects }: StoreState) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    isVerifyingUser: auth.isVerifying,
    projects
  };
};

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps)
)(Routes);
