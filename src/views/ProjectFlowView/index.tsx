import React, { Component } from "react";
import { StoreState } from "../../reducers";
import { connect } from "react-redux";
import { Container } from "./style";
import { FlowData, TaskData } from "../../actions";
import { RouteComponentProps } from "react-router-dom";
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn
} from "../../components/designSystem/layout";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

import { TaskCard } from "../../components/TaskCard";

interface Match {
  projectSlug: string;
  flowSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  flows: { [key: string]: FlowData };
  tasks: TaskData[];
  isFetching: boolean;
}

class FlowView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.flows);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.match.params.flowSlug !== this.props.match.params.flowSlug) {
    }
  }

  renderTasks() {
    const { flowSlug } = this.props.match.params;

    const flowTasks: (TaskData | undefined)[] = this.props.tasks.map(
      (task: TaskData) => {
        if (task.flowSlug === this.props.match.params.flowSlug) return task;
      }
    );

    if (flowTasks && flowTasks.length > 0) {
      return flowTasks.map((task: TaskData | undefined) => {
        if (task) {
          return (
            <React.Fragment>
              <TaskCard
                title={task.title}
                status={task.status}
                flowTitle={this.props.flows[flowSlug].title}
                assigned={task.assigned}
                date={task.date}
                key={task.id}
              />
            </React.Fragment>
          );
        }
      });
    } else {
      return "no tasks";
    }
  }

  render() {
    const { flowSlug, projectSlug } = this.props.match.params;

    if (this.props.tasks.length > 0) {
      return (
        <ViewGrid>
          <TwoColumnGrid>
            <FirstColumn>
              <Sidebar projectSlug={projectSlug} />
            </FirstColumn>
            <SecondColumn>
              <Header
                title={this.props.flows[flowSlug].title}
                projectSlug={projectSlug}
              />
              {this.renderTasks()}
            </SecondColumn>
          </TwoColumnGrid>
        </ViewGrid>
      );
    } else {
      return <div>This flow has no tasks attached. Please add a tasks.</div>;
    }
  }
}

const mapStateToProps = ({ flows, tasks }: StoreState) => {
  return {
    flows: flows.items,
    tasks: Object.values(tasks.items),
    isFetching: tasks.isFetching
  };
};

export default connect(
  mapStateToProps,
  null
)(FlowView);
