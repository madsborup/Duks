import React, { Component } from "react";
import { Container, ActionsContainer } from "./style";
import { connect } from "react-redux";
import { signOut } from "../../actions";
import Profile from "../Profile";

interface DashboardHeaderProps {
    signOut: Function
}

class DashboardHeader extends Component<DashboardHeaderProps> {
    render() {
        return (
            <Container>
                DashboardHeader
                <ActionsContainer>
                    <Profile />
                    <button onClick={() => this.props.signOut()}>Logout</button>
                </ActionsContainer>
            </Container>
        );
    }
}

export default connect(
    null,
    { signOut }
)(DashboardHeader);