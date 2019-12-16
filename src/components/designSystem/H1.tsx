import styled from 'styled-components'
import base from './base'

const H1 = styled.h1`
    font-family: ${base.font.family.display};
    font-size: ${base.font.size.h1};
    color: ${base.colors.text};
    font-weight: 400;
    line-height: 1;
    margin-bottom: ${base.spacing.medium};
    padding-bottom: ${base.spacing.large};
    padding-top: ${base.spacing.medium};
`;

export default H1;