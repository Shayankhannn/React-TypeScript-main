import React, { useState } from 'react'
import ComponentPopup from './ComponentPopup'

const PortalComponent = () => {
  
  const [inputValue,setInputValue] = useState('')
  const [copied,setCopied] = useState(false)
  

  const copy = ()=>{
    navigator.clipboard.writeText(inputValue).then(()=>{
        setCopied(true)
    setTimeout(() => {
        setCopied(false)
    },3000);
    })
  }
    return (
    <div>

<input type="text" placeholder='write Text' value={inputValue} onChange={e =>setInputValue(e.target.value)}  />
<button onClick={copy}>Click To Copy</button>
<ComponentPopup copied={copied}/>
    </div>
  )
}

export default PortalComponent