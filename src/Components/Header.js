import React from "react";
import { withRouter } from 'react-router-dom'
import Onboarding from "./Onboarding";
import Login from "./Login";

const Header = props => {

  return (
    <div>
      <Onboarding />
      <Login history={props.history} />
    </div>
  );
};

export default withRouter(Header);
