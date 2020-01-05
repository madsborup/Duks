import React, { Component } from "react";
import { connect } from "react-redux";
import {  signOut, showModal } from "../../actions";
import Profile from "../Profile";
import {
  Container,
  DescriptionContainer,
  DescriptionMeta,
  ActionsContainer
} from "./style";
import H2 from "../designSystem/H2";
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
          <H2>{this.props.title}</H2>
        </DescriptionContainer>
        <ActionsContainer>
          <PrimaryButton onClick={() => this.props.showModal({modalProps: {open: true, projectSlug: this.props.projectSlug}, modalType: 'CREATE_TASK_MODAL'})}>New Task</PrimaryButton>
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
