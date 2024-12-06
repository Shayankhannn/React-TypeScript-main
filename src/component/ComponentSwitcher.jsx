import React, { useState } from 'react'

const ComponentSwitcher = () => {
  
    const [sw,setSw] = useState(false)
  
    return (
    <div>

<h1>{sw ?  'Switched' : 'Not Switched'}</h1>    


<button onClick={()=>setSw((s)=>!s)}>Switch</button>

    </div>
  )
}

export default ComponentSwitcher