import React, { useContext } from 'react'

import { LoginContext } from '../Contexts/LoginContext'



function Login() {

    const { setUsername, setShowProfile } = useContext(LoginContext)
    return (
        <div className="App-header">
            <h1>This is Login Page</h1>

            <input type="text" placeholder="Username" onChange={(e) => { setUsername(e.target.value) }} />
            <input type="password" placeholder="Password" />

            <button onClick={() => { setShowProfile(true) }} >Login</button>
        </div>
    )
}

export default Login
