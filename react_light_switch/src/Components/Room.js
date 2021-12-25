import React, {useState} from 'react';
import "./Room.css";


function Room() {

    const [state, setStatus] = useState(true);


    function changeStatus() {

        setStatus(currentState =>  currentState? false : true)

    }




    return (
        <div className={`room ${state? "light": "dark"}`}>

        
            <p>The room is {state? "light": "dark"}</p>
            <br/>
            <button onClick={changeStatus}>lightswitch</button>
            
        </div>
    )
}

export default Room
