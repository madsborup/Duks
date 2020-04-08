import React from "react";
import styled from 'styled-components/macro'
import theme from '../../components/designSystem/theme'

export const StyledMessageView = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Message = styled.div`
  color: ${theme.colors.textMuted};
  font-size: ${theme.font.size.h3};
  font-weight: 500;
`;

interface Props {
  content: string;
}

const MessageView: React.FC<Props> = (props: Props) => {
  return (
    <StyledMessageView>
      <Message>{props.content}</Message>
    </StyledMessageView>
  );
};

export default MessageView;
