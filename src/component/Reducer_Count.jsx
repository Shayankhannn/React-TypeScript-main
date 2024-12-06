
// useReducer in react => it manage state 

//     syntax => 

// const [state,dispatch] = useReducer(reducer,initialState);

// initialState => the initial value of your state you will  define when the component first render  

// reducer => function that takes the current state and action as a input and return a new state value to us
//  (this is a function that describe how the function should chase based on some action or condition)

//  state => the current state value which you can use in your component

//  dispatch => a function you can call to send an action to the reducer to update the state










import React from 'react'
import { useReducer } from 'react'


const initialState = {count:0}

const reducer = (state,action)=>{
    switch (action.type) {
        case "increment":
            
            return {...state,count: state.count + 1};
        case "decrement":
            
            return {...state,count: state.count - 1};
    
        case "reset":
            
            return {...state,count: 0 };
    
        default:
            state;
    }
}


const Reducer_Count = () => {
  
  const [state,dispatch] = useReducer(reducer,initialState);


  
  
    return (
    <div>
<h1>Count: {state.count}</h1>
<button onClick={()=>dispatch({type:"increment"})}>+</button>
<button onClick={()=>dispatch({type:"decrement"})}>-</button>
<button onClick={()=>dispatch({type:"reset"})}>Reset</button>

    </div>
  )
}

export default Reducer_Count