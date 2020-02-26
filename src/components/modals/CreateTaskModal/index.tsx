import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import _, { includes } from 'lodash'
import {
  ProjectData,
  MemberData,
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
    assigned: string[]
  ) => {
    //get member objects from project to save to task
    const assignedMembers: MemberData[] = this.props.currentProject.members.filter(
      member => {
        return _.includes(assigned, member.id);
      }
    );

    this.props.createTask(
      title,
      description,
      this.props.projectSlug,
      flowSlug,
      assignedMembers
    );
    this.props.closeModal();
  };

  handleAssignOptions(): { imgUrl: string; value: string }[] {
    return this.props.currentProject.members.map(member => {
      return { imgUrl: member.photoURL, value: member.id };
    });
  };

  renderFlowOptions() {
    return this.props.flows.map((flow: FlowData) => {
      return { label: flow.title, value: flow.slug };
    });
  }

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
            assigned: [],
            status: null
          }}
          onSubmit={values => {
            this.onTaskSubmit(
              values.title,
              values.description,
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
                options={this.renderFlowOptions()}
                onChange={formik.handleChange}
              />
              <SelectMultipleImage 
                name="assigned"
                label="Assign task to"
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
