import styled from 'styled-components'
import base from './base'

const H2 = styled.h2`
    font-family: ${base.font.family.display};
    font-size: ${base.font.size.h2};
    color: ${base.colors.text};
    font-weight: 400;
    margin-bottom: ${base.spacing.medium};
    padding-top: ${base.spacing.small};
`;

export default H2;