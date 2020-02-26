import React from 'react'
import { StyledLoadingView } from './style'

interface Props {
  content: string;
}

const LoadingView: React.FC<Props> = (props: Props) => {
  return (
    <StyledLoadingView>
      {props.content}
    </StyledLoadingView>
  )
}

export default LoadingView;