import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect, withRouter, RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../reducers";
import { signIn } from "../../actions";
import H1 from '../../components/designSystem/H1'
import { LoginView, Container, GoogleSigninButton } from "./style";

interface Props extends RouteComponentProps {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
  signIn: Function;
}

const Login: React.FC<Props> = (props: Props) => {
  if (props.isAuthenticated) {
    return <Redirect to="/" />;
  }

  if (!props.isLoggingIn) {
    return (
      <LoginView>
        <Container>
          <H1>Login</H1>
          <GoogleSigninButton onClick={() => props.signIn()}>Sign-in with Google</GoogleSigninButton>
        </Container>
      </LoginView>
    );
  } else {
    return <div>Logging in...</div>;
  }
};

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
