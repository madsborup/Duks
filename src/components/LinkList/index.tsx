import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { StyledLinkList, Link, LinkContent } from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  links: {
    content: { text: string; IconComponent?: React.ComponentType };
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
            {link.content.text}
          </LinkContent>
        </Link>
      );
    });
  };

  return <StyledLinkList>{renderLinks()}</StyledLinkList>;
};

export default withRouter(LinkList);
