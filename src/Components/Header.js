import React from "react";
import { withRouter } from "react-router-dom";
import Onboarding from "./Onboarding";
import Login from "./Login";

const Header = ({ history }) => {
  return (
    <div>
      <Onboarding />
      <Login history={history} />
    </div>
  );
};

export default withRouter(Header);
