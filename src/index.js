import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// ROUTES
import Routes from "routes";

// SUBCOMPONENT'S
import { Sidebar, ControllerFooter } from "components";

const renderComponents = () => {
  return (
    <Fragment>
      <Sidebar />
      <ControllerFooter />
    </Fragment>
  );
};

ReactDOM.render(
  <BrowserRouter>
    {renderComponents()}
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
