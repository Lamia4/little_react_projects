import React, {useState, useRef, useEffect} from "react"


function App() {

  const [milliSecond, setMillisecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  const timerIdRef = useRef(0);

  const startChrono = (e) => {

    console.log(e.target);
    
    timerIdRef.current = setInterval(() => setMillisecond(c => c+1), 100);
  };


  const stopChrono =(e) => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  return (
    <div className="App">
      <h1>React Chrono</h1>
      <p>{minute}:{second}:{milliSecond}</p>
      <button onClick = { startChrono }>start</button>
      <button onClick = { stopChrono }>stop</button>
      <button>reset</button>
    </div>
  );
}

export default App;
