import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { StoreState } from "../../../reducers";
import _, { includes } from "lodash";
import { statusLabels } from "../../../utils/statusLabels";
import {
  editTask,
  TaskData,
  TASK_STATUS,
  ProjectData,
  MemberData
} from "../../../actions";
import { getProject } from "../../../selectors/getProject";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import {
  StyledForm,
  BigInput,
  Select,
  TextArea
} from "../../designSystem/formElements";
import { TextButton, PrimaryButton } from "../../designSystem/button";

interface Props {
  task: TaskData;
  projectSlug: string;
  currentProject: ProjectData;
  closeModal: Function;
  editTask: Function;
}

interface FormValues {
  title: string;
  description: string;
  assigned: string[];
  status: TASK_STATUS;
}

const EditTaskModal: React.FC<Props> = (props: Props) => {
  const { id, title, description, assigned, status } = props.task;
  const initialValues: FormValues = {
    title,
    description,
    assigned: assigned.map(assignee => {
      return assignee.id;
    }),
    status
  };

  const onEditSubmit = (
    title: string,
    description: string,
    assigned: string[],
    status: TASK_STATUS
  ) => {
    const assignedMembers: MemberData[] = props.currentProject.members.filter(
      member => {
        return _.includes(assigned, member.id);
      }
    );

    props.editTask(id, {
      title,
      description,
      assigned: assignedMembers,
      status
    });
  };

  const handleAssignOptions = (): { label: string; value: string }[] => {
    const noAssignment = { label: "No one right now", value: "" };
    const options = props.currentProject.members.map(member => {
      return { label: member.name, value: member.id };
    });

    options.push(noAssignment);
    return options;
  };

  const handleStatusOptions = (): { label: string; value: string }[] => {
    return Object.values(TASK_STATUS).map(status => {
      return { label: statusLabels[status], value: status };
    });
  };

  return (
    <ModalBody>
      <CloseButton onClick={() => props.closeModal()} />
      <Formik
        initialValues={initialValues}
        onSubmit={({ title, description, assigned, status }) => {
          onEditSubmit(title, description, assigned, status);
          props.closeModal();
        }}
      >
        {formik => (
          <StyledForm onSubmit={formik.handleSubmit}>
            <TextArea
              type="text"
              label="Task title"
              name="title"
              big
              value={formik.values.title}
              onChange={formik.handleChange}
            />
            <TextArea
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <Select
              name="assigned"
              label="Assigned to"
              options={handleAssignOptions()}
              onChange={formik.handleChange}
              value={formik.values.assigned}
            />
            <Select
              name="status"
              label="Status"
              options={handleStatusOptions()}
              onChange={formik.handleChange}
              value={formik.values.status}
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

const mapStateToProps = (state: StoreState, ownProps: Props) => {
  return {
    currentProject: getProject(state, ownProps)
  };
};

export default connect(
  mapStateToProps,
  { editTask }
)(EditTaskModal);
