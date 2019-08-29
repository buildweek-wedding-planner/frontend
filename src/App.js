import React from "react";
import "./App.scss";

import Router from "./Components/Router";
import Header from "./Components/Header";


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
