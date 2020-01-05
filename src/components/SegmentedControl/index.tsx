import React from 'react'
import { StyledSegmentedControl, Control } from './style'

interface Props {
  controls: {title: string, path:string}[];
}

const SegmentedControl: React.FC<Props> = (props: Props) => {

  const renderControls = () => {
    return props.controls.map(control => {
      return (
        <Control
          activeClassName="selected"
          to={`${control.path}`}
          key={control.path}
        >
          {control.title}
        </Control>
      );
    });
  };

  return (
    <StyledSegmentedControl>
      {renderControls()}
    </StyledSegmentedControl>
  )
}

export default SegmentedControl;