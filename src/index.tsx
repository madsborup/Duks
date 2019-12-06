import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";
import { auth } from "./firebase";
import history from "./helpers/history";
import { signIn, signOut } from "./actions";
import { createUserDocument } from './firebase/utils/createUserDocument';

let hasRendered = false;

const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>,
            document.getElementById("root")
        );
        hasRendered = true;
    }
};

//TODO: refactor
//By assigning onAuthStateChanged to a variable and calling it later we unsubscribe from the listener
let unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {
        const { uid, displayName, photoURL, email } = user;
        store.dispatch(signIn({uid, displayName, photoURL, email}));
        createUserDocument(user);
        renderApp();
        if (history.location.pathname === "/login") {
            history.push("/");
            console.log('logged in')
        }
    } else {
        store.dispatch(signOut);
        renderApp();
        history.push("/login");
        console.log('logged out')
        unsubscribe();
    }
});

serviceWorker.unregister();
