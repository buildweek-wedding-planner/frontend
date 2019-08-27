import React from "react";
import { withRouter } from "react-router-dom";
import Onboarding from "./Onboarding";
import Login from "./Login";
import Navigation from "./Navigation";

const Header = ({ history }) => {
  return (
    <div>
      <Onboarding />
      <Login history={history} />
      <Navigation />

    </div>
  );
};

export default withRouter(Header);