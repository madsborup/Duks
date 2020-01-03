import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from 'redux'
import { withRouter, RouteComponentProps } from "react-router-dom";
import _ from "lodash";
import {
  ProjectData,
  FlowData,
  showModal,
  fetchFlows,
  fetchTasks
} from "../../actions";
import { StoreState } from "../../reducers";
import ProjectCard from "../ProjectCard";
import SidebarLinkSection from "../SidebarLinkSection";
import { SidebarSection, SidebarSectionHeader } from "./style";

interface Props extends RouteComponentProps {
  projects: { [key: string]: ProjectData };
  isFetching: boolean;
  flows: { [key: string]: FlowData };
  projectSlug: string;
  showModal: Function;
  fetchFlows: Function;
  fetchTasks: Function;
}

class Sidebar extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFlows(this.props.projectSlug);
    this.props.fetchTasks(this.props.projectSlug);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.projectSlug !== this.props.projectSlug) {
      this.props.fetchFlows(this.props.projectSlug);
      this.props.fetchTasks(this.props.projectSlug);
      console.log(this.props.projectSlug);
    }
  }

  showCreateFlowModal = () => {
    const projectSlug = this.props.projectSlug;

    this.props.showModal({
      modalProps: {
        open: true,
        projectSlug
      },
      modalType: "CREATE_FLOW_MODAL"
    });
  };

  render() {
    const { projectSlug } = this.props;
    const currentProject = this.props.projects[projectSlug];

    return (
      <React.Fragment>
        <SidebarSection>
          <ProjectCard project={currentProject} />
        </SidebarSection>
        <SidebarSection>
          <SidebarLinkSection
            title="Flows"
            items={Object.values(this.props.flows)}
            buttonProps={{
              content: "Add flow",
              onButtonClick: this.showCreateFlowModal
            }}
          />
        </SidebarSection>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ projects, flows }: StoreState) => {
  return {
    projects: projects.items,
    isFetching: projects.isFetching,
    flows: flows.items
  };
};

export default compose<React.ComponentType<{projectSlug: string}>>(
  connect(
    mapStateToProps,
    { showModal, fetchFlows, fetchTasks }
  ),
  withRouter
)(Sidebar);
