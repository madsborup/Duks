import { ModalData, Action, ActionTypes } from '../actions'

const INITIAL_STATE: ModalData = {
    modalProps: {
        open: false
    },
    modalType: null
}

const modal = (state: ModalData = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case ActionTypes.SHOW_MODAL:
            return { ...action.payload }
        case ActionTypes.HIDE_MODAL:
            return INITIAL_STATE
        default:    
            return state;
    }
}

export default modal;