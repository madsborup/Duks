import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { fetchProjects } from "../../actions";
import { UserData } from "../../interfaces/User";
import {
    Container,
    ProjectLinkContainer,
    AddProjectIcon,
    ProjectLink
} from "./style";
import { addDocToCollection } from "../../firebase/utils/addDocToCollection";
import { ProjectData } from "../../interfaces/Project";

interface SideNavProps {
    projects: ProjectData[];
    currentUser: UserData;
    fetchProjects: Function;
}

class SideNav extends Component<SideNavProps> {
    state = {
        user: this.props.currentUser
    };

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
                <ProjectLinkContainer>
                    {this.renderList()}
                </ProjectLinkContainer>
                <AddProjectIcon
                    onClick={() =>
                        addDocToCollection<ProjectData>("projects", {
                            id: "test",
                            title: "test",
                            members: [this.state.user.uid as string]
                        })
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
    { fetchProjects }
)(SideNav);
