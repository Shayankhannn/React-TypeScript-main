import React, { useEffect, useState } from 'react'

const EffectComponent_1 = () => {
  
  const [title,setTitle] = useState(0)
  
useEffect(()=>{
    document.title=`title${title}`
    console.log('useEffect')
},[title])

    return (
    
    
    <div>

<h1>{title}</h1>
<button onClick={()=>setTitle(()=> title + 1)}>Click</button>
<button onClick={()=>setTitle(()=> Math.max(title - 1,0))}>Click</button>


    </div>
  )
}

export default EffectComponent_1