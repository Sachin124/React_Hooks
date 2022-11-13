import React, { useContext, useReducer, useState } from "react";
import './App.css';
import COUNTER from './components/functional_comp/useState_Hooks/couter';
import COUNTER2 from './components/functional_comp/useState_Hooks/counter2';
import HookCounterThree from './components/functional_comp/useState_Hooks/hookCounter3';
import StateWithArr from './components/functional_comp/useState_Hooks/stateWithArr';
import HOOKCOUNTERONE from './components/functional_comp/useEffect_Hooks/hookCounterOne';
import HookCounterOne_class from './components/classBase_comp/hookCounterOne_class';
import ClassMouse from './components/classBase_comp/ClassMouse';
import { HookMouse } from './components/functional_comp/useEffect_Hooks/HookMouse';
import { MouseContainer } from './components/functional_comp/useEffect_Hooks/MouseContainer';
import IntervalClassCounter from './components/classBase_comp/IntervalClassCounter';
import { IntervalHookCounter } from './components/functional_comp/useEffect_Hooks/IntervalHookCounter';
import { DataFetching } from './components/dataFetching';
import { Component_C } from './components/functional_comp/context_Hook/Component_C';
import { ReducerCounterOne } from "./components/functional_comp/reducer_Hook/ReducerCounterOne";
import { ReducerCounterTwo } from "./components/functional_comp/reducer_Hook/ReducerCounterTwo";
import { ReducerCounterThree } from "./components/functional_comp/reducer_Hook/ReducerCounterThree";
import { ComponentA } from "./components/functional_comp/reducerWithContext_Hook/ComponentA";
import { ComponentB } from "./components/functional_comp/reducerWithContext_Hook/ComponentB";
import { ComponentC } from "./components/functional_comp/reducerWithContext_Hook/ComponentC";
import { DataFetchingOne } from "./components/functional_comp/reducerWithContext_Hook/DataFetchingOne";
import { DataFetchingTwo } from "./components/functional_comp/reducerWithContext_Hook/DataFetchingTwo";
import { Counter } from "./components/functional_comp/useMemo_Hook/Counter";
import { FocusInput } from "./components/functional_comp/useRef_Hook/FocusInput";
import ClassTimerRef from "./components/classBase_comp/ClassTimerRef";
import { TimerRef } from "./components/functional_comp/useRef_Hook/TimerRef";
import { DocTitleOne } from "./components/functional_comp/custom_Hook/DocTitleOne";
import { DocTitleTwo } from "./components/functional_comp/custom_Hook/DocTitleTwo";
import { CounterOne } from "./components/functional_comp/custom_Hook/CounterHook/CounterOne";
import { CounterTwo } from "./components/functional_comp/custom_Hook/CounterHook/CounterTwo";
import { UserForm } from "./components/functional_comp/custom_Hook/forms/UserForm";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
const initialState = 0;

export const CountContext = React.createContext();

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}


function App() {

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <h1>State With Simple Counter</h1>
      <COUNTER />
      <h1>State With Increment/Decrement/Reset/JumpToNine</h1>
      <COUNTER2 />
      <h1>State With Object</h1>
      <HookCounterThree />
      <h1>State With Array</h1>
      <StateWithArr /> */}

      {/* <h1>Using useEffect One Counter With Functional Component</h1>
      <HOOKCOUNTERONE />

      <h1>Using LifeCycles One Counter With Class Base Component</h1>
      <HookCounterOne_class /> */}

      {/* <h1>Using LifeCycles MOUSE-MOVE With Class Base Component</h1>
      <ClassMouse />

      <h1>Using useEffect MOUSE-MOVE With Functional Component</h1>
      <HookMouse /> 
      <MouseContainer /> */}

      {/* <h1>Using LifeCycles TIME INTERVAL With Class Base Component</h1>

      <IntervalClassCounter />

      <h1>Using useEffect TIME INTERVAL With Functional Component</h1>

      <IntervalHookCounter /> */}

      {/* <h1>Using useEffect DATA FETCHING With Functional Component</h1>

        <DataFetching /> */}



      {/* <h1>Context API Hooks</h1>
      <UserContext.Provider value={'Sachin'}>
        <ChannelContext.Provider value={'My Channel'}>
          <Component_C />
        </ChannelContext.Provider>
      </UserContext.Provider> */}


      {/* <h1>useReducer in React Functional Component</h1>

      <ReducerCounterOne />

      <h1>useReducer with Object in React Functional Component</h1>

      <ReducerCounterTwo />

      <h1>useReducer with Multiple Reducers in React Functional Component</h1>

      <ReducerCounterThree /> */}
      {/* <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
        <h1>useReducer with useContext in React Functional Component</h1>
        <h3>Counter: {count}</h3>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}

      {/* <h1>Data Fetching with useReducer</h1> 

       <DataFetchingOne /> 
      <DataFetchingTwo /> */}

      {/* <h1>Counter using useMemo</h1> 

      <Counter /> */}

      {/* <h1>Counter using useRef</h1>

      <FocusInput />
      <h1>Timer Using Class Component</h1>
      <ClassTimerRef />

      <h1>Timer Using Functional Component</h1>

      <TimerRef /> */}

      <h1>Custom Hook Functional Component Example 1</h1>
      <DocTitleOne />
      <DocTitleTwo />

      <h1>Custom Hook Functional Component Example 2</h1>

      <CounterOne />
      <CounterTwo />

      <h1>Custom Hook Functional Component Example 3</h1>

      <UserForm />
    </div>
  );
}

export default App;
