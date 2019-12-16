import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { AuthData, ProjectData, fetchProjects, showModal } from "../../actions";
import {
    Container,
    ProjectLinkContainer,
    AddProjectIcon,
    ProjectLink
} from "./style";

interface DashboardNavbarProps {
    projects: ProjectData[];
    auth: AuthData;
    fetchProjects: Function;
    showModal: Function;
}

class DashboardNavbar extends Component<DashboardNavbarProps> {

    renderList() {
        return this.props.projects.map((doc: ProjectData) => {
            return (
                <Link to={`/${doc.id}`} key={doc.id}>
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
    auth,
    projects
}: StoreState): { auth: AuthData; projects: ProjectData[] } => {
    return { auth, projects };
};

export default connect(
    mapStateToProps,
    { fetchProjects, showModal }
)(DashboardNavbar);
