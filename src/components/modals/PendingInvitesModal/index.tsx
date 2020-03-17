import React, { Component } from "react";
import { connect } from "react-redux";
import { firestore } from "../../../firebase";
import { UserData, ProjectData, addUserToProject } from "../../../actions";
import { StoreState } from "../../../reducers";
import { ModalBody, ModalTitle, CloseButton } from "../styles";
import { PrimaryButton, OutlineButton } from "../../designSystem/button";
import { ReactComponent as ProjectIconDefault } from "../../../assets/svg/ProjectIconDefault.svg";
import theme from "../../designSystem/theme";
import {
  Container,
  ProjectContainer,
  Project,
  ProjectTitle,
  ProjectActions
} from "./style";

interface State {
  projects: ProjectData[];
}

interface Props {
  currentUser: UserData;
  closeModal: Function;
}

class PendingInvitesModal extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects = async () => {
    let projectRefs = this.props.currentUser.invites.map(invite => {
      return firestore
        .collection("projects")
        .doc(invite)
        .get();
    });
    let docs = await Promise.all(projectRefs);
    let projectDocs = docs.map(
      doc => ({ ...doc.data(), ["id"]: doc.id } as ProjectData)
    );

    this.setState({ projects: projectDocs });
  };

  //TODO: consider moving to actions
  removeInviteFromUser = (projectId: string) => {
    const userInvites = this.props.currentUser.invites;
    const newInvites = userInvites.filter(invite => invite !== projectId);
    let userRef = firestore.collection("users").doc(this.props.currentUser.uid);

    userRef.update({ invites: newInvites });
  };

  onAcceptInvite = (projectId: string) => {
    const { displayName, uid, photoURL, email } = this.props.currentUser;
    addUserToProject({ displayName, uid, photoURL, email }, projectId);
    this.props.closeModal();
  };

  onDeclineInvite = (projectId: string) => {
    this.removeInviteFromUser(projectId);
    this.props.closeModal();
  };

  renderInvites = () => {
    return this.state.projects.map(project => {
      return (
        <ProjectContainer>
          <Project>
            <ProjectIconDefault />
            <ProjectTitle>{project.title}</ProjectTitle>
          </Project>
          <ProjectActions>
            <OutlineButton onClick={() => this.onDeclineInvite(project.id)}>
              Decline
            </OutlineButton>
            <PrimaryButton
              onClick={() => this.onAcceptInvite(project.id)}
              style={{ marginLeft: `${theme.spacing.xsmall}px` }}
            >
              Accept
            </PrimaryButton>
          </ProjectActions>
        </ProjectContainer>
      );
    });
  };

  render() {
    return (
      <ModalBody>
        <CloseButton onClick={() => this.props.closeModal()} />
        <ModalTitle>Invites</ModalTitle>
        <Container>
          Project
          {this.renderInvites()}
        </Container>
      </ModalBody>
    );
  }
}

const mapStateToProps = ({ auth }: StoreState) => {
  return {
    currentUser: auth.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(PendingInvitesModal);
