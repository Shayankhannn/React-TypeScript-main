import React, { useEffect, useState } from 'react'

const Effect_DataComponent = () => {

    const [data,setData] = useState([])

useEffect(()=>{

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json()
        setData(data)
    }
    
    fetchData()
    console.log(data)

},[])



  return (
    <div>

      {data.length>0 ? <h2>{data[0].title}</h2> : 'No Data'} 

{/* <ul>
    {
        data.map((post)=>(
            <li key={post.id}>{post.title}</li>
        ))
    }
</ul> */}

    </div>
  )
}

export default Effect_DataComponent