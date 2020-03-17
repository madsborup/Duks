import React from "react";
import { StyledMessageView, Message } from "./style";

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
