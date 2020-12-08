import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Main } from "./views/main/main";
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import persistState from "redux-localstorage";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import plantReducer from "./reducers/plantsReducers";

const rootReducer = combineReducers({
  plantReducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), persistState())
);

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
