import React from 'react'
import Helmet from 'react-helmet'

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

export default ({title, description, image}: Props) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
} 
