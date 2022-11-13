import React, { useState } from 'react';

const COUNTER = () => {

    const [count, setCount] = useState(0);

    // const addCounter =()=>{
    //     setCount(count + 1)
    // }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=> setCount(count + 1)}>Counter</button>
        </div>
    );
}

export default COUNTER;
