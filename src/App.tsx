import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./helpers/history";
import { createGlobalStyle } from "styled-components";
import base from './components/designSystem/base'
import ModalRoot from './components/modals/ModalRoot'
import { hideModal } from "./actions";
//Pages
import Login from "./views/pages/Login";
import Main from "./views/pages/Main";
import { connect } from "react-redux";

interface Props {
    hideModal: Function
}

const GlobalStyle = createGlobalStyle`
    html {
        font-family: ${base.font.family.display};
        background-color: ${base.colors.wash};
    }

    body {
        margin: ${base.spacing.small};
        color: ${base.colors.text};
    }
`;

class App extends React.Component<Props> {

    render() {
        return (
            <Router history={history}>
                <div>
                    <GlobalStyle />
                    <ModalRoot />
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <Route path="/" component={Main} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default connect(
    null,
    { hideModal }
)(App);

