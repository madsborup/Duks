import { ActionTypes } from "./types";
import { ModalTypes } from "../components/modals/ModalRoot";
import { TaskData } from './tasks'

//Using any here - not good! Temporary until a good solution is found to pass prop type to ModalRoot
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
