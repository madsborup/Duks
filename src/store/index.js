import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "../reducers";

//Creating store 
//Enabling Redux DevTools
export const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(reduxThunk))
);