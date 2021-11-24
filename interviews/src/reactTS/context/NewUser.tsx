import React, { useContext } from 'react';
import { UserContext } from './UserContext'

export const NewUser = () => {
    const context = useContext(UserContext);
    const handleLogin = () => {
        context.setIsUser({
            name: 'Bhumi',
            email: 'bhumi@g.co'
        })
    }
    const handleLogOut = () => {
        context.setIsUser(null)
    }
    return (
        <div>
            <h2>reducer two</h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogOut}>Logout</button>
            <h4>Your email is {context.isUser?.email} and name is {context.isUser?.name}</h4>
        </div>
    );
}