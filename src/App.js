import React from "react";
import "./App.scss";

import Header from "./Components/Header";
import Router from "./Components/Router";

function App() {
  return (
    <div>
      <Header />
      <Router />
    </div>
  );
}

export default App;

// removed HomePage - set in Router
// removed Onbouard - called by Header, will also inclide Login, logo, etc
