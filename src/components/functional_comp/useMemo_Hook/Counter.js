import React, { useState, useMemo } from 'react'

export const Counter = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const handleOne = () => {
        setCounterOne(counterOne + 1);
    };

    const handleTwo = () => {
        setCounterTwo(counterTwo + 1);
    };

    const isEven =  useMemo(() => {
        let i = 0;
        while(i< 2000000000) i++;        
        return counterOne % 2 === 0;
    }, [counterOne]);


    return (
        <div>
            <div>
                <button type='text' onClick={handleOne}>Count One: {counterOne}</button>
                <span>{isEven? 'Even' : 'Odd'}</span>
            </div>
            <div> <button type='text' onClick={handleTwo}>Count Two: {counterTwo}</button>
            </div>
        </div>
    )
}
