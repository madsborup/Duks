import React from "react";
import ReactDOM from "react-dom";
import { Hidden } from "react-grid-system";
import { ModalOverlay, ModalContainer, ModalActions } from './style'
import H1 from '../designSystem/H1'

interface ModalProps {
    title: string;
    description?: string;
    //TODO: consider changing type
    content: React.ReactFragment;
    actions: React.ReactFragment;
    onDismiss: () => void;
}

export const Modal: React.FC<ModalProps> = props => {
    return ReactDOM.createPortal(
        <Hidden xs>
            <ModalOverlay onClick={props.onDismiss}>
                <ModalContainer onClick={e => e.stopPropagation()}>
                    <H1>{props.title}</H1>
                    <div className="modal-content">{props.content}</div>
                    <ModalActions>{props.actions}</ModalActions>
                </ModalContainer>
            </ModalOverlay>
        </Hidden>,
        document.querySelector("#react-modal-portal") as Element
    );
};
