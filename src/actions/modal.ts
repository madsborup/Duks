import { ActionTypes } from "./types";
import { ModalTypes } from "../components/modals/ModalRoot";
import { TaskData } from './tasks'

//TODO: consider changing any type to a prop type to pass to ModalRoot instead
export interface ModalData {
    modalProps: any;
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
