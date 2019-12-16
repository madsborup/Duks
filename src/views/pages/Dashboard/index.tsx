import React, { Component } from "react"
import { Route } from "react-router-dom"
import { connect } from "react-redux";
import { StoreState } from "../../../reducers"
import { AuthData, fetchProjects } from "../../../actions"


// Components
import DashboardNavbar from "../../../components/DashboardNavbar"
import DashboardSidebar from "../../../components/DashboardSidebar"
import DashboardHeader from "../../../components/DashboardHeader"

// Views
import DashboardColumn from "../../DashboardColumn"
import DashboardPeople from "../../DashboardPeople"

interface DashboardProps {
    fetchProjects: Function
    auth: AuthData
}

class Dashboard extends React.Component<DashboardProps> {

    /* when user gets redirected here after logged in check, redirect to most recent project
    if (user) {
        history.push(/{user.projects[0]}/columns)
    } else if (!user){
        history.push(/login)
    }
    */

    componentDidMount() {
        if (this.props.auth.user.uid) {
            this.props.fetchProjects(this.props.auth.user.uid);
        }
    }

    render () {
        return (
            <div>
                <DashboardNavbar />
                <DashboardSidebar />
                <DashboardHeader />
                <Route
                    path="/:projectId/columns"
                    exact
                    component={DashboardColumn}
                />
                <Route path="/:projectId/people" exact component={DashboardPeople} />
                <button onClick = {() => this.props.auth.user.uid}>Fetch</button>
            </div>
        );
    }
}

const mapStateToProps = ({
    auth
}: StoreState): { auth: AuthData } => {
    return { auth };
};

export default connect(
    mapStateToProps,
    { fetchProjects }
)(Dashboard);