import React from "react";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import ComponentC from "./components/ComponentC";
import DataFetching from "./components/DataFetching";
import HookCounter from "./components/HookCounter";
import HookCounterOne from "./components/HookCounterOne";
import HookCounterThree from "./components/HookCounterThree";
import HookMouse from "./components/HookMouse";
import HooksCounterFour from "./components/HooksCounterFour";
import HooksCounterTwo from "./components/HooksCounterTwo";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

function App() {
  return <div className="App">
    {/* <ClassCounter /> */}
    {/* <HookCounter /> */}
    {/* <HooksCounterTwo/> */}
    {/* <HookCounterThree /> */}
    {/* <HooksCounterFour/> */}
    {/* <HookCounterOne/> */}
    {/* <HookMouse/> */}
    {/* <MouseContainer /> */}

    {/* <IntervalHookCounter/> */}
    {/* <DataFetching /> */}
    {/* <UserContext.Provider value={'rahul_jha'}>
      <ChannelContext.Provider value={'Codeevolution'}>
      <ComponentC />
      </ChannelContext.Provider>
   
    </UserContext.Provider> */}

    <CounterTwo/>
    

  </div>;
}

export default App;
