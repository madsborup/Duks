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
import H1 from "../designSystem/H1";
import { Button, PrimaryButton } from '../designSystem/button'

interface HeaderProps{
  title: string;
  projectSlug: string;
  signOut: Function;
  showModal: Function;
}

class Header extends Component<HeaderProps> {

  constructor (props: HeaderProps) {
    super (props);
  }
  
  render() {
    return (
      <Container>
        <DescriptionContainer>
          <H1>{this.props.title}</H1>
          <DescriptionMeta>Members of this project and their tasks.</DescriptionMeta>
        </DescriptionContainer>
        <ActionsContainer>
          <PrimaryButton onClick={() => this.props.showModal({modalProps: {open: true, projectSlug: this.props.projectSlug}, modalType: 'CREATE_TASK_MODAL'})}>New Task</PrimaryButton>
          <Profile />
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
