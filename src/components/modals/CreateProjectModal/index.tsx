import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { UserData } from "../../../actions";
// import { createProject } from "../../actions";

interface Props {
    currentUser: UserData;
    closeModal: Function;
}

class CreateProjectModal extends Component<Props> {

    render() {
        return (
            <div>
                Create Project Modal
                <button onClick={() => this.props.closeModal()}></button>
            </div>
        );
    }
}

const mapStateToProps = ({
    currentUser
}: StoreState): { currentUser: UserData } => {
    return { currentUser };
};

export default connect(mapStateToProps)(CreateProjectModal);
