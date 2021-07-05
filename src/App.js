//TODO: STEP 1 - Import the useState hook.
import React from "react";
import "./App.css";
import Score from "./components/Score.js";
// import Score from "./score";
// import StatusForms from "src/components/StatusForms.js"

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  // const [homeName, setHomeName] = useState("Home");
  // const [awayName, setAwayName] = useState("Away");
  return (
    <div className="container">
      <Score />
    </div>
  );
}

export default App;
