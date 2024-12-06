import React from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
    name: string;
    email: string;
    password: string;
}

const React_Hook_Form = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Handle form submission (e.g., send data to an API)
    };

    return (
        <div>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && <p>{errors.name.message}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register('email', { required: 'Email is required', pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email address' } })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default React_Hook_Form;
