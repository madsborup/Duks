import React, { Component } from "react";
import { connect } from "react-redux";
import { signOut, showModal } from "../../actions";
import { StoreState } from '../../reducers'
import { StyledHeader, Title, ActionsContainer } from "./style";
import Profile from "../Profile";
import { Button, PrimaryButton } from "../designSystem/button";

interface Props {
  title?: string;
  projectID: string;
  isFlowsEmpty: boolean;
  signOut: Function;
  showModal: Function;
  children?: React.ReactNode;
}

const Header: React.FC<Props> = (props: Props) => {
  return (
    <StyledHeader>
      {props.title && <Title>{props.title}</Title>}
      {props.children}
      <ActionsContainer>
        <PrimaryButton
          onClick={() =>
            props.showModal({
              modalProps: { open: true, projectID: props.projectID },
              modalType: "CREATE_TASK_MODAL"
            })
          }
          disabled={!props.isFlowsEmpty}
        >
          New Task
        </PrimaryButton>
        <Profile />
      </ActionsContainer>
    </StyledHeader>
  );
};

const mapStateToProps = ({flows }: StoreState) => {
  return {
    isFlowsEmpty: Object.values(flows.items).length > 0
  }
}

export default connect(
  mapStateToProps,
  { showModal, signOut }
)(Header);
