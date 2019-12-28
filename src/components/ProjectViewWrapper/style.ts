import styled from 'styled-components'
import base from '../designSystem/base'

export const Container = styled.div`
    position: absolute;
    left: 320px;
    height: 100%;
    width: calc((100% - 320px) - (2 * ${base.spacing.medium}));
    display: flex;
    flex-direction: column;
    margin-left: ${base.spacing.medium};
    margin-right: ${base.spacing.medium};
`;