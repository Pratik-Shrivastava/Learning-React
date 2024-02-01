import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { useState } from 'react';


function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) =>
    {
        // e.stopImmediatePropagation();
        e.preventDefault()
        // This is can be also done as an alternate
        setUser({username, password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text"
        value = {username}
        onChange={(e)=> setUsername(e.target.value)}
        placeholder='username'/>
        <br />
        <input type="password" 
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='password'/>
        <br />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login