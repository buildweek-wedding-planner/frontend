import React from "react";
import "./App.scss";


import HomePage from "./Components/HomePage";
import Onboarding from "./Components/Onboarding";
import Router from "./Components/Router";


function App() {
  return (
    <div>

      <Onboarding />
      <HomePage />

      <Router />

    </div>
  );
}

export default App;
