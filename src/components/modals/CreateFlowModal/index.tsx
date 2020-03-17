import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { createFlow } from "../../../actions";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import { StyledForm, Input } from "../../designSystem/formElements";
import { PrimaryButton } from "../../designSystem/button";

interface Props {
  projectID: string;
  closeModal: Function;
  createFlow: Function;
}

const CreateFlowModal: React.FC<Props> = (props: Props) => {
  const handleProjectSubmit = (title: string) => {
    props.createFlow(title, props.projectID);
    props.closeModal();
  };

  return (
    <ModalBody>
      <CloseButton onClick={() => props.closeModal()} />
      <ModalTitle>New Flow</ModalTitle>
      <Formik
        initialValues={{ title: "" }}
        onSubmit={values => {
          handleProjectSubmit(values.title);
        }}
      >
        {formik => (
          <StyledForm onSubmit={formik.handleSubmit}>
            <Input
              label="Title"
              name="title"
              placeholder="A group of tasks..."
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
  );
};

export default connect(
  null,
  { createFlow }
)(CreateFlowModal);
