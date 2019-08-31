import React from "react"
import { PrivateRoute } from "./PrivateRoute";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import PostPage from "./PostPage";

const Router = () => {



  return (
    <div>
      <PrivateRoute exact path="/" component={HomePage} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/newpost" component={PostPage} />
    </div>
  );
};

export default Router;
