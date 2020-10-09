import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookMouse from "./components/HookMouse";
import HooksCounterFour from "./components/HooksCounterFour";
import HooksCounterTwo from "./components/HooksCounterTwo";
import MouseContainer from "./components/MouseContainer";

function App() {
  return <div className="App">
    {/* <ClassCounter /> */}
    {/* <HookCounter /> */}
    {/* <HooksCounterTwo/> */}
    {/* <HookCounterThree /> */}
    {/* <HooksCounterFour/> */}
    {/* <HookCounterOne/> */}
    {/* <HookMouse/> */}
    <MouseContainer />
  </div>;
}

export default App;
