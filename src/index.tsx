import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";
import { verifyAuthentication } from './actions'
import Modal from 'react-modal'
import App from './App'

let hasRendered = false;
Modal.setAppElement('#root');
store.dispatch(verifyAuthentication());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
