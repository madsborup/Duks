import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect, withRouter, RouteComponentProps } from "react-router-dom";
import history from "../../helpers/history";
import { StoreState } from "../../reducers";
import { signIn } from "../../actions";
import Head from "../../components/Head";
import LoadingView from "../viewHelpers/LoadingView";
import {
  LoginView,
  Container,
  Title,
  GoogleSigninButton,
  GoogleG
} from "./style";

interface Props extends RouteComponentProps {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
  signIn: Function;
}

const Login: React.FC<Props> = (props: Props) => {
  return props.isAuthenticated ? 
    <Redirect to="/" />
   : (
    <React.Fragment>
      <Head title={`Login`} description={"Duks sign-in page"} />
      <LoginView>
        <Container>
          <Title>Duks</Title>
          <GoogleSigninButton onClick={() => props.signIn()}>
            <GoogleG />
            Sign-in with Google
          </GoogleSigninButton>
        </Container>
      </LoginView>
    </React.Fragment>
  );
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
