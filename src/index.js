import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize.css";
import Router from "./Router";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import createStore, { history } from "./store";
import { ConnectedRouter } from "react-router-redux";

// eslint-disable-next-line
navigator.appVersion.indexOf("Win") !== -1
  ? (document.querySelector("body").style.overflow = "hidden")
  : null;

ReactDOM.render(
  <Provider store={createStore}>
    {/* <ConnectedRouter history={history}> */}
    <Router />
    {/* </ConnectedRouter> */}
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
