import React, { Component } from "react";
import { connect } from "react-redux";
import {  signOut, showModal } from "../../actions";
import {
  Container,
  DescriptionContainer,
  DescriptionMeta,
  ActionsContainer
} from "./style";
import H1 from "../designSystem/H1";
import { Button, PrimaryButton } from '../designSystem/button'

interface Props{
  title: string;
  projectSlug: string;
  signOut: Function;
  showModal: Function;
}

class Header extends Component<Props> {

  constructor (props: Props) {
    super (props);
  }
  
  render() {
    return (
      <Container>
        <DescriptionContainer>
          <H1>{this.props.title}</H1>
        </DescriptionContainer>
        <ActionsContainer>
          <Button onClick={() => this.props.signOut()}>Logout</Button>
        </ActionsContainer>
      </Container>
    );
  }
}

export default connect(
  null,
  { showModal, signOut }
)(Header);
