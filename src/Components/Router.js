import React, { useState } from "react";
import { Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import HomePage from "./HomePage";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Onboarding from "./Onboarding";
import PostPage from "./PostPage";

const Router = () => {

  const [user, setUser] = useState([])

  const userInfo = info =>{
    setUser([...user, info])
  }

  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" render={rProps=><HomePage {...rProps} user={user} />}/>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <PrivateRoute exact path="/newpost" component={PostPage} />
    </div>
  );
};

export default Router;
