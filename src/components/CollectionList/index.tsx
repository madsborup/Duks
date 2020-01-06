import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  StyledCollectionList,
  ListHeader,
  ListLink,
  ListLinkContent,
  IconContainer,
  ListLinkIcon,
  CollectionAddButton
} from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  title?: string;
  collection: { title: string; slug?: string }[];
  buttonProps: {
    content: string;
    onButtonClick: Function;
  };
}

const CollectionList: React.FC<Props> = (props: Props) => {
  const renderListLinks = () => {
    return props.collection.map(item => {
      return (
        <ListLink
          activeClassName="selected"
          to={`/${props.match.params.projectSlug}/${item.slug}`}
          key={item.slug}
        >
          <ListLinkContent>{item.title}</ListLinkContent>
          <IconContainer>
            <ListLinkIcon />
          </IconContainer>
        </ListLink>
      );
    });
  };

  return (
    <div>
      <StyledCollectionList>
        <ListHeader>{props.title}</ListHeader>
        {renderListLinks()}
        <CollectionAddButton onClick={() => props.buttonProps.onButtonClick()}>
          {props.buttonProps.content}
        </CollectionAddButton>
      </StyledCollectionList>
    </div>
  );
};

export default withRouter(CollectionList);
