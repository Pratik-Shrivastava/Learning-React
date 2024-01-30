import React from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) =>
    {

    }
  return (
    <div>
        Login
        <input type="text"
        value = {username}
        onClick={(e)=> setUsername(e.target.value)}
        placeholder='username'/>
        <input type="text" 
        value={password}
        onClick={(e)=> setPassword(e.target.value)}
        placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login