import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, ProjectTitle, LinkContainer, TaskGroupContainer } from './style'

export default class DashboardSidebar extends Component {
    render() {
        return (
            <Container>
                <ProjectTitle>Project Title</ProjectTitle>
                <LinkContainer>
                    <Link to="/:projectid/columns">Columns</Link>
                    <Link to="/:projectid/people">People</Link>
                </LinkContainer>
                <TaskGroupContainer>
                    <h4>Task Groups</h4>
                    <Link to="/:projectid/:taskGroupId">Task group 1</Link>
                    <Link to="/:projectid/:taskGroupId">Task group 2</Link>
                </TaskGroupContainer>
            </Container>
        );
    }
}
