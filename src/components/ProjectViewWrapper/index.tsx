import React from 'react'
import { Container } from './style'

const ProjectViewWrapper: React.FC = (props) => {

    return (
        <Container>
            {props.children}
        </Container>
    )
}

export default ProjectViewWrapper;