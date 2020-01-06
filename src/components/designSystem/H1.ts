import styled from 'styled-components'
import base from './base'

const H1 = styled.h1`
    font-family: ${base.font.family.display};
    font-size: ${base.font.size.h1};
    color: ${base.colors.text};
    font-weight: 700;
    line-height: 1;
    margin: 0;
    padding: 0;
`;

export default H1;