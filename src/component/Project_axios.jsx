import axios from 'axios'
import React, { useState,useEffect } from 'react'

const Project_axios = () => {
  
  const [Item,setItem] = useState([])


  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((res)=>{
        setItem(res.data)
    })
.catch((err)=>{
    console.log(err)
})

  },[])
  
// const itemList = Item.map(({id,title})=>{
// return (
//     <section >
//     <h1>{id}</h1>
//     <h1>{title}</h1>
//     </section>

// )
// })

const itemList = Item[0];


    return (
    <div>
    {itemList ? (
        <section>
            <h1>{itemList.id}</h1>
            <h1>{itemList.title}</h1>
        </section>
    ) : (
        <p>loading......</p>
    )
    
    
    }
    
    </div>
  )
}

export default Project_axios