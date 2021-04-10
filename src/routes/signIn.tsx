import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'


const SignIn = () => {
    const history = useHistory();

    const [username, setUsername] = useState(''); //useState
    const [password, setPassword] = useState('');

    const changeUsername = (event: any) => {
        setUsername(event.target.value);
    }

    const changePassword = (event: any) => {
        setPassword(event.target.value);
    }

    const handleClick = () => {
        if(username && password) {
            history.push('\home')
        }
        
    }

    return (
        <div>
            <p>
            Username: 
            </p>
            <input type = "text" value={username} onChange={changeUsername} />
            <p>
            Password:
            </p>
            <input type = "password" value={password} onChange={changePassword}/>
            <br/>
            <button onClick={handleClick}>
            Sign In
            </button>
        </div>
    );
}

export default SignIn;
