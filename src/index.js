import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// ROUTES
import Routes from "routes";

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
