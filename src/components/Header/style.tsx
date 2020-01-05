import styled from 'styled-components'
import base from '../designSystem/base'

interface ContainerProps {
    primary?: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: relative;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${base.colors.border};
    padding: ${base.spacing.small}px;
`;

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

export const DescriptionMeta = styled.span`
    font-size: ${base.font.size.regular};
    color: ${base.colors.border};

`;

export const ActionsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
`;