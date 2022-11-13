import React, { useState, useEffect, useRef} from 'react'

export const TimerRef = () => {

    const [timer, setTimer] = useState(0);

    const intervalRef = useRef(null);
    
    useEffect(()=>{
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1);
        }, 1000);
        return ()=>{
            clearInterval(intervalRef.current);
        }
    },[]);



  return (
    <div>
      <h3>Timer: {timer}</h3>
      <button onClick={()=>clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  )
}
