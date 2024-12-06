import React from 'react'
import { useState,useEffect } from 'react';
const Project_Toggle = () => {

const [toggle, setToggle] = useState("#fff");


const change = ()=>{
    setToggle((prevColor) => (prevColor === "#fff" ? "#000" : "#fff"));

}

useEffect(() => {
    document.body.style.backgroundColor = toggle;
  }, [toggle]);

  return (
    <div>

<h1>Click To Change Color</h1>
<button onClick={()=>change()}>{toggle === '#fff' ? 'White' : 'Dark'}</button>
    </div>
  )
}

export default Project_Toggle