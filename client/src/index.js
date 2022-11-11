// import React from "react";
// import ReactDOM from "react-dom";

// import App from "./components/App";

// ReactDOM.render(<App />, document.querySelector('#root'));

import 'materialize-css/dist/css/materialize.min.css'
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import './app.css';

import App from "./components/App";

const store = configureStore()

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
