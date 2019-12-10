import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { UserData, ProjectData, fetchProjects, showModal } from "../../actions";
import {
    Container,
    ProjectLinkContainer,
    AddProjectIcon,
    ProjectLink
} from "./style";
import { addDocToCollection } from "../../firebase/utils/addDocToCollection";
import CreateProjectModal from "../modals/CreateProjectModal";
import ModalContainer from "../modals/ModalRoot";

interface Props {
    projects: ProjectData[];
    currentUser: UserData;
    fetchProjects: Function;
    showModal: Function;
}

class ProjectBar extends Component<Props> {
    componentDidMount() {
        this.props.fetchProjects(this.props.currentUser.uid);
    }

    renderList() {
        return this.props.projects.map((doc: ProjectData) => {
            console.log(doc);
            return (
                <Link to={`/${doc.id}`}>
                    <ProjectLink />
                </Link>
            );
        });
    }

    render() {
        return (
            <Container>
                <ProjectLinkContainer>{this.renderList()}</ProjectLinkContainer>
                <AddProjectIcon
                    onClick={() =>
                        // addDocToCollection<ProjectData>("projects", {
                        //     id: "test",
                        //     title: "test",
                        //     members: [this.props.currentUser.uid as string]
                        // })
                        this.props.showModal({
                            modalProps: { open: true },
                            modalType: "CREATE_PROJECT_MODAL"}
                        )
                    }
                />
            </Container>
        );
    }
}

const mapStateToProps = ({
    currentUser,
    projects
}: StoreState): { currentUser: UserData; projects: ProjectData[] } => {
    return { currentUser, projects };
};

export default connect(
    mapStateToProps,
    { fetchProjects, showModal }
)(ProjectBar);
