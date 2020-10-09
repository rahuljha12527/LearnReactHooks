import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounterThree from "./components/HookCounterThree";
import HooksCounterTwo from "./components/HooksCounterTwo";

function App() {
  return <div className="App">
    {/* <ClassCounter /> */}
    {/* <HookCounter /> */}
    {/* <HooksCounterTwo/> */}
    <HookCounterThree />
  </div>;
}

export default App;
