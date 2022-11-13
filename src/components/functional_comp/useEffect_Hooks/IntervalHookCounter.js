import React, {useState, useEffect} from 'react'

export const IntervalHookCounter = () => {

    const [count, setCount] = useState(0);


    const tick = ()=>{
        setCount(prevCount => prevCount + 1)
    }

    useEffect(() => {
     const intervals = setInterval(tick, 1000);
    
      return () => {
        clearInterval(intervals)
      }
    }, [])
    


  return (
    <div>
        {count}
    </div>
  )
}
