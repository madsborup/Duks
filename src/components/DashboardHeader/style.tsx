import styled from 'styled-components'
import base from '../designSystem/base'

interface ContainerProps {
    primary?: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: absolute;
    height: 68px;
    width: calc((100% - 320px) - (2 * ${base.spacing.medium}));
    top: ${base.spacing.large};
    margin-left: ${base.spacing.medium};
    margin-right: ${base.spacing.medium};
    left: 320px;
    display: flex;
    justify-content: space-between;
`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;