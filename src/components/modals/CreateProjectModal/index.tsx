import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { AuthData } from "../../../actions";
import { ModalBody, ModalTitle, CloseButton, ModalActions } from "../styles";
import { Form } from './style'
import { Input } from '../../designSystem/formElements'
import { Button, PrimaryButton } from '../../designSystem/button'

interface Props {
    auth: AuthData;
    closeModal: Function;
}

class CreateProjectModal extends Component<Props> {
    render() {
        return (
            <ModalBody>
                <CloseButton onClick={() => this.props.closeModal()} />
                <ModalTitle>Create project</ModalTitle>
                <Form>
                    <Input placeholder="New project" autofocus>Title</Input>
                    <Input placeholder="Enter email">Invite project members</Input>
                    <ModalActions>
                        <PrimaryButton>Create</PrimaryButton>
                    </ModalActions>
                </Form>
            </ModalBody>
        );
    }
}

const mapStateToProps = ({
    auth
}: StoreState): { auth: AuthData } => {
    return { auth };
};

export default connect(mapStateToProps)(CreateProjectModal);
