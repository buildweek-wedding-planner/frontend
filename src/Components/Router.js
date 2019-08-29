import React from "react";
import { Route, Redirect } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import HomePage from "./HomePage";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default Router;
