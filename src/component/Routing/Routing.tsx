import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from "../pages/Contact/Contact";
import Main from "../pages/Main/Main";
import Error from "../pages/Error/Error";

import ErrorHandler from "./ErrorHandler";

function Routing() {
  return (
    <BrowserRouter>
      <ErrorHandler>
        <Switch>
          <Route path="/error" component={Error} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Main} />
        </Switch>
      </ErrorHandler>
    </BrowserRouter>
  );
}

export default Routing;
