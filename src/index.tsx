import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import history from "./helpers/history";
import theme from "./components/designSystem/theme";
import { store } from "./store";
import { verifyAuthentication } from "./actions";
import { GlobalStyle } from "./globalStyles";
import Modal from "react-modal";
import RedirectHandler from "./components/RedirectHandler";

Modal.setAppElement("#root");
store.dispatch(verifyAuthentication());

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RedirectHandler />
      </ThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
