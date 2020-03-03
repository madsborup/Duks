import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { StoreState } from "../../../reducers";
import _, { includes } from "lodash";
import { statusLabels, FORM_TASK_STATUS } from "../../../utils/statusLabels";
import { getProject } from "../../../selectors/getProject";
import history from '../../../helpers/history'
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import {
  editTask,
  TaskData,
  TASK_STATUS,
  TASK_PRIORITY,
  ProjectData,
  MemberData,
  deleteTask
} from "../../../actions";
import {
  TwoColumnForm,
  FormFirstColumn,
  FormSecondColumn,
  FormActions,
  FormSecondColumnHeader,
  Switch,
  Select,
  SelectMultipleImage,
  TextArea
} from "../../designSystem/formElements";
import PopoverMenu from "../../PopoverMenu";
import { ThreeDotsVert } from '../../designSystem/icons/ThreeDotsVert'
import { Option } from "../../designSystem/formElements";
import { TextButton, PrimaryButton } from "../../designSystem/button";

interface Props {
  task: TaskData;
  projectSlug: string;
  currentProject: ProjectData;
  closeModal: Function;
  editTask: Function;
  deleteTask: Function;
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

    props.editTask(props.task.id, {
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

  const handleStatusOptions = (): Option[] => {
    const options = Object.values(FORM_TASK_STATUS).map(status => {
      return { label: statusLabels[status], value: status };
    });

    return options.reverse();
  };

  const handlePriorityOptions = (): Option[] => {
    const options = Object.values(TASK_PRIORITY).map(priority => {
      return { label: priority, value: priority };
    });

    return options.reverse();
  };

  const onTaskDelete = () => {
    props.deleteTask(props.task.id);

    props.closeModal();
  }

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
            <FormFirstColumn>
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
                label="Assigned"
                values={formik.values.assigned}
                options={handleAssignOptions()}
              />
            </FormFirstColumn>
            <FormSecondColumn>
              <FormSecondColumnHeader>
              <PopoverMenu
                      placement="bottom-start"
                      items={[
                        {
                          type: "option",
                          label: "Delete Task",
                          onClick: () => onTaskDelete(),
                          danger: true
                        }
                      ]}
                    >
                      <ThreeDotsVert />
                    </PopoverMenu>
              </FormSecondColumnHeader>
              <Switch name="isStuck" label="Stuck" />
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
            </FormSecondColumn>
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
  { editTask, deleteTask }
)(EditTaskModal);
