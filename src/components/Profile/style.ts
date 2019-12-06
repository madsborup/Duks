import styled from 'styled-components'
import base from '../designSystem/base'

export const Container = styled.div`
    padding: ${base.spacing.xsmall};
    border-radius: ${base.BORDER_RADIUS}px;
    background: ${base.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ProfileImage = styled.img`
    border-radius: 25px;
    height: 50px;
    width: 50px;
`;

export const ProfileDetails = styled.div`
    padding-left: ${base.spacing.xsmall};
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ProfileName = styled.span`
    font-weight: bold;
    font-size: ${base.font.size.regular};
    margin-bottom: 1px;
    letter-spacing: -0.1px;
`;

export const ProfileEmail = styled.span`
    color: ${base.colors.meta};
    font-weight: 500;
    font-size: ${base.font.size.small};
`;