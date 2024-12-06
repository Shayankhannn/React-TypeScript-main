import React from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
    name: string;
    email: string;
    password: string;
}

const React_Hook_Form = () => {
  
const { register, handleSubmit, formState:{ errors,isSubmitting} } = useForm<FormData>()
    

return (
    <div>
        <h1>React Hook Form</h1>


    </div>
  )
}

export default React_Hook_Form