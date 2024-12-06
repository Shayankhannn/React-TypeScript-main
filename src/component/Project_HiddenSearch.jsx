import React, { useState } from 'react'

const Project_HiddenSearch = () => {

const [input,setInput] = useState(false)
const [bg,setBg] = useState("white")


const handleClick = (e)=>{
    setBg("#000")
    if (e.target.className === "container") {
        setInput(false)
        setBg("#fff")
    }
}

  return (
    <div className='container' style={{backgroundColor:bg,width:"400px",height:"200px"}}  onClick={handleClick}>

{input ? ( <input type="text" placeholder='search....' /> ) : (<h1 onClick={()=>setInput(true)}>click</h1>)}

    </div>
  )
}

export default Project_HiddenSearch