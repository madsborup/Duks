import React from "react";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { AuthData, signOut, showModal } from "../../actions";
import PopoverMenu from "../../components/PopoverMenu";
import { LabelCounter } from "../../components/PopoverMenu/style";
import { DropdownArrow } from "../../components/designSystem/icons/DropdownArrow";
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
  showModal: typeof showModal;
}

const Profile: React.FC<Props> = (props: Props) => {
  const { displayName, email, photoURL, invites } = props.auth.user;

  const showPendingInvitesModal = () => {
    props.showModal({
      modalProps: {
        open: true
      },
      modalType: "PENDING_INVITES_MODAL"
    });
  };

  return (
    <PopoverMenu
      placement="bottom-end"
      items={[
        {
          type: "option",
          label: (
            <div style={{ display: "flex" }}>
              Invites {invites.length > 0 && <LabelCounter>{invites.length}</LabelCounter>}
            </div>
          ),
          disabled: !invites || invites.length === 0,
          onClick: () =>
            invites && invites.length > 0 && showPendingInvitesModal()
        },
        {
          type: "divider"
        },
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
  { signOut, showModal }
)(Profile);
