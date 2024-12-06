import React, { useRef } from 'react'

const Ref_Input = () => {
 
 const InputElement = useRef(null)
 const handleRef = ()=>{
    InputElement.current.focus()
    InputElement.current.value=Math.floor(Math.random()*100)
 }
    return (
    <div>

<input type="text" ref={InputElement} />
<button onClick={handleRef}>Click</button>
    </div>
  )
}

export default Ref_Input