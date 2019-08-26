import React from "react";
import "./App.scss";

import HomePage from "./Components/HomePage";
// import Onboarding from "./Components/Onboarding";
import SignUpModal from "./Components/SignUpModal";

function App() {
  return (
    <div>
      <SignUpModal />
      {/* <Onboarding /> */}
      <HomePage />
    </div>
  );
}

export default App;
