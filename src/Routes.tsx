import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Route, Redirect, Switch, withRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ModalRoot from "./components/modals/ModalRoot";
import { StoreState } from "./reducers";
import { GlobalStyle } from "./globalStyles";
import Login from "./views/Login";
import theme from "./components/designSystem/base";
import AppViewWrapper from "./components/AppViewWrapper";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import ProjectView from "./views/ProjectView";
import ProjectPeopleView from "./views/ProjectPeopleView";
import ProjectBoardView from "./views/ProjectBoardView";
import ProjectFlowView from "./views/ProjectFlowView";
import AppViewRedirect from "./views/AppViewRedirect";
import { ViewGrid } from "./components/designSystem/layout";

interface Props {
  isAuthenticated: boolean;
  isVerifyingUser: boolean;
}

class Routes extends React.Component<Props> {
  render() {
    const { isVerifyingUser, isAuthenticated } = this.props;

    if (isVerifyingUser) {
      return <div>Verifying user...</div>;
    }

    if (!isAuthenticated) {
      return <Redirect to={{ pathname: "login" }} />;
    }

    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ModalRoot />
        <AppViewWrapper>
          <Navbar isFetching={false} />
          <Switch>
            <Route path="/" exact component={AppViewRedirect} />
            <Route path="/login" exact component={Login} />
            <Route path="/:projectSlug" exact component={ProjectView} />
            <Route
              path="/:projectSlug/board"
              exact
              component={ProjectBoardView}
            />
            <Route
              path="/:projectSlug/people"
              exact
              component={ProjectPeopleView}
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

// export default connect(
//   mapStateToProps,
//   {}
// )(Routes);

export default compose<React.ComponentType>(
  connect(mapStateToProps),
  withRouter
)(Routes);
