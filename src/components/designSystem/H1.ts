import styled from 'styled-components'
import base from './base'

const H1 = styled.h1`
    font-size: ${base.font.size.h1};
    color: ${base.colors.heading};
    font-weight: 800;
    letter-spacing: ${base.font.letterSpacing.heading};
    line-height: 1;
    margin: 0;
    padding: 0;
`;

export default H1;