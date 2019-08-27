import React from "react";
import { withRouter } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import Login from "./Login";

const Header = ({ history }) => {
  return (
    <div>
      <SignUpModal />
      <Login history={history} />
    </div>
  );
};

export default withRouter(Header);
