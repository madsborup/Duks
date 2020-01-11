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
import { GlobalStyle } from "./globalStyles";
import theme from "./components/designSystem/base";
import AppViewWrapper from "./components/AppViewWrapper";
import Navbar from "./components/Navbar";
import ProjectView from "./views/ProjectView";
import ProjectBoardPeopleView from "./views/ProjectBoardPeopleView";
import ProjectBoardView from "./views/ProjectBoardView";
import ProjectUnassignedTasksView from './views/ProjectUnassignedTasksView'
import ProjectFlowView from "./views/ProjectFlowView";
import AppViewRedirect from "./views/AppViewRedirect";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  isAuthenticated: boolean;
  isVerifyingUser: boolean;
}

class Routes extends React.Component<Props> {
  render() {
    const { projectSlug } = this.props.match.params;

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ModalRoot />
        <AppViewWrapper>
          <Switch>
            <Route path="/" exact component={AppViewRedirect} />
            <Route path="/:projectSlug" exact component={ProjectView} />
            <Route
              path="/:projectSlug/boards/"
              exact
              component={ProjectBoardView}
            />
            <Route
              path="/:projectSlug/unassigned/"
              exact
              component={ProjectUnassignedTasksView}
            />
            <Route
              path="/:projectSlug/boards/people"
              exact
              component={ProjectBoardPeopleView}
            />
            <Route
              path="/:projectSlug/:flowSlug"
              exact
              component={ProjectFlowView}
            />
          </Switch>
        </AppViewWrapper>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = ({ auth }: StoreState) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    isVerifyingUser: auth.isVerifying
  };
};

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps)
)(Routes);
