import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import _, { includes } from "lodash";
import {
  ProjectData,
  MemberData,
  createTask,
  FlowData
} from "../../../actions";
import { getProject } from "../../../selectors/getProject";
import { StoreState } from "../../../reducers";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import { StyledForm, Input, Select } from "../../designSystem/formElements";
import { TextButton, PrimaryButton } from "../../designSystem/button";

interface Props {
  projectSlug: string;
  currentProject: ProjectData;
  flows: FlowData[];
  closeModal: Function;
  createTask: Function;
}

class CreateTaskModal extends Component<Props> {
  handleTaskSubmit = (title: string, flowSlug: string, assigned: string[]) => {
    const handleAssignedMembers: MemberData[] = this.props.currentProject.members.filter(
      member => {
        return _.includes(assigned, member.id);
      }
    );

    this.props.createTask(
      title,
      this.props.projectSlug,
      flowSlug,
      handleAssignedMembers
    );
    this.props.closeModal();
  };

  renderFlowOptions() {
    return this.props.flows.map((flow: FlowData) => {
      return { label: flow.title, value: flow.slug };
    });
  }

  renderAssignOptions(): {label: string; value: string}[] {
    const noAssignment = { label: "No one right now", value: "" };

    const options = this.props.currentProject.members.map(member => {
      return { label: member.name, value: member.id };
    });
    options.push(noAssignment);
    return options;
  }

  render() {
    return (
      <ModalBody>
        <CloseButton onClick={() => this.props.closeModal()} />
        <ModalTitle>New task</ModalTitle>
        <Formik
          initialValues={{ title: "", flowSlug: "", assigned: [], status: null }}
          onSubmit={values => {
            this.handleTaskSubmit(
              values.title,
              values.flowSlug,
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
              />
              <Select
                label="Flow"
                name="flowSlug"
                value={formik.values.flowSlug}
                options={this.renderFlowOptions()}
                onChange={formik.handleChange}
              />
              <Select
                label="Assign task to"
                name="assigned"
                value={formik.values.assigned}
                options={this.renderAssignOptions()}
                onChange={formik.handleChange}
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

const mapStateToProps = (state: StoreState, ownProps: Props) => {
  return {
    currentProject: getProject(state, ownProps),
    flows: Object.values(state.flows.items)
  };
};

export default connect(
  mapStateToProps,
  { createTask }
)(CreateTaskModal);
