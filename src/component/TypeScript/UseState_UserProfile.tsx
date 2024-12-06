import React, { useState } from 'react'


interface UserProfile {
    name: string;
    email: string;
    age: number;
}

const UseState_UserProfile = () => {

    const [user, setUser] = useState<UserProfile>({
        name: '',
        email: '',
        age:0,
    })


const updateName = (name:string)=>{
    setUser((prev) => ({ ...prev, name}))
}

const updateAge = (age:string)=>{
    setUser((prev) => ({ ...prev, age: +age}))
}
const updateEmail = (email:string)=>{
    setUser((prev) => ({ ...prev, email}))
}

  return (
    <div>

<h2>User Profile</h2>
<input type="text" placeholder='Write Your Name' value={user.name} onChange={(e)=> updateName(e.target.value)} />
<input type="number"  placeholder='Write Your age' value={user.age > 0 ? user.age : ''} onChange={(e)=> updateAge((e.target.value))} />
<input type="email"  placeholder='Write Your email' value={user.email} onChange={(e)=> updateEmail(e.target.value)} />


<h4>UserName: {user.name}</h4>
<h4>UserAge: {user.age}</h4>
<h4>UserEmail: {user.email}</h4>
    </div>
  )
}

export default UseState_UserProfile