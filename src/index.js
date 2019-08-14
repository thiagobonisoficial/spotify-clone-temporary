import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

// REACTOTRON AND REDUX
import "config/Reactotron";
import store from "store";

// ROUTES AND REDUX'S
import Routes from "routes";

console.tron.log("tst");

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
