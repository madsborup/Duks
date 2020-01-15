import styled from 'styled-components'
import base from '../../components/designSystem/base'

export const Container = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    background: ${base.colors.viewBackground};
`;

export const Message = styled.h1`
    font-size: ${base.font.size.h1};
    color: ${base.colors.border};
`;