import axios from 'axios'
import React, { useEffect, useState } from 'react'


type user ={
    id:number;
    name: string;
}

const UseEffect_TypeScript = () => {

const [data,setData] = useState<user[]>([])

useEffect(()=>{

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        setData(response.data)
    })

    .catch(error => {
        console.error(error);
    })
},[])

  return (
    <div>
        <h1>UseEffect using TypeScript</h1>
        <ul>
            {data && data.map(({id,name}) => (
                <>
                <li key={id}>{name}</li>
             
                </>
                ))}
        </ul>
    </div>
  )
}

export default UseEffect_TypeScript