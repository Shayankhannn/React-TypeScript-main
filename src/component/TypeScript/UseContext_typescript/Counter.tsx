import React, { FC, useContext } from 'react'
import { MyContext } from './MyContext'

const Counter: FC = () => {
 
 const {count,increment,decrement} =useContext(MyContext)
 
    return (
    <div>
        <h1>UseContext with TypeScript</h1>
<h1>Count: {count}</h1>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>
<h5>.................................</h5>
    </div>
  )
}

export default Counter