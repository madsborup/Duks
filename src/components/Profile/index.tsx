import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { AuthData } from "../../actions";
import { ReactComponent as ArrowIcon } from "../../assets/svg/ArrowDown.svg";
import {
    Container,
    ProfileDetails,
    ProfileName,
    ProfileImage,
    ProfileEmail
} from "./style";

interface ProfileProps {
    auth: AuthData;
}

class Profile extends Component<ProfileProps> {
    render() {
        return (
            <Container>
                <ProfileImage src={`${this.props.auth.user.photoURL}=s64-c`} />
                <ProfileDetails>
                    <ProfileName>
                        {this.props.auth.user.displayName}
                    </ProfileName>
                    <ProfileEmail>{this.props.auth.user.email}</ProfileEmail>
                </ProfileDetails>
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
