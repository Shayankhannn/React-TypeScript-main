 import React, { useRef } from 'react'

const UseRef_FocusInput = () => {
    const inputRef = useRef<HTMLInputElement>(null)

const handleFocus  = () => {
    inputRef.current!.focus()
}
  return (
    <div>
<h1>Input Focus Using TypeScript</h1>
        <input type="text" placeholder='watch here' ref={inputRef} />
        <button onClick={handleFocus }>click to focus</button>
    </div>
  )
}

export default UseRef_FocusInput