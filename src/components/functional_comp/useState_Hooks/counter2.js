import React, { useState } from 'react'

const COUNTER2 = () => {

    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    const jumpNine = (countLength)=>{    
            for (let i = 0; i < countLength; i++) {
                setCount(prevCount => prevCount + 1)
                
            }
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(initialValue)}>Reset</button>
        <button onClick={()=>setCount(count + 1)}>Increment</button>
        <button onClick={()=>setCount(count - 1)}>Decrement</button>
        <button onClick={()=>jumpNine(9)}> Jump Nine </button>
    </div>
  )
}

export default COUNTER2