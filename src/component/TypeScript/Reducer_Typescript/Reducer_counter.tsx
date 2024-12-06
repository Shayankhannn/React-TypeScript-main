import React, { useReducer } from 'react'


type state = {
    count:number;
}
type action = {type:"INCREMENT"} | {type:"DECREMENT"}

const Reducer_counter = () => {
  
const reducer = (state:state ,action:action)=>{
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1};
            
        case "DECREMENT":
            return {count: state.count - 1};
            
    
        default:
          return  state;
    }
}

  const [state,dispatch] = useReducer(reducer,{count:0})

    return (
    <div>
        <h1>Reducer Counter</h1>
        <p>Count: {state.count}</p>
      
        <button onClick={() => dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={() => dispatch({type:"DECREMENT"})}>-</button>

    </div>
  )
}

export default Reducer_counter