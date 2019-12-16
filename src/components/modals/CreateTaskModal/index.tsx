import React from 'react'
import { CloseButton } from "../styles";

interface Props {
    closeModal: Function
}

const CreateTaskModal: React.FC<Props> = ({closeModal}) => {
    
    return (
        <div>
            <CloseButton onClick={() => closeModal()} />
            <h2>Modal title</h2>
        </div>
    )
}

export default CreateTaskModal;