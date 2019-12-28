import React, { Component } from "react";
import { connect } from "react-redux";
import { createTaskGroup } from "../../../actions";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import { Form } from "./style";
import { Input } from "../../designSystem/formElements";
import { Button, PrimaryButton } from "../../designSystem/button";

interface CreateTGModalProps {
  projectSlug?: string | undefined;
  closeModal: Function;
  createTaskGroup: Function;
}

interface CreateTGModalState {
  title: string;
}

class CreateTGModal extends Component<CreateTGModalProps, CreateTGModalState> {
  constructor(props: CreateTGModalProps) {
    super(props);

    //TODO add members
    this.state = {
      title: ""
    };
  }

  onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value });
  };

  handleProjectSubmit = (e: any) => {
    const { title } = this.state;
    this.props.createTaskGroup(title, this.props.projectSlug);
    this.props.closeModal();
    e.preventDefault();
  };

  render() {
    return (
      <ModalBody>
        <CloseButton onClick={() => this.props.closeModal()} />
        <ModalTitle>Create task group</ModalTitle>
        <Form onSubmit={e => this.handleProjectSubmit(e)}>
          <Input
            placeholder="New project"
            value={this.state.title}
            onChange={this.onTitleChange}
          >
            Title
          </Input>
          <ModalActions>
            <PrimaryButton>Create</PrimaryButton>
          </ModalActions>
        </Form>
      </ModalBody>
    );
  }
}

export default connect(
  null,
  { createTaskGroup }
)(CreateTGModal);
