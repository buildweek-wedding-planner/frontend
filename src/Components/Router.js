import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";

const Router = () => {
  return (
    <div>
      <Route exact path="/login" component={Login} />
    </div>
  );
};

export default Router;
