import React from 'react'
import { StyledSegmentedControl, Control } from './style'

interface Props {
  controls: {label: string, path:string}[];
}

const SegmentedControl: React.FC<Props> = (props: Props) => {

  const renderControls = () => {
    return props.controls.map(control => {
      return (
        <Control
          exact 
          activeClassName="selected"
          to={`${control.path}`}
          key={control.path}
        >
          {control.label}
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