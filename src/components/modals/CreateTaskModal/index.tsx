import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import _, { includes } from "lodash";
import {
  ProjectData,
  FlowData,
  TASK_PRIORITY,
  createTask
} from "../../../actions";
import { StoreState } from "../../../reducers";
import { getProjectFromID } from "../../../selectors/getProject";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import {
  StyledForm,
  Input,
  Select,
  SelectMultipleImage,
  TextArea
} from "../../designSystem/formElements";
import { TextButton, PrimaryButton } from "../../designSystem/button";

interface Props {
  projectID: string;
  currentProject: ProjectData;
  flows: FlowData[];
  closeModal: Function;
  createTask: Function;
}

const CreateTaskModal: React.FC<Props> = (props: Props) => {
  const onTaskSubmit = (
    title: string,
    description: string,
    flowID: string,
    priority: TASK_PRIORITY,
    assigned: string[]
  ) => {
    props.createTask(
      title,
      description,
      props.projectID,
      flowID,
      priority,
      assigned
    );
    props.closeModal();
  };

  const handleFlowOptions = (): { label: string; value: string }[] => {
    return props.flows.map((flow: FlowData) => {
      return { label: flow.title, value: flow.id };
    });
  };

  const handleAssignOptions = (): { imgUrl: string; value: string }[] => {
    return props.currentProject.members.map(member => {
      return { imgUrl: member.photoURL, value: member.uid };
    });
  };

  const handlePriorityOptions = (): { label: string; value: string }[] => {
    const options = Object.values(TASK_PRIORITY).map(priority => {
      return { label: priority, value: priority };
    });

    return options.reverse();
  };

  return (
    <ModalBody>
      <CloseButton onClick={() => props.closeModal()} />
      <ModalTitle>New task</ModalTitle>
      <Formik
        initialValues={{
          title: "",
          description: "",
          flowID: props.flows[0].id,
          priority: TASK_PRIORITY.MEDIUM,
          assigned: [],
          status: null
        }}
        onSubmit={values => {
          onTaskSubmit(
            values.title,
            values.description,
            values.flowID,
            values.priority,
            values.assigned
          );
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
              required
            />
            <TextArea
              name="description"
              label="Description"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <Select
              label="Flow"
              name="flowID"
              value={formik.values.flowID}
              options={handleFlowOptions()}
              onChange={formik.handleChange}
            />
            <Select
              label="Priority"
              name="priority"
              value={formik.values.priority}
              options={handlePriorityOptions()}
              onChange={formik.handleChange}
            />
            <SelectMultipleImage
              name="assigned"
              label="Assign task"
              values={formik.values.assigned}
              options={handleAssignOptions()}
            />
            <ModalActions>
              <TextButton onClick={() => props.closeModal()}>Close</TextButton>
              <PrimaryButton type="submit">Create</PrimaryButton>
            </ModalActions>
          </StyledForm>
        )}
      </Formik>
    </ModalBody>
  );
};

const mapStateToProps = ({ projects, flows }: StoreState, ownProps: Props) => {
  return {
    currentProject: getProjectFromID(projects, ownProps),
    flows: Object.values(flows.items)
  };
};

export default connect(
  mapStateToProps,
  { createTask }
)(CreateTaskModal);
