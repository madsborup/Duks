import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { UserData } from "../../interfaces/User";
import { ReactComponent as ArrowIcon } from "../../assets/svg/DropdownArrow.svg";
import {
    Container,
    ProfileDetails,
    ProfileName,
    ProfileImage,
    ProfileEmail
} from "./style";

interface ProfileProps {
    currentUser: UserData;
}

class Profile extends Component<ProfileProps> {
    render() {
        return (
            <Container>
                <ProfileImage src={this.props.currentUser.photoURL as string} />
                <ProfileDetails>
                    <ProfileName>
                        {this.props.currentUser.displayName}
                    </ProfileName>
                    <ProfileEmail>{this.props.currentUser.email}</ProfileEmail>
                </ProfileDetails>
                <ArrowIcon />
            </Container>
        );
    }
}

const mapStateToProps = ({
    currentUser
}: StoreState): { currentUser: UserData } => {
    return { currentUser };
};

export default connect(mapStateToProps)(Profile);
