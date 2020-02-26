import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { StoreState } from "../../../reducers";
import _, { includes } from "lodash";
import { statusLabels, FORM_TASK_STATUS } from "../../../utils/statusLabels";
import { getProject } from "../../../selectors/getProject";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import {
  editTask,
  TaskData,
  TASK_STATUS,
  TASK_PRIORITY,
  ProjectData,
  MemberData
} from "../../../actions";
import {
  TwoColumnForm,
  FirstColumn,
  SecondColumn,
  FormActions,
  Switch,
  Select,
  SelectMultipleImage,
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
  priority: TASK_PRIORITY;
  status: TASK_STATUS;
  isStuck: boolean;
}

const EditTaskModal: React.FC<Props> = (props: Props) => {
  const {
    id,
    title,
    description,
    assigned,
    priority,
    status,
    isStuck,
    createdAt
  } = props.task;

  const initialValues: FormValues = {
    title,
    description,
    assigned: assigned.map(assignee => {
      return assignee.id;
    }),
    priority,
    status,
    isStuck
  };

  const onEditSubmit = (
    title: string,
    description: string,
    assigned: string[],
    priority: TASK_PRIORITY,
    status: TASK_STATUS,
    isStuck: boolean
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
      priority,
      status,
      isStuck
    });
  };

  const handleAssignOptions = (): { imgUrl: string; value: string }[] => {
    const options = props.currentProject.members.map(member => {
      return { imgUrl: member.photoURL, value: member.id };
    });

    return options;
  };

  const handleStatusOptions = (): { label: string; value: string }[] => {
    return Object.values(FORM_TASK_STATUS).map(status => {
      return { label: statusLabels[status], value: status };
    });
  };

  const handlePriorityOptions = (): { label: string; value: string }[] => {
    return Object.values(TASK_PRIORITY).map(priority => {
      return { label: priority, value: priority };
    });
  };

  return (
    <ModalBody big>
      <CloseButton onClick={() => props.closeModal()} />
      <Formik
        initialValues={initialValues}
        onSubmit={({
          title,
          description,
          assigned,
          priority,
          status,
          isStuck
        }) => {
          onEditSubmit(title, description, assigned, priority, status, isStuck);
          props.closeModal();
        }}
      >
        {formik => (
          <TwoColumnForm onSubmit={formik.handleSubmit}>
            <FirstColumn>
              <TextArea
                type="text"
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
              <SelectMultipleImage
                name="assigned"
                label="Assigned to"
                values={formik.values.assigned}
                options={handleAssignOptions()}
              />
            </FirstColumn>
            <SecondColumn>
              <Switch name="isStuck" label="Stuck?" />
              <Select
                label="Priority"
                name="priority"
                value={formik.values.priority}
                options={handlePriorityOptions()}
                onChange={formik.handleChange}
              />
              {assigned && assigned.length > 0 && (
                <Select
                  name="status"
                  label="Status"
                  options={handleStatusOptions()}
                  onChange={formik.handleChange}
                  value={formik.values.status}
                />
              )}
              {/* <div>
                Created: {createdAt.toDate().getDate()}/
                {createdAt.toDate().getMonth() + 1}{" "}
              </div> */}
            </SecondColumn>
            <FormActions>
              <ModalActions>
                <TextButton onClick={() => props.closeModal()}>
                  Close
                </TextButton>
                <PrimaryButton type="submit">Save</PrimaryButton>
              </ModalActions>
            </FormActions>
          </TwoColumnForm>
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
