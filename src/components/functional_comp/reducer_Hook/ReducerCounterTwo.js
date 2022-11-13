import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, firstCounter: state.firstCounter + action.value };
        case 'decrement': return { ...state, firstCounter: state.firstCounter - action.value };
        case 'increment2': return { ...state, secondCounter: state.secondCounter + action.value };
        case 'decrement2': return { ...state, secondCounter: state.secondCounter - action.value };
        case 'reset': return initialState;
        case 'reset2': return initialState;
        default: return state.firstCounter;
    }
}

export const ReducerCounterTwo = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>First Counter: {count.firstCounter}</h3>
            <h3>Second Counter: {count.secondCounter}</h3>

            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 9 })}>Increment By 9</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 9 })}>Decrement By 9</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

            <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment 2</button>
            <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement 2</button>
            <button onClick={() => dispatch({ type: 'reset2' })}>Reset2</button>

        </div>
    )
}
