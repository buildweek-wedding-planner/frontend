import React from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import HomePage from "./HomePage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import PostPage from "./PostPage";

const Router = () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/newpost" component={PostPage} />
    </div>
  );
};

export default Router;
