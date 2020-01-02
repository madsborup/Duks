import React from 'react'
import { StyledAppViewWrapper } from './style'
import { withProjectsSubscription } from "../withProjectsSubscription";

//TODO: add withProjects HOC
const AppViewWrapper: React.FC = (props) => {
  return (
    <StyledAppViewWrapper>
      {props.children}
    </StyledAppViewWrapper>
  )
}

export default withProjectsSubscription(AppViewWrapper);