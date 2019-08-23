import React from "react";
import "./App.scss";

import HomePage from "./Components/HomePage";
import Onboarding from "./Components/Onboarding";

function App() {
  return (
    <div>
      <Onboarding />
      <HomePage />
    </div>
  );
}

export default App;
