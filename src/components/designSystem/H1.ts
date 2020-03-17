import styled from 'styled-components'
import theme from './theme'

const H1 = styled.h1`
    font-size: ${theme.font.size.h1};
    color: ${theme.colors.heading};
    font-weight: 800;
    letter-spacing: ${theme.font.letterSpacing.heading};
    line-height: 1;
    margin: 0;
    padding: 0;
`;

export default H1;