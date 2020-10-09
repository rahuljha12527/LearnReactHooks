import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HooksCounterFour from "./components/HooksCounterFour";
import HooksCounterTwo from "./components/HooksCounterTwo";

function App() {
  return <div className="App">
    {/* <ClassCounter /> */}
    {/* <HookCounter /> */}
    {/* <HooksCounterTwo/> */}
    {/* <HookCounterThree /> */}
    {/* <HooksCounterFour/> */}
    <HookCounterOne/>
  </div>;
}

export default App;
