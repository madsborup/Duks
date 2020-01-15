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
  RightArrowIcon,
  CollectionAddButton,
  CollectionAddIcon
} from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  title?: string;
  collection: {
    label?: string;
    slug?: string;
    photoURL?: string;
    firstIcon?: React.ReactNode;
    secondIcon?: React.ReactNode;
  }[];
  buttonProps: {
    content: string;
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
        >
          <ListItem>
            {item.firstIcon ? item.firstIcon : null}
            {item.label}
          </ListItem>
          <IconContainer>
            {item.secondIcon ? item.secondIcon : null}
          </IconContainer>
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
        <ListHeader>{props.title}</ListHeader>
        {renderListItems()}
        <CollectionAddButton onClick={() => props.buttonProps.onButtonClick()}>
          <CollectionAddIcon />
          {props.buttonProps.content}
        </CollectionAddButton>
      </StyledCollectionList>
    </React.Fragment>
  );
};

export default withRouter(CollectionList);
