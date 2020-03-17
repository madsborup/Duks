import React, { Component } from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import _, { includes } from "lodash";
import { inviteUserToProject, ProjectData, UserData } from "../../../actions";
import { searchForUser } from '../../../firebase/utils/searchForUser'
import { fetchUser } from '../../../firebase/utils/fetchUser'
import { getProjectFromSlug } from '../../../selectors/getProject'
import { StoreState } from '../../../reducers'
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import {
  StyledForm,
  Input
} from "../../designSystem/formElements";
import { PrimaryButton } from "../../designSystem/button";

interface Props {
  projectSlug: string;
  currentProject: ProjectData;
  closeModal: Function;
  inviteUserToProject: Function;
}

interface FormValues {
  inviteEmail: string;
}

const InviteModal: React.FC<Props> = (props: Props) => {
  const initialValues: FormValues = {
    inviteEmail: ''
  }

  const handleInviteSubmit = async (email: string) => {
    const user = await fetchUser(email)
    inviteUserToProject(user.uid, props.currentProject.id);

    props.closeModal();
  }

  const validateEmail = async (email: string) => {
    let error;
    if (!email) {
      error = 'Required';
    } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      if (await searchForUser(email)) error = '';
      else error = 'The email must belong to an existing user'
    }
    return error;
  }

    return (
      <ModalBody>
        <CloseButton onClick={() => props.closeModal()} />
        <ModalTitle>Invite</ModalTitle>
        <Formik
          initialValues={initialValues}
          onSubmit={({inviteEmail}) => {
            handleInviteSubmit(inviteEmail)
            console.log(inviteEmail)
          }}
        >
          {formik => (
            <StyledForm onSubmit={formik.handleSubmit}>
              <Input
                name="inviteEmail"
                label="Enter the email of the person you want to invite."
                placeholder="eg. name@emai.com"
                value={formik.values.inviteEmail}
                onChange={formik.handleChange}
                validate={validateEmail}
              />
              <ModalActions>
                <PrimaryButton type="submit">Send</PrimaryButton>
              </ModalActions>
            </StyledForm>
          )}
        </Formik>
      </ModalBody>
    );
}

const mapStateToProps = ({projects}: StoreState, ownProps: Props) => {
  return {
    currentProject: getProjectFromSlug(projects, ownProps)
  }
}

export default connect(
  mapStateToProps,
  { inviteUserToProject }
)(InviteModal);
