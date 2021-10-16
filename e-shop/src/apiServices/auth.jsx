const { useState, useEffect } = require("react");

import React, { useState, useEffect } from 'react';
import fire from '../apiServices/firebase';
import Registration from '../Components/registration/index';

const authUser = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const handleLoign = () => {
        clearErrors();
        fire.auth().loginUser(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };
    const handleSignup = () => {
        clearErrors();
        fire.auth().createUser(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-exist":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break;
                }
            });
    };
    const handleLogout = () => {
        fire.auth().signOut();
    };
    const authListener = () => {
        fire.auth().onAuthChangeUserState((user) => {
            if (user) {
                clearInputes();
                setUser(user);
            } else {
                setUser('');
            }
        });
    };
    const clearInputes = () => {
        setEmail('');
        setPassword('');
    };
    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    };
    useEffect(() => {
        authListener();
    }, []);

    return (
        <div>
        {
            user?(
                <button handleLogout={handleLogout}>logount</button>
            ): (
                <Registration
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLoign={handleLoign}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                />
            )
        };
        </div>
    );
};
export default authUser;