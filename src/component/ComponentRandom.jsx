import React, {useState} from 'react'

const ComponentRandom = () => {


    const [number, setNumber] = useState(()=> Math.floor(Math.random()*100));

  return (
    <div>

<h1>Random Number:{number}</h1>
<button onClick={()=>setNumber(()=>Math.floor(Math.random()*100))}>Generate Random Number</button>

    </div>
  )
}

export default ComponentRandom