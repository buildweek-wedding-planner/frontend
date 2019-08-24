import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
};

export default Router;
