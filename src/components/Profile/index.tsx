import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { AuthData, signOut } from "../../actions";
import PopoverMenu from "../../components/PopoverMenu";
import { DropdownArrow } from '../../components/designSystem/icons/DropdownArrow'
import {
  Container,
  ProfileDetails,
  ProfileName,
  ProfileImage,
  ProfileEmail
} from "./style";

interface Props {
  auth: AuthData;
  signOut: () => void;
}

const Profile: React.FC<Props> = (props: Props) => {
  const { displayName, email, photoURL } = props.auth.user;

  return (
    <PopoverMenu
      placement="bottom-end"
      items={[
        {
          type: "option",
          label: "Log out",
          onClick: () => props.signOut()
        }
      ]}
    >
      <Container>
        <ProfileImage src={`${photoURL}=s64-c`} />
        <ProfileDetails>
          <ProfileName>{displayName}</ProfileName>
          <ProfileEmail>{email}</ProfileEmail>
        </ProfileDetails>
        <DropdownArrow />
      </Container>
    </PopoverMenu>
  );
};

const mapStateToProps = ({ auth }: StoreState): { auth: AuthData } => {
  return { auth };
};

export default connect(
  mapStateToProps,
  { signOut }
)(Profile);
