import React from "react"
import { Route } from "react-router-dom"

// Components
import SideNav from "../../../components/SideNav/"
import DashboardSidebar from "../../../components/DashboardSidebar"
import DashboardHeader from "../../../components/DashboardHeader"

// Views
import DashboardColumn from "../../DashboardColumn"
import DashboardPeople from "../../DashboardPeople"

export const Main = () => {

    /* when user gets redirected here after logged in check, redirect to most recent project
    if (user) {
        history.push(/{user.projects[0]}/columns)
    } else if (!user){
        history.push(/login)
    }
    */

    return (
        <div>
            <SideNav />
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
