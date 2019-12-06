import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./helpers/history";
import { createGlobalStyle } from "styled-components";
import base from './components/designSystem/base'

//Pages
import Login from "./views/pages/Login";
import { Main } from "./views/pages/Main";

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

class App extends React.Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <GlobalStyle />
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <Route path="/" component={Main} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
