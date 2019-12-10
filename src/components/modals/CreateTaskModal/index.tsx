import React from 'react'
import {  hideModal } from "../../../actions";

interface Props {
    closeModal: Function
}

const CreateTaskModal: React.FC<Props> = ({closeModal}) => {
    
    return (
        <div>
            <h2>Modal title</h2>
            <button onClick={() => closeModal()}>Close</button>
        </div>
    )
}

export default CreateTaskModal;