import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from 'redux'
import { Route, Redirect } from "react-router-dom";
import { StoreState } from "../../reducers";
import history from '../../helpers/history'
import LoadingView from "../../views/viewHelpers/LoadingView";
import Routes from "../../Routes";
import Login from "../../views/Login";

interface Props {
  isAuthenticated: boolean;
  isVerifyingUser: boolean;
}

const RedirectHandler: React.FC<Props> = (props: Props) => {
  const { isVerifyingUser, isAuthenticated } = props;

  if (isVerifyingUser) {
    return <LoadingView content="Logging in..." />;
  }

  if (!isAuthenticated) {
    return (
      <React.Fragment>
        <Route path="/login" exact component={Login} />
        <Redirect to="/login" />
      </React.Fragment>
    );
  }

  return <Routes />;
};

const mapStateToProps = ({ auth }: StoreState) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    isVerifyingUser: auth.isVerifying,
  };
};

export default connect(mapStateToProps)(RedirectHandler);
