import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";

const Header = ({ history }) => {
  return (
    <div className="pageHeader">
      <Navigation />
    </div>
  );
};

export default withRouter(Header);
