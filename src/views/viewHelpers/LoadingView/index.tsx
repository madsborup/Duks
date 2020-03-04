import React from "react";
import { Spinner } from "../../../components/designSystem/icons/Spinner";
import { StyledLoadingView, Content } from "./style";

interface Props {
  content?: string;
}

const LoadingView: React.FC<Props> = (props: Props) => {
  return (
    <StyledLoadingView>
      <Spinner />
      <Content>{props.content}</Content>
    </StyledLoadingView>
  );
};

export default LoadingView;
