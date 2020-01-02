import { ActionTypes } from "./types";
import { ModalTypes } from "../components/modals/ModalRoot";

//change this 
export interface ModalData {
    modalProps: {
        open: boolean;
        title?: string;
        projectSlug?: string | undefined;
        description?: string;
        closeModal?: typeof hideModal;
    };
    modalType: ModalTypes | null;
}

export interface ShowModalAction {
    type: ActionTypes.SHOW_MODAL;
    modal: ModalData
}

export interface HideModalAction {
    type: ActionTypes.HIDE_MODAL;
}

export const showModal = (modal: ModalData) => {
    return {
        type: ActionTypes.SHOW_MODAL,
        modal
    };
};

export const hideModal = () => {
    return {
        type: ActionTypes.HIDE_MODAL
    };
};
