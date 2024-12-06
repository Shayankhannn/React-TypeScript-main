import React, { useState } from 'react'

interface Todo {
    task:string;
    done:boolean;
}


const UseState_ToDo_Array = () => {
 
    const [todos, setTodos] = useState<Todo[]>([])
 
    return (
    <div>
<h2>Todo List</h2>

<button onClick={() => setTodos([...todos, {task: 'Buy Milk', done: false}])}>Add Todo</button>

<ul>
    {todos.map((todo, index) => (
        <li key={index}>{todo.task}</li>
   ) )}
</ul>


    </div>
  )
}

export default UseState_ToDo_Array