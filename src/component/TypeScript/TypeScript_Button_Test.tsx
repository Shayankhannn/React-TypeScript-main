import React from 'react'

const TypeScript_Button_Test = ({label,onclick,Disabled}:{label:string; onclick:()=>void;Disabled:boolean}) => {
  return (
    <div>

<button onClick={onclick} disabled={Disabled}>{label}</button>
    </div>
  )
}

export default TypeScript_Button_Test