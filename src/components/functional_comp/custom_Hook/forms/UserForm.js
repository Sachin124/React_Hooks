import React from 'react'
import { useInput } from './useInput'

export const UserForm = () => {

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>FirstName: <input type='text' {...bindFirstName} /></div>
                <div>LastName: <input type='text' {...bindLastName} /></div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
