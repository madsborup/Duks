import React from 'react'
import history from '../../helpers/history'
import { Redirect } from 'react-router-dom'
import { withProjectsSubscription} from '../../components/withProjectsSubscription'

//TODO: implement logic that gets current user most recent location and redirect the user
//to that path
const ProjectView: React.FC = () => {

  return (
    <Redirect to={`/`} />
  )
}

export default withProjectsSubscription(ProjectView);