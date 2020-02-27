import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { StoreState } from "../../../reducers";
import { AuthData, createProject } from "../../../actions";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import { Form } from "./style";
import { StyledForm, Input, Select } from "../../designSystem/formElements";
import { Button, PrimaryButton } from "../../designSystem/button";

interface Props {
  auth: AuthData;
  closeModal: Function;
  createProject: Function;
}

class CreateProjectModal extends Component<Props> {

  handleProjectSubmit = (title: string, description: string) => {
    this.props.createProject(title, description);
    this.props.closeModal();
  };

  render() {
    return (
      <ModalBody>
        <CloseButton onClick={() => this.props.closeModal()} />
        <ModalTitle>New project</ModalTitle>
        <Formik
          initialValues={{ title: "", description: "" }}
          onSubmit={values => {
            this.handleProjectSubmit(values.title, values.description);
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
              <Input
                label="Description"
                name="description"
                placeholder="An awesome project..."
                value={formik.values.description}
                onChange={formik.handleChange}
              />
              <ModalActions>
                <PrimaryButton type="submit">Create</PrimaryButton>
              </ModalActions>
            </StyledForm>
          )}
        </Formik>
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
