import React, { Component } from "react";
import { connect } from "react-redux";
import { editTask, TaskData } from "../../../actions";
import { Formik } from "formik";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import {
  StyledForm,
  StyledLabel,
  BigInput,
  StyledInput,
  Select,
  StyledTextArea
} from "../../designSystem/formElements";
import { TextButton, PrimaryButton } from "../../designSystem/button";

export interface Props {
  task: TaskData;
  closeModal: Function;
  editTask: (id: string, values: {}) => {};
}

const EditTaskModal: React.FC<Props> = (props: Props) => {
  const { title, description, assigned, flowSlug, id } = props.task;
  const initialValues = {
    title: title,
    description,
    assigned: assigned.map(assignee => {
      return { label: assignee.name, value: assignee.id };
    }),
    flowSlug
  };

  return (
    <ModalBody>
      <CloseButton onClick={() => props.closeModal()} />
      <Formik
        initialValues={initialValues}
        onSubmit={values => {
          props.editTask(id, values);
          props.closeModal();
        }}
      >
        {formProps => (
          <StyledForm onSubmit={formProps.handleSubmit}>
            <BigInput
              onChange={formProps.handleChange}
              type="text"
              name="title"
              placeholder="New project"
              value={formProps.initialValues.title}
            />
            <Select
              name="assigned"
              label="Assigned to"
              placeholder="New project"
              options={formProps.initialValues.assigned}
            />
            <ModalActions>
              <TextButton onClick={() => props.closeModal()}>Close</TextButton>
              <PrimaryButton type="submit">Save</PrimaryButton>
            </ModalActions>
          </StyledForm>
        )}
      </Formik>
    </ModalBody>
  );
};

export default connect(
  null,
  { editTask }
)(EditTaskModal);
