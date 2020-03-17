import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import _ from "lodash";
import { ProjectData, FlowData, showModal } from "../../actions";
import { StoreState } from "../../reducers";
import { getProjectFromSlug } from "../../selectors/getProject";
import ProjectCard from "../ProjectCard";
import LinkList from "../LinkList";
import CollectionList from "../CollectionList";
import LoadingView from '../../views/viewHelpers/LoadingView'
import { StyledSidebar, SidebarSection, FlowIcon } from "./style";

interface Match {
  projectSlug: string
}

interface Props extends RouteComponentProps<Match> {
  currentProject: ProjectData;
  isFetching: boolean;
  flows: { [key: string]: FlowData };
  showModal: Function;
}

const Sidebar: React.FC<Props> = (props: Props) => {
  const { currentProject } = props;
  const { projectSlug } = props.match.params;

  const showCreateFlowModal = () => {
    props.showModal({
      modalProps: {
        open: true,
        projectID: currentProject.id
      },
      modalType: "CREATE_FLOW_MODAL"
    });
  };

  const showInviteModal = () => {
    props.showModal({
      modalProps: {
        open: true,
        projectSlug
      },
      modalType: "INVITE_MODAL"
    });
  };

  if (projectSlug && currentProject) {
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
          collection={Object.values(props.flows).map(flow => {
            return {
              label: flow.title,
              slug: flow.slug,
              firstIcon: <FlowIcon flowcolor={flow.color} />
            };
          })}
          buttonProps={{
            content: "Create Flow",
            onButtonClick: showCreateFlowModal,
            showIcon: true
          }}
        />
      </SidebarSection>
      <SidebarSection>
        <CollectionList
          heading="Members"
          collection={currentProject.members.map(member => {
            return { label: member.displayName, photoURL: member.photoURL };
          })}
          buttonProps={{
            content: "Invite",
            onButtonClick: showInviteModal
          }}
        />
      </SidebarSection>
    </StyledSidebar>
  );
  }

  return <LoadingView />
};

const mapStateToProps = ({ projects, flows }: StoreState, ownProps: Props) => {
  return {
    currentProject: getProjectFromSlug(projects, ownProps.match.params),
    isFetching: projects.isFetching,
    flows: flows.items
  };
};

export default compose<React.ComponentType>(
  withRouter,
  connect(
  mapStateToProps,
  { showModal }
))(Sidebar);
