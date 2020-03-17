import styled from 'styled-components'
import theme from './theme'

const H3 = styled.h3`
    font-family: ${theme.font.family.display};
    font-size: ${theme.font.size.regular};
    color: ${theme.colors.text};
    font-weight: 400;
`;

export default H3;