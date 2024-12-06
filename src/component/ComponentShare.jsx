import React, { useState } from 'react'

const ComponentShare = () => {
  
    const [count,setCount] = useState(0)
  
    return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={()=>setCount((count)=>count + 1,1)}>Click</button>
    </div>
  )
}

export default ComponentShare