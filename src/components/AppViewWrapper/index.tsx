import React from 'react'
import { StyledAppViewWrapper } from './style'
import { withProjectsSubscription } from "../withProjectsSubscription";
import LoadingView from '../../views/viewHelpers/LoadingView'
import Navbar from '../Navbar'

//TODO: add withProjects HOC
const AppViewWrapper: React.FC = (props) => {
  return (
    <StyledAppViewWrapper>
      <Navbar />
      {props.children}
    </StyledAppViewWrapper>
  )
}

export default withProjectsSubscription(AppViewWrapper);