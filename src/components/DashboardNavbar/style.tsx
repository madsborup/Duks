import styled from 'styled-components'
import base from '../designSystem/base'
import { ReactComponent as ProjectIconDefault } from '../../assets/svg/ProjectIconDefault.svg'
import { ReactComponent as AddIcon } from '../../assets/svg/AddIcon.svg'

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    height: 100%;
    width: 80px;
    background-color: ${base.colors.border};
`;

export const ProjectLinkContainer = styled.div`
    margin-top: ${base.spacing.large};
    display: flex;
    flex-direction: column;

    a {
        margin-bottom: ${base.spacing.small};
    }
`;

export const ProjectLink = styled(ProjectIconDefault)`

`;

export const AddProjectIcon = styled(AddIcon)`
    cursor: pointer;
    margin-bottom: ${base.spacing.large};

    circle {
        fill: ${base.colors.text};
    }
    rect {
        fill: ${base.colors.border};
    }
`;