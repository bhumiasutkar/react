import React, { useState } from 'react';

const LogIn = () => {
    const [isLoggin, setIsLogin] = useState(false)
    const handleLogin = () => {
        setIsLogin(true)
    }
    const handleLogOut = () => {
        setIsLogin(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleLogOut}>Log out</button>
            <h3>{isLoggin ? 'User logged in' : 'User LogOut'}</h3>
        </div>
    );
}

export default LogIn;


type AuthUser = {
    name: string
    email: string
}
export const User = () => {
    const [isUser, setUser] = useState<AuthUser | null>(null);
    const loggin = () => {
        setUser({
            name: 'Bhumi',
            email: 'test@g.co'
        })
    }
    const logOut = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={loggin}>Log in</button>
            <button onClick={logOut}>Log out</button>
            <h3>user name is {isUser?.name}</h3>
            <h3>user email is {isUser?.email}</h3>
        </div>
    );
}