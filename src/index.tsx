import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import history from "./helpers/history";
import { store } from "./store";
import { verifyAuthentication } from "./actions";
import Modal from "react-modal";
import RedirectHandler from "./components/RedirectHandler";

Modal.setAppElement("#root");
store.dispatch(verifyAuthentication());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <RedirectHandler />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
