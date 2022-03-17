import React, { useState } from "react";
var count1 = 0;



export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
        <h1>Counter:{count}</h1>
        
        <button onClick={() => {
         setCount(count1 = count1 + 1)
        }}>+</button>
         <button onClick={() => {
         setCount(count1 = count1 - 1)
        }}>-</button>
        </>
    )
}