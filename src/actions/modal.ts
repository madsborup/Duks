import { ActionTypes } from "./types";
import { ModalTypes } from "../components/modals/ModalRoot";

//change this 
export interface ModalData {
    modalProps: {
        open: boolean;
        title?: string;
        description?: string;
        projectId?: string
        closeModal?: typeof hideModal;
    };
    modalType: ModalTypes | null;
}

export interface ShowModalAction {
    type: ActionTypes.SHOW_MODAL;
    payload: ModalData
}

export interface HideModalAction {
    type: ActionTypes.HIDE_MODAL;
}

export const showModal = ({ modalProps, modalType }: ModalData) => {
    console.log("show modal");
    return {
        type: ActionTypes.SHOW_MODAL,
        payload: {modalProps, modalType}
    };
};

export const hideModal = () => {
    return {
        type: ActionTypes.HIDE_MODAL
    };
};
