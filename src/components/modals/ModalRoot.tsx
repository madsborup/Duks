import React, { Component, ReactNode, ComponentClass } from "react";
import { connect } from "react-redux";
import { ModalData, hideModal } from "../../actions";
import { StoreState } from "../../reducers";
import ReactModal from "react-modal";
import CreateProjectModal from "./CreateProjectModal";
import CreateTaskModal from "./CreateTaskModal";
import { modalStyles } from "./styles";

interface State {
    modalIsOpen: boolean;
}

interface Props {
    hideModal: Function;
    modal: ModalData;
}

const MODAL_COMPONENTS = {
    CREATE_TASK_MODAL: CreateTaskModal,
    CREATE_PROJECT_MODAL: CreateProjectModal
};

export type ModalTypes = keyof typeof MODAL_COMPONENTS;

class ModalRoot extends Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            modalIsOpen: true
        };

        this.closeModal = this.closeModal.bind(this);
    }

    closeModal = () => {
        this.props.hideModal();
    };

    render() {
        if (!this.props.modal.modalType) {
            return null;
        }

        const ModalComponent = MODAL_COMPONENTS[this.props.modal.modalType];

        return (
            <ReactModal
                isOpen={this.state.modalIsOpen}
                onRequestClose={this.closeModal}
                ariaHideApp={false}
                style={modalStyles}
            >
                <ModalComponent
                    closeModal={this.closeModal}
                    {...this.props.modal.modalProps}
                />
            </ReactModal>
        );
    }
}

const mapStateToProps = ({ modal }: StoreState): { modal: ModalData } => {
    return { modal };
};

export default connect(
    mapStateToProps,
    { hideModal }
)(ModalRoot);
