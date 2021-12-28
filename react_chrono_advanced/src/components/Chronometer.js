import React, { useState } from 'react'
import './Chronometer.css'

const Chronometer = () =>
{
    const [[ active, setActive], [ cs, setCS ], [ s, setS ] , [ m, setM ], [inter, setInter]] = 
        [...[useState(false), useState(0), useState(0), useState(0), useState(0)]]; 

    let [ csec, sec, min ] = [...Array(3).fill(0)];
    
    const timer = () =>
    {
        setCS(++csec);
        if(csec === 100) 
        {
            csec = 0;
            setCS(csec);
            setS(++sec);
        }
        if(sec === 60) 
        {
            sec = 0;
            setS(sec);
            setM(++min);
        }
        if(min === 60) 
        {
            min = 0;
            setM(min);
        }
    };

    const handleStart = (e) =>
    {
        setActive(true);
        if(!active)
        {
            setInter(setInterval( timer , 10));
        }
    }

    const handleStop = (e) =>
    {
        if(active)
        {
            setActive(false);
            clearInterval(inter);
        }
    }

    const handleReset = (e) =>
    {
        if(active) handleStop();
        setCS(0);
        setS(0);
        setM(0);
        [ csec, sec, min ] = Array(3).fill(0);
    }

    const timerCondition =
    {
        [true]: '0',
        [false]: ''
    };

    return (
        <div>
            <div className="container chrono">
                { 
                    timerCondition[m < 10] + m + ":"
                    + timerCondition[s < 10] + s + ":"
                    + timerCondition[cs < 10] + cs
                }
            </div>
            <div className="container buttons">
                <button onClick={ handleStart }>Start</button>
                <button onClick={ handleStop }>Stop</button>
                <button onClick={ handleReset }>Reset</button>
            </div>
        </div>
    )
}

export default Chronometer
