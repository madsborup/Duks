import React from "react";
import { withRouter, RouteComponentProps } from 'react-router-dom'
import {
  StyledSidebarLinkSection,
  SectionHeader,
  SectionLink,
  SectionButton
} from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  title: string;
  items: {title: string, slug:string}[];
  buttonProps: {
    content: string;
    onButtonClick: Function;
  };
}

const SidebarLinkSection: React.FC<Props> = (props: Props) => {

  const renderSectionLinks = () => {
    return props.items.map(item => {

      return (
        <SectionLink
          activeClassName="selected"
          to={`/${props.match.params.projectSlug}/${item.slug}`}
          key={item.slug}
        >
          {item.title}
        </SectionLink>
      );
    });
  };

  return (
    <div>
      <StyledSidebarLinkSection>
        <SectionHeader>{props.title}</SectionHeader>
        {renderSectionLinks()}
        <SectionButton onClick={() => props.buttonProps.onButtonClick()}>{props.buttonProps.content}</SectionButton>
      </StyledSidebarLinkSection>
    </div>
  );
};

export default withRouter(SidebarLinkSection);
