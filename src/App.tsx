import React, { Component } from "react";
import history from "./helpers/history";
import ModalRoot from "./components/modals/ModalRoot";
import { StoreState } from "./reducers";
import { AuthData, signIn } from "./actions";
import Login from "./views/pages/Login";
import Dashboard from "./views/pages/Projects";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import { GlobalStyle } from "./globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./components/designSystem/base";

interface AppProps {
  isAuthenticated: boolean;
  isVerifying: boolean;
}

class App extends Component<AppProps> {
  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ModalRoot />
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute
              path="/"
              component={Dashboard}
              isAuthenticated={this.props.isAuthenticated}
              isVerifying={this.props.isVerifying}
            />
          </Switch>
        </ThemeProvider>
      </Router>
    );
  }
}

const mapStateToProps = ({ auth }: StoreState) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    isVerifying: auth.isVerifying
  };
};

export default connect(
  mapStateToProps,
  {}
)(App);
