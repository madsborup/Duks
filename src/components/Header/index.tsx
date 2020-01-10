import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut, showModal } from "../../actions";
import {
  Container,
  DescriptionContainer,
  DescriptionMeta,
  ActionsContainer
} from "./style";
import Profile from '../Profile'
import H1 from "../designSystem/H1";
import { Button, PrimaryButton } from "../designSystem/button";

interface Props {
  title?: string;
  projectSlug: string;
  signOut: Function;
  showModal: Function;
  children?: React.ReactNode;
}

const Header: React.FC<Props> = (props: Props) => {
  return (
    <Container>
      {props.title ? (<H1>{props.title}</H1>) : null}
      {props.children}
      <ActionsContainer>
        <PrimaryButton
          onClick={() =>
            props.showModal({
              modalProps: { open: true, projectSlug: props.projectSlug },
              modalType: "CREATE_TASK_MODAL"
            })
          }
        >
          New Task
        </PrimaryButton>
        <Button onClick={() => props.signOut()}>Logout</Button>
        <Profile />
      </ActionsContainer>
    </Container>
  );
};

export default connect(
  null,
  { showModal, signOut }
)(Header);
