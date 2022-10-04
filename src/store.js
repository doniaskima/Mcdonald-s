import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";
import thunk from "redux-thunk";

// create the initialState of the redux Store
const initialState = {};
// redux middleware
const middleware = [thunk];

//  create the redux store

const store = createStore(
    rootReducers,
    initialState,
    // dev tools extension to show the store reducers and actions
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;