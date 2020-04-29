import React from 'react';
import {
  StyledBoardTaskColumn,
  ColumnHeader,
} from './style';

interface Props {
  headerContent: React.ReactNode;
  children: React.ReactNode;
}

const BoardTaskColumn: React.FC<Props> = ({
  headerContent,
  children,
}: Props) => {
  return (
    <StyledBoardTaskColumn>
      <ColumnHeader>{headerContent}</ColumnHeader>
      {children}
    </StyledBoardTaskColumn>
  );
};

export default BoardTaskColumn;
