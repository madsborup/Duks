import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../../reducers';
import { signIn } from '../../actions';
import Head from '../../components/Head';
import { LoginView, Container, Title, GoogleSigninButton, GoogleG } from './style';

interface Props extends RouteComponentProps {
  isLoggingIn: boolean;
  isAuthenticated: boolean;
  signIn: () => void;
}

const Login: React.FC<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <Head title={`Login`} description={'Duks sign-in page'} />
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
