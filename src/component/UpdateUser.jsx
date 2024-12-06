import React from 'react'
import { useState,useContext } from 'react'
import { userContext } from './UserContext'

const UpdateUser = () => {
  
    const {updateUser} = useContext(userContext)
  
    const [newName,setNewName] = useState('')
    
    const handleSubmit = e=>{
        e.preventDefault()
         
        if(newName.trim()){
updateUser(newName)
setNewName('')
        }
    }
    
    return (


    <div>

<h2>Update Name</h2>

<form onSubmit={handleSubmit}>
<input type="text" placeholder='Write New Name' value={newName} onChange={e => setNewName(e.target.value)} />
<button type='submit'>Submit</button>
</form>

    </div>
  )
}

export default UpdateUser