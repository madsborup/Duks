import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import _, { includes } from 'lodash'
import {
  ProjectData,
  TASK_PRIORITY,
  createTask,
  FlowData
} from "../../../actions";
import { getProject } from "../../../selectors/getProject";
import { StoreState } from "../../../reducers";
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
  projectSlug: string;
  currentProject: ProjectData;
  flows: FlowData[];
  closeModal: Function;
  createTask: Function;
}

class CreateTaskModal extends Component<Props> {
  onTaskSubmit = (
    title: string,
    description: string,
    flowSlug: string,
    priority: TASK_PRIORITY,
    assigned: string[]
  ) => {
    this.props.createTask(
      title,
      description,
      this.props.projectSlug,
      flowSlug,
      priority,
      assigned
    );
    this.props.closeModal();
  };

  handleFlowOptions(): { label: string; value: string }[] {
    return this.props.flows.map((flow: FlowData) => {
      return { label: flow.title, value: flow.slug };
    });
  }

  handleAssignOptions(): { imgUrl: string; value: string }[] {
    return this.props.currentProject.members.map(member => {
      return { imgUrl: member.photoURL, value: member.uid };
    });
  };

   handlePriorityOptions(): { label: string; value: string }[] {
    const options = Object.values(TASK_PRIORITY).map(priority => {
      return { label: priority, value: priority };
    });

    return options.reverse()
  };

  render() {
    return (
      <ModalBody>
        <CloseButton onClick={() => this.props.closeModal()} />
        <ModalTitle>New task</ModalTitle>
        {console.log(this.props.flows[0].slug)}
        <Formik
          initialValues={{
            title: "",
            description: "",
            flowSlug: this.props.flows[0].slug,
            priority: TASK_PRIORITY.MEDIUM,
            assigned: [],
            status: null
          }}
          onSubmit={values => {
            this.onTaskSubmit(
              values.title,
              values.description,
              values.flowSlug,
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
                name="flowSlug"
                value={formik.values.flowSlug}
                options={this.handleFlowOptions()}
                onChange={formik.handleChange}
              />
              <Select
                label="Priority"
                name="priority"
                value={formik.values.priority}
                options={this.handlePriorityOptions()}
                onChange={formik.handleChange}
              />
              <SelectMultipleImage 
                name="assigned"
                label="Assign task"
                values={formik.values.assigned}
                options={this.handleAssignOptions()}
              />
              <ModalActions>
                <TextButton onClick={() => this.props.closeModal()}>
                  Close
                </TextButton>
                <PrimaryButton type="submit">Create</PrimaryButton>
              </ModalActions>
            </StyledForm>
          )}
        </Formik>
      </ModalBody>
    );
  }
}

const mapStateToProps = ({projects, flows}: StoreState, ownProps: Props) => {
  return {
    currentProject: getProject(projects, ownProps),
    flows: Object.values(flows.items)
  };
};

export default connect(
  mapStateToProps,
  { createTask }
)(CreateTaskModal);
