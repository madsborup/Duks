import React, { Component } from "react";
import { Container, ActionsContainer } from "./style";
import { signOut } from "../../firebase";
import Profile from "../Profile";

export default class DashboardHeader extends Component {
    render() {
        return (
            <Container>
                DashboardHeader
                <ActionsContainer>
                    <Profile />
                    <button onClick={signOut}>Logout</button>
                </ActionsContainer>
            </Container>
        );
    }
}
