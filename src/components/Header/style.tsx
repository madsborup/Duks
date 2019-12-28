import styled from 'styled-components'
import base from '../designSystem/base'

interface ContainerProps {
    primary?: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    height: 68px;
    margin-top: ${base.spacing.large};
    display: flex;
    justify-content: space-between;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const DescriptionMeta = styled.span`
    font-size: ${base.font.size.regular};
    color: ${base.colors.border};

`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;