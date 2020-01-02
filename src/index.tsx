import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";
import { verifyAuthentication } from './actions'
import Modal from 'react-modal'
import Routes from './Routes'

let hasRendered = false;
Modal.setAppElement('#root');
store.dispatch(verifyAuthentication());

ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
