import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { createFlow } from "../../../actions";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import {
  StyledForm,
  Input
} from "../../designSystem/formElements";
import { PrimaryButton } from "../../designSystem/button";

interface CreateFlowModalProps {
  projectSlug?: string;
  closeModal: Function;
  createFlow: Function;
}

class CreateFlowModal extends Component<CreateFlowModalProps> {

  handleProjectSubmit = (title: string) => {
    this.props.createFlow(title, this.props.projectSlug);
    this.props.closeModal();
  };

  render() {
    return (
      <ModalBody>
        <CloseButton onClick={() => this.props.closeModal()} />
        <ModalTitle>Create a flow</ModalTitle>
        <Formik
          initialValues={{ title: ""}}
          onSubmit={values => {
            this.handleProjectSubmit(values.title);
          }}
        >
          {formik => (
            <StyledForm onSubmit={formik.handleSubmit}>
              <Input
                label="Title"
                name="title"
                placeholder="New project"
                value={formik.values.title}
                onChange={formik.handleChange}
              />
              <ModalActions>
                <PrimaryButton type="submit">Create</PrimaryButton>
              </ModalActions>
            </StyledForm>
          )}
        </Formik>
      </ModalBody>

      // <ModalBody>
      //   <CloseButton onClick={() => this.props.closeModal()} />
      //   <ModalTitle>Create flow</ModalTitle>
      //   <Form onSubmit={e => this.handleProjectSubmit(e)}>
      //     <Input
      //       placeholder="New flow"
      //       value={this.state.title}
      //       onChange={this.onTitleChange}
      //     >
      //       Title
      //     </Input>
      //     <ModalActions>
      //       <PrimaryButton>Create</PrimaryButton>
      //     </ModalActions>
      //   </Form>
      // </ModalBody>
    );
  }
}

export default connect(
  null,
  { createFlow }
)(CreateFlowModal);
