import React from 'react'
import history from '../../helpers/history'
import { Redirect, RouteComponentProps, withRouter } from 'react-router-dom'

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  
}

const Project: React.FC<Props> = (props: Props) => {

  return (
    <Redirect to={`/${props.match.params.projectSlug}/boards`} />
  )
}

export default withRouter(Project);