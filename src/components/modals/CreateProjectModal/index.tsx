import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { AuthData, createProject } from "../../../actions";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import { Form } from "./style";
import { Input } from "../../designSystem/formElements";
import { Button, PrimaryButton } from "../../designSystem/button";

interface CreateProjectModalProps {
  auth: AuthData;
  closeModal: Function;
  createProject: Function;
}

interface CreateProjectModalState {
  title: string;
  description: string;
}

class CreateProjectModal extends Component<
  CreateProjectModalProps,
  CreateProjectModalState
> {
  constructor(props: CreateProjectModalProps) {
    super(props);

    //TODO add members
    this.state = {
      title: "",
      description: ""
    };
  }

  onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ title: e.target.value });
  };

  onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ description: e.target.value });
  };

  handleProjectSubmit = (e: any) => {
    const { title, description } = this.state;
    this.props.createProject(title, description);
    this.props.closeModal();
    e.preventDefault();
  };

  render() {
    return (
      <ModalBody>
        <CloseButton onClick={() => this.props.closeModal()} />
        <ModalTitle>Create project</ModalTitle>
        <Form onSubmit={(e) => this.handleProjectSubmit(e)}>
          <Input
            placeholder="New project"
            value={this.state.title}
            onChange={this.onTitleChange}
          >
            Title
          </Input>
          <Input
            placeholder="An awesome project..."
            value={this.state.description}
            onChange={this.onDescriptionChange}
          >
            Description
          </Input>
          <ModalActions>
            <PrimaryButton>Create</PrimaryButton>
          </ModalActions>
        </Form>
      </ModalBody>
    );
  }
}

const mapStateToProps = ({ auth }: StoreState): { auth: AuthData } => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { createProject }
)(CreateProjectModal);
