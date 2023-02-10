import React from "react";
import "./App.css";
import * as Components from "./components";

function App() {
  return (
    <div className="App">
      <Components.Settingbar />
      <Components.Toolbar />
      <Components.Canvas />
    </div>
  );
}

export default App;
