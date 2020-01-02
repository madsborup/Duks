import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  ProjectData,
  FlowData,
  TaskData,
  showModal,
  fetchFlows,
  fetchTasks
} from "../../actions";
import { StoreState } from "../../reducers";
import {
  ProjectTitle,
  ProjectDescription,
  ViewLinkContainer,
  ViewLink,
  SidebarSection,
  SidebarSectionHeader,
  SidebarSectionRow,
  AddFlowButton,
  DropdownIcon
} from "./style";


interface SidebarProps {
  projects: { [key: string]: ProjectData };
  isFetching: boolean;
  flows: FlowData[];
  projectSlug: string;
  showModal: Function;
  fetchFlows: Function;
  fetchTasks: Function;
}

class Sidebar extends Component<SidebarProps> {
  constructor(props: SidebarProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFlows(this.props.projectSlug);
    this.props.fetchTasks(this.props.projectSlug);
  }

  componentDidUpdate(prevProps: SidebarProps) {
    if (
      prevProps.projectSlug !== this.props.projectSlug
    ) {
      this.props.fetchFlows(this.props.projectSlug);
      this.props.fetchTasks(this.props.projectSlug);
      console.log(this.props.projectSlug)
    }
  }

  renderFlowLinks() {
    return this.props.flows.map((flow: FlowData) => {
      return (
        <SidebarSectionRow
          activeClassName="selected"
          to={`/${this.props.projectSlug}/flow/${flow.slug}`}
          key={flow.slug}
        >
          {flow.title}
        </SidebarSectionRow>
      );
    });
  }

  showCreateFlowModal(projectSlug: string) {
    this.props.showModal({
      modalProps: {
        open: true,
        projectSlug
      },
      modalType: "CREATE_FLOW_MODAL"
    });
  }

  render() {
    const { projectSlug } = this.props;

    return (
      <React.Fragment>
        <SidebarSection>
          <ProjectTitle>
            {this.props.projects[projectSlug].title}
            <DropdownIcon />
          </ProjectTitle>
          <ProjectDescription>
            {this.props.projects[projectSlug].description}
          </ProjectDescription>
          <ViewLinkContainer>
            <ViewLink activeClassName="selected" to={`/${projectSlug}/board`}>
              Board
            </ViewLink>
            <ViewLink activeClassName="selected" to={`/${projectSlug}/people`}>
              People
            </ViewLink>
            <ViewLink activeClassName="selected" to={`/${projectSlug}/outcomes`}>
              Outcomes
            </ViewLink>
          </ViewLinkContainer>
        </SidebarSection>
        <SidebarSection>
          <SidebarSectionHeader>Flows</SidebarSectionHeader>
          {this.renderFlowLinks()}
          <AddFlowButton
            onClick={() => this.showCreateFlowModal(projectSlug)}
          >
            New flow
          </AddFlowButton>
        </SidebarSection>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ projects, flows }: StoreState) => {
  return {
    projects: projects.items,
    isFetching: projects.isFetching,
    flows: Object.values(flows.items),
  };
};

export default connect(
  mapStateToProps,
  { showModal, fetchFlows, fetchTasks }
)(Sidebar);
