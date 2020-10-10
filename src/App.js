import React, { useReducer } from "react";
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
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import DataFetchingOne from "./components/DataFetchingOne";

export const CountContext = React.createContext();
// export const ChannelContext=React.createContext()

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
    <div className="App">
      {/* Count-{count}
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
      {/* <ComponentA />
      <ComponentB />
      <ComponentC /> */}
      <DataFetchingOne />
    </div>
    //</CountContext.Provider>
  );
}

export default App;
