import React from 'react'
import history from '../../helpers/history'
import { Redirect } from 'react-router-dom'

interface Props {
  path: string;
}

//TODO: implement logic that gets current user most recent location and redirect the user
//to that path
const AppViewRedirect = (props: Props) => {
  const { path } = props;

  return (
    <Redirect to={`/`} />
  )
}

export default AppViewRedirect