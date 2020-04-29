import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ProjectData, FlowData, showModal } from "../../actions";
import { StoreState } from "../../reducers";
import { getProjectFromSlug } from "../../selectors/getProject";
import ProjectCard from "../../components/ProjectCard";
import LinkList from "../../components/LinkList";
import CollectionList from "../../components/CollectionList";
import LoadingView from '../viewHelpers/LoadingView'
import { StyledNavigation, Section, FlowIcon } from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  currentProject: ProjectData;
  isFetching: boolean;
  flows: { [key: string]: FlowData };
  showModal: typeof showModal;
}

const Navigation: React.FC<Props> = (props: Props) => {
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
    <StyledNavigation>
      <Section>
        <ProjectCard project={currentProject} />
      </Section>
      <Section>
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
      </Section>
      <Section>
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
      </Section>
      <Section>
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
      </Section>
    </StyledNavigation>
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
))(Navigation);
