import React, { useState } from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Homepage from "./HomePage";
import Onboarding from "./Onboarding";

const Router = () => {

  const [user, setUser] = useState([])

  const userInfo = info =>{
    setUser([...user, info])
  }

  return (
    <div>
      <Route exact path="/Onboarding" render={rProps=> <Onboarding {...rProps} userInfo={userInfo}/>}/>
      <Route exact path="/" render={rProps=><Homepage {...rProps} user={user} />}/>
      <Route exact path="/Dashboard" render={rProps=> <Dashboard {...rProps} user={user} />}/>
    </div>
  );
};

export default Router;
