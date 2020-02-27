import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { StyledLinkList, ListHeader, Link, LinkContent } from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  heading?: string;
  links: {
    content: { label: string; IconComponent?: React.ComponentType };
    path: string;
  }[];
}

const LinkList: React.FC<Props> = (props: Props) => {
  const renderLinks = () => {
    return props.links.map(link => {
      return (
        <Link activeClassName="selected" to={`${link.path}`} key={link.path}>
          <LinkContent>
            {link.content.IconComponent ? <link.content.IconComponent /> : null}
            {link.content.label}
          </LinkContent>
        </Link>
      );
    });
  };

  return (<StyledLinkList>
    <ListHeader>{props.heading}</ListHeader>
    {renderLinks()}
    </StyledLinkList>
  );
};

export default withRouter(LinkList);
