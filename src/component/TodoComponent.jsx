import React, { useState } from 'react'

const TodoComponent = () => {

const [list,setList] = useState([])

const [inputText,setInputText] = useState('')

const handleInput = (e)=>{setInputText(e.target.value)}

const handleClick = ()=>{
    if(inputText.trim()=== '')return;

setList(
    (prevState)=> [
        ...prevState,
        {id: list.length + 1 ,text:inputText}
    ]
)

setInputText("")

}

const remove = (id)=>{ setList((prevList)=> prevList.filter((l)=>l.id  !== id))
}

  return (
    <div>
<ul>
    {list.map((m)=>(
        <li key={m.id}>{m.id} : {m.text}
        <button onClick={()=>remove(m.id)}>remove</button>
        </li>
    ))}
</ul>
<input type="text" placeholder='Write List' value={inputText} onChange={handleInput} />
<button onClick={handleClick}>Add</button>

    </div>
  )
}

export default TodoComponent