import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../reducers";
import { Container, Message } from "./style";
import { TaskData } from "../../actions";
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn
} from "../../components/designSystem/layout";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  flows: { [key: string]: TaskData };
}

class PeopleView extends Component<Props> {
  render() {
    const { projectSlug } = this.props.match.params;
    return (
      <ViewGrid>
        <TwoColumnGrid>
          <FirstColumn>
            <Sidebar projectSlug={projectSlug} />
          </FirstColumn>
          <SecondColumn>
            <Header title="Board" projectSlug={projectSlug} />
            <Message>ProjectPeople</Message>
          </SecondColumn>
        </TwoColumnGrid>
      </ViewGrid>
    );
  }
}

const mapStateToProps = ({ tasks }: StoreState) => {
  return {
    tasks: tasks.items
  };
};

export default connect(
  mapStateToProps,
  null
)(PeopleView);
