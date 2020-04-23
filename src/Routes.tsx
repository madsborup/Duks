import React from "react";
import { Route, Switch } from "react-router-dom";
import ModalRoot from "./components/modals/ModalRoot";
import AppViewWrapper from "./components/AppViewWrapper";
import AppViewRedirect from "./views/viewHelpers/AppViewRedirect";
import Project from "./views/Project";
import Boards from "./views/Boards";
import UnassignedTasks from "./views/UnassignedTasks";
import Flow from "./views/Flow";
import ProjectSettings from "./views/ProjectSettings";
import { withProjectsSubscription } from "./components/withProjectsSubscription";

const Routes: React.FC = () => {
  return (
    <React.Fragment>
      <ModalRoot />
      <Route path="/" component={AppViewRedirect} />
      <Route path="/:projectSlug" component={Project} />
      <AppViewWrapper>
        <Switch>
          <Route path="/:projectSlug/boards" component={Boards} />
          <Route
            path="/:projectSlug/unassigned"
            exact
            component={UnassignedTasks}
          />
          <Route
            path="/:projectSlug/settings"
            exact
            component={ProjectSettings}
          />
          <Route path="/:projectSlug/:flowSlug" exact component={Flow} />
        </Switch>
      </AppViewWrapper>
    </React.Fragment>
  );
};

export default withProjectsSubscription(Routes);
