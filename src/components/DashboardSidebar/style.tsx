import styled from 'styled-components'
import base from '../designSystem/base'

export const Container = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 240px;
    height: 100%;
    top: 0;
    left: 80px;
    background-color: ${base.colors.white};
`;

export const ProjectTitle = styled.span`
    font-size: ${base.font.size.h2};
    font-weight: bold;
    padding-top: ${base.spacing.large};
    margin-left: ${base.spacing.medium};
`;

export const LinkContainer = styled.div`
    margin-left: ${base.spacing.medium};
    display: flex;
    flex-direction: column;
`;

export const TaskGroupContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: ${base.spacing.medium};
`;