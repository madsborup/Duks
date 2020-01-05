import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from 'react-router-dom'
import history from '../../helpers/history'
import { StoreState } from "../../reducers";
import Routes from "../../Routes";
import Login from "../../views/Login";

interface Props {
  isAuthenticated: boolean;
  isVerifyingUser: boolean;
}

class RedirectHandler extends Component<Props> {
  componentDidUpdate() {}

  render() {
    const { isVerifyingUser, isAuthenticated } = this.props;

    if (isVerifyingUser) {
      return <div>Verifying user...</div>;
    }

    if (!isAuthenticated) {
      history.push("/login");
      return <Route path="/login" component={Login} />
    }

    return <Routes />;
  }
}

const mapStateToProps = ({ auth }: StoreState) => {
  return {
    isAuthenticated: auth.isAuthenticated,
    isVerifyingUser: auth.isVerifying
  };
};

export default connect(mapStateToProps)(RedirectHandler);
