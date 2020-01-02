import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { StoreState } from "../../reducers";
import { signIn } from "../../actions";
import { PrimaryButton } from "../../components/designSystem/button";

interface LoginProps {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
  signIn: Function;
}

class Login extends Component<LoginProps> {
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

export default connect(
  mapStateToProps,
  { signIn }
)(Login);
