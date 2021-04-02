import React, { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const setPause = () => {
    let temp = logs.slice();
    setIsRunning(false);
    temp.push([min, sec]);
    setLogs(temp);
  };
  const setStart = () => {
    setIsRunning(true);
  };
  const setReset = () => {
    setIsRunning(false);
    setTimer(0);
    setLogs([]);
  };
  if (isRunning) {
    setTimeout(() => setTimer(timer + 1), 1000);
  }

  let min = parseInt(timer / 60);
  let sec = parseInt(timer % 60);

  return (
    <div className="App">
      <div>
        {min < 10 ? <span>0{min}</span> : <span>{min}</span>}
        <span>:</span>
        {sec < 10 ? <span>0{sec}</span> : <span>{sec}</span>}
      </div>
      {isRunning ? (
        <button onClick={setReset}>reset</button>
      ) : (
        <button onClick={setStart}>start</button>
      )}

      <button onClick={setPause}>pause</button>
      <div>
        {logs.map((log, idx) => (
          <div key={idx}>
            {log[0] < 10 ? <span>0{log[0]}</span> : <span>{log[0]}</span>}
            <span>:</span>
            {log[1] < 10 ? <span>0{log[1]}</span> : <span>{log[1]}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
