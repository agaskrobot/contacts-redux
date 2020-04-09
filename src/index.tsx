import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "./styles/style.css";
import { App } from "./containers";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { rootReducer } from "./store/contact/index";

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
