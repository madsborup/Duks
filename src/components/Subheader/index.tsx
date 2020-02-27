import React from 'react'
import { StyledSubheader } from './style'

const Subheader: React.FC = (props) => {
  return (
    <StyledSubheader>
      {props.children}
    </StyledSubheader>
  )
}

export default Subheader;
