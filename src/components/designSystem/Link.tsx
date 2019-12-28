import styled from 'styled-components'
import { Link as RouterLink} from 'react-router-dom'
import base from './base'

export const Link = styled(RouterLink)`
    text-decoration: none;

    &:hover, &:focus {
        ${base.colors.highlight};
    }
`;