import React, { FormEvent, useRef, useState } from 'react'

type FormData = {
    name: string;
    email: string;
    password: string;
}

const UseRef_Form = () => {



    const [Data,setData] = useState<FormData>({
        name: "",
        email: "",
        password:'',
    })

    const name = useRef<HTMLInputElement>(null)
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)

const handleChange = (event:FormEvent<HTMLFormElement>)=>{
event.preventDefault()

const nameValue = name.current!.value
const EmailValue = email.current!.value
const PasswordValue = password.current!.value

setData({
    name: nameValue,
    email: EmailValue,
    password: PasswordValue,
})


}
//ddd

    return (
    <form onSubmit={handleChange}>
<input type="text" placeholder='name' ref={name} />
<input type="email" placeholder='email' ref={email} />
<input type="password" placeholder='password' ref={password} />
    
    <button type="submit">Submit</button>

<section>
    <h2>Form Data</h2>
    <p>name: {Data.name}</p>
    <p>email: {Data.email}</p>
    <p>Password: {Data.password}</p>

</section>

    </form>
  )
}

export default UseRef_Form