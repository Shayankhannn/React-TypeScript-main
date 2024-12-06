    import React, { useEffect } from 'react'

    const Project_Todo = () => {

    const [Todo, setTodo] = React.useState(()=>{
        const storedTodo = localStorage.getItem('Todo')
        return storedTodo ? JSON.parse(storedTodo) : []

    });
    const [Input, setInput] = React.useState("");
    const [Edit, setEdit] = React.useState(null);


    const handleSubmit = (e)=>{
        e.preventDefault();

        if (Input.trim()=== '')return;
            

        if(Edit !== null){
            
            
        // setTodo((prevTodo)=>[...prevTodo,{id:Todo.length + 1  , text:Input}]);
        const updatedTodo = Todo.map((item)=>item.id=== Edit ? {...item, text:Input} : Todo );
        setTodo(updatedTodo)
        setEdit(null)
        }else{

            setTodo((prevTodo)=>[...prevTodo,{id:Todo.length + 1  , text:Input}]);
            
        }
        setInput("")


};

   
    useEffect(()=>{
        localStorage.setItem("Todo",JSON.stringify(Todo))
        
    },[Todo])


    const handleRemove =(id)=>{
        setTodo((prevTodo)=>prevTodo.filter((todo)=>todo.id !== id))
    }

    const handleEdit = (id)=>{
        const TodoEdit = Todo.find((todo)=>todo.id === id)
        setInput(TodoEdit.text)
        setEdit(id)
    }

    return (
        <div>

            <h1 >Write Your Todo</h1>

    <form onSubmit={handleSubmit}>

    <label htmlFor="#">Write Your Todo</label>
    <input type="text" placeholder='Your Todo' value={Input} onChange={(e)=>setInput(()=>e.target.value)} />
    <button>insert</button>

    </form>

        <h1>Your Todos</h1>
    <ul>

    {Todo.map((todo)=>(
        <>
        <li key={todo.id}>{todo.id} ) {todo.text}</li>
        <button onClick={()=>handleRemove(todo.id)}>Remove</button>
        <button onClick={()=>handleEdit(todo.id)}>Edit</button>
        </>
    ))}

    </ul>

        </div>
    )
    }

    export default Project_Todo