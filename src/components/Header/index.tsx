import React, { Component } from "react";
import { connect } from "react-redux";
import { ProjectData, signOut } from "../../actions";
import { StoreState } from "../../reducers";
import Profile from "../Profile";
import {
  Container,
  DescriptionContainer,
  DescriptionMeta,
  ActionsContainer
} from "./style";
import H1 from "../designSystem/H1";
import history from '../../helpers/history'
import { RouteComponentProps } from "react-router-dom";

interface Match {
  projectSlug: string;
}

interface DashboardHeaderProps extends RouteComponentProps<Match>{
  signOut: Function;
}


class DashboardHeader extends Component<DashboardHeaderProps> {

  constructor (props: DashboardHeaderProps) {
    super (props);

  }
  

  render() {

    let title: string = ""

    if (history.location.pathname.includes("people")) {
      title = "People";
    } else if (history.location.pathname.includes("column")) {
      title = "Column"
    }

    return (
      <Container>
        <DescriptionContainer>
          <H1>{title}</H1>
          <DescriptionMeta>Members of this project and their tasks.</DescriptionMeta>
        </DescriptionContainer>
        <ActionsContainer>
          <Profile />
          <button onClick={() => this.props.signOut()}>Logout</button>
        </ActionsContainer>
      </Container>
    );
  }
}

export default connect(
  null,
  { signOut }
)(DashboardHeader);
