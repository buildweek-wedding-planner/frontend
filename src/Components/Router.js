import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Router = () => {
  return (
    <div>
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default Router;
