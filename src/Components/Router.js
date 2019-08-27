import React from "react";
import { Route, Redirect } from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route
        exact
        path="/dashboard"
        render={props => {
          const token = localStorage.getItem("token");
          if (!token) {
            return <Redirect to="/" />;
          }
          return <Dashboard {...props} />;
        }}
      />
    </div>
  );
};

export default Router;
