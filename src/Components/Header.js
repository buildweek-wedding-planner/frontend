import React from "react";
import { withRouter } from "react-router-dom";
import Navigation from "./Navigation";

const Header = ({ history }) => {
  return (
    <header class="pageHeader">
      <Navigation />
    </header>
  );
};

export default withRouter(Header);
