import React, { Component } from "react";
import { connect } from "react-redux";
import { createFlow } from "../../../actions";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import { Form } from "./style";
import { Input } from "../../designSystem/formElements";
import { Button, PrimaryButton } from "../../designSystem/button";

interface CreateFlowModalProps {
  projectSlug?: string;
  closeModal: Function;
  createFlow: Function;
}

interface State {
  title: string;
}

class CreateFlowModal extends Component<CreateFlowModalProps, State> {
  constructor(props: CreateFlowModalProps) {
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
    this.props.createFlow(title, this.props.projectSlug);
    this.props.closeModal();
    e.preventDefault();
  };

  render() {
    return (
      <ModalBody>
        <CloseButton onClick={() => this.props.closeModal()} />
        <ModalTitle>Create flow</ModalTitle>
        <Form onSubmit={e => this.handleProjectSubmit(e)}>
          <Input
            placeholder="New flow"
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
  { createFlow }
)(CreateFlowModal);
