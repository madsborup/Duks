import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { AuthData } from "../../actions";
import {
    Container,
    ProfileDetails,
    ProfileName,
    ProfileImage,
    ProfileEmail,
    ArrowIcon
} from "./style";

interface ProfileProps {
    auth: AuthData;
}

class Profile extends Component<ProfileProps> {
    render() {
        return (
            <Container>
                <ProfileDetails>
                    <ProfileName>
                        {this.props.auth.user.displayName}
                    </ProfileName>
                    <ProfileEmail>{this.props.auth.user.email}</ProfileEmail>
                </ProfileDetails>
                <ProfileImage src={`${this.props.auth.user.photoURL}=s64-c`} />
                <ArrowIcon />
            </Container>
        );
    }
}

const mapStateToProps = ({
    auth
}: StoreState): { auth: AuthData } => {
    return { auth };
};

export default connect(mapStateToProps)(Profile);
