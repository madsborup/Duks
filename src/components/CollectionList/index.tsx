import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  StyledCollectionList,
  ListHeader,
  ListItem,
  ListLink,
  ListItemImage,
  ListItemText,
  IconContainer,
  CollectionAddButton,
  CollectionAddIcon
} from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  heading?: string;
  collection: {
    label?: string;
    slug?: string;
    photoURL?: string;
    firstIcon?: React.ReactNode;
    secondIcon?: React.ReactNode;
    border?: boolean;
  }[];
  buttonProps: {
    content: string;
    showIcon?: boolean;
    onButtonClick: Function;
  };
}

const CollectionList: React.FC<Props> = (props: Props) => {
  const renderListItems = () => {
    return props.collection.map(item => {
      return item.slug ? (
        <ListLink
          activeClassName="selected"
          to={`/${props.match.params.projectSlug}/${item.slug}`}
          key={item.slug}
          border={item.border}
        >
          <ListItem border={item.border}>
            {item.firstIcon}
            {item.label}
          </ListItem>
          <IconContainer>{item.secondIcon}</IconContainer>
        </ListLink>
      ) : item.photoURL ? (
        <ListItem>
          <ListItemImage src={item.photoURL} />
          <ListItemText>{item.label}</ListItemText>
        </ListItem>
      ) : null;
    });
  };

  return (
    <React.Fragment>
      <StyledCollectionList>
        <ListHeader>
          {props.heading}
          <CollectionAddButton
            onClick={() => props.buttonProps.onButtonClick()}
          >
            {props.buttonProps.showIcon && <CollectionAddIcon />}
            {props.buttonProps.content}
          </CollectionAddButton>
        </ListHeader>
        {renderListItems()}
      </StyledCollectionList>
    </React.Fragment>
  );
};

export default withRouter(CollectionList);
