import React, { Component } from "react"
import { Route } from "react-router-dom"

// Components
import ProjectBar from "../../../components/ProjectBar"
import DashboardSidebar from "../../../components/DashboardSidebar"
import DashboardHeader from "../../../components/DashboardHeader"

// Views
import DashboardColumn from "../../DashboardColumn"
import DashboardPeople from "../../DashboardPeople"

class Main extends React.Component {

    /* when user gets redirected here after logged in check, redirect to most recent project
    if (user) {
        history.push(/{user.projects[0]}/columns)
    } else if (!user){
        history.push(/login)
    }
    */

    render () {
        return (
            <div>
                <ProjectBar />
                <DashboardSidebar />
                <DashboardHeader />
                <Route
                    path="/:projectId/columns"
                    exact
                    component={DashboardColumn}
                />
                <Route path="/:projectId/people" exact component={DashboardPeople} />
            </div>
        );
    }
}

export default Main;