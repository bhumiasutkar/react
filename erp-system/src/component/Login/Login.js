import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from '../FormElements/Input/Input';
import { useAuth } from '../../context/AuthContext';
import { Alert } from "react-bootstrap"

const Login = () => {
    const ref = React.createRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const history = useHistory();

     async function handleSubmit(e) {
        e.preventDefault();
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to log in")
        }
        setLoading(false);
    }
    return (
        <div className="container">
            <div className="wrapper" style={{padding: "20px 20%"}}>
            <h2 className="text-center mb-4">Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
            <div id="formContent">
                <form onSubmit={handleSubmit}>
                        <Input label="Login" input={{ type: "text", id: "login", name: "login", classname:"fadeIn second", require: 'required', inputRef: {emailRef} }} />

                        <Input label="password" input={{ type: "text", id: "password", name: "password", classname:"fadeIn third", require: 'required', ref: {ref}  }} />
                        
                        <Input label="" input={{ type:"submit", classname:"fadeIn"}} />
                </form>
                <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Login;