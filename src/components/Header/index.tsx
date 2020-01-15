import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut, showModal } from "../../actions";
import {
  StyledHeader,
  Title,
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
    <StyledHeader>
      {props.title ? (<Title>{props.title}</Title>) : null}
      {props.children}
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
      <ActionsContainer>
        <Button onClick={() => props.signOut()}>Logout</Button>
        <Profile />
      </ActionsContainer>
    </StyledHeader>
  );
};

export default connect(
  null,
  { showModal, signOut }
)(Header);
