import React, { useEffect, useRef, useState } from 'react'

const Ref_Timer = () => {

const intervalRef = useRef(null)

const [timer,setTimer] = useState(0)

useEffect(()=>{

intervalRef.current = setInterval(() => {
    setTimer((prevState)=>prevState + 1)
}, 1000);

return ()=>{
    clearInterval(intervalRef.current);
}

 
},[])


  return (
    <div>
        Timer: {timer}
    <button onClick={()=>clearInterval(intervalRef.current)}>Stop</button>
    
    </div>
    
  )
}

export default Ref_Timer