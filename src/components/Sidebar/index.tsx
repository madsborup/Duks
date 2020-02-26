import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
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
import { getProject } from "../../selectors/getProject";
import ProjectCard from "../ProjectCard";
import LinkList from "../LinkList";
import CollectionList from "../CollectionList";
import { ReactComponent as BoardsIcon } from "../../assets/svg/BoardsIcon.svg";
import { ReactComponent as UnassignedIcon } from "../../assets/svg/UnassignedIcon.svg";
import {
  StyledSidebar,
  SidebarSection,
  RightArrowIcon,
  FlowIcon,
  FlowAttributes,
  FlowDayCounter
} from "./style";

interface Props extends RouteComponentProps {
  currentProject: ProjectData;
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
    const { projectSlug, currentProject } = this.props;

    return (
      <StyledSidebar>
        <SidebarSection>
          <ProjectCard project={currentProject} />
        </SidebarSection>
        <SidebarSection>
          <LinkList
            heading={"Project"}
            links={[
              {
                content: { label: "Boards" },
                path: `/${projectSlug}/boards`
              },
              {
                content: {
                  label: "Unassigned Tasks"
                },
                path: `/${projectSlug}/unassigned`
              }
            ]}
          />
        </SidebarSection>
        <SidebarSection>
          <CollectionList
            heading="Flows"
            collection={Object.values(this.props.flows).map(flow => {
              return {
                label: flow.title,
                slug: flow.slug,
                firstIcon: <FlowIcon flowColor={flow.color} />
              };
            })}
            buttonProps={{
              content: "Create flow",
              onButtonClick: this.showCreateFlowModal
            }}
          />
        </SidebarSection>
        <SidebarSection>
          <CollectionList
            heading="Members"
            collection={currentProject.members.map(member => {
              return { label: member.name, photoURL: member.photoURL };
            })}
            buttonProps={{
              content: "Invite",
              onButtonClick: this.showCreateFlowModal
            }}
          />
        </SidebarSection>
      </StyledSidebar>
    );
  }
}

const mapStateToProps = (state: StoreState, ownProps: Props) => {
  return {
    currentProject: getProject(state, ownProps),
    isFetching: state.projects.isFetching,
    flows: state.flows.items
  };
};

export default compose<React.ComponentType<{ projectSlug: string }>>(
  withRouter,
  connect(
    mapStateToProps,
    { showModal, fetchFlows, fetchTasks }
  )
)(Sidebar);
