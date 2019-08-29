import React, { useState } from "react";
import { withRouter, Route, Link } from "react-router-dom";
import Onboarding from "./Onboarding";
import Login from "./Login";
import Navigation from "./Navigation";

const Header = ({ history }) => {

    const [user, setUser] = useState([])

    const userInfo = info =>{
      setUser([...user, info])
    }
  return (
    <div>
      <Onboarding />
      <Login history={history} />
      <Navigation />

      <Route exact path="/Onboarding" render={rProps=> <Onboarding {...rProps} userInfo={userInfo}/>}/>
      <Route exact path="/Login" render={rProps=> <Login {...rProps} userInfo={userInfo}/>}/>

    </div>
  );
};

export default withRouter(Header);