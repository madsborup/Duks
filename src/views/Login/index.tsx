import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect, withRouter, RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../reducers";
import { signIn } from "../../actions";
import { PrimaryButton } from "../../components/designSystem/button";

interface Props extends RouteComponentProps {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
  signIn: Function;
}

class Login extends Component<Props> {
  componentDidMount() {
    console.log("mounted");
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    } else {
      if (!this.props.isLoggingIn) {
        return (
          <div>
            <PrimaryButton onClick={() => this.props.signIn()}>
              Login
            </PrimaryButton>
          </div>
        );
      } else {
        return <div>Logging in...</div>;
      }
    }
  }
}

const mapStateToProps = ({ auth }: StoreState) => {
  return {
    isLoggingIn: auth.isLogginIn,
    isAuthenticated: auth.isAuthenticated
  };
};

export default compose<React.ComponentType>(
  withRouter,
  connect(
    mapStateToProps,
    { signIn }
  )
)(Login);
