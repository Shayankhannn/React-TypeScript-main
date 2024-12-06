import React, { useEffect, useState } from 'react'

const ComponentLocal = () => {

    const [name,setName] = useState(

        ()=>{
            const savedName = localStorage.getItem("name")
             return savedName  ? JSON.parse(savedName) : ""
        }


    )

useEffect(()=>
localStorage.setItem('name',JSON.stringify(name)),[name]
)

const clear = ()=> setName("")

  return (
    <div>

<h1>Name:{name}</h1>
<input type="text" placeholder='Your Name'  onChange={(e)=>setName(e.target.value)} />
<button onClick={clear}>Clear</button>


    </div>
  )
}

export default ComponentLocal