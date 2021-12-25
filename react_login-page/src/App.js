import React, { useState } from 'react'
import './App.css';
import Login from './components/Login'
import Profile from './components/Profile'

import { LoginContext } from './Contexts/LoginContext'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const person = {
    name: "milad"
  }

  const [showProfile, setShowProfile] = useState(false)
  const [username, setUsername] = useState("")

  return (

    <LoginContext.Provider value={{ username, setUsername, setShowProfile, showProfile }}>
      <div className="App">
        <header className="App-header">
          {username === person.name && showProfile ? <Profile /> : <Login />}
        </header>
      </div>
    </LoginContext.Provider>



    //   <Switch>
    //     <Route exact path="/" components={Login} >
    //       <LoginContext.Provider value={username, setUsername, setShowProfile}>
    //         <Login />
    //       </LoginContext.Provider>
    //     </Route >

    //   </Switch>

    // </Router>
  );
}

export default App;
