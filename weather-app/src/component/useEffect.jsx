import React, { useEffect, useState } from 'react'

export const UseEffectExmpale = () => {
  const [count, setCount] = useState(0)

  
  useEffect(() => {
      console.log(count, "i will the when the page mount")

  }, [])

  useEffect(() => {
      console.log(count, "i will get onvoked every time the count change")
  }, [count])

  const handelClick = () => {
      setCount(count => count +10)
  }
  
  
  
    return (
    <div>

        <h3>count: {count}</h3>
        <button onClick={handelClick}></button>


    </div>
  )
}



