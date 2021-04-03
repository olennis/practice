import React, { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const start = () => {
    setIsRunning(true);
    if (isRunning) {
      setTimeout(() => setTimer(timer + 1), 1000);
    }
  };

  return (
    <div className="App">
      <div>{timer}</div>
      <button onClick={start}>start</button>
      <button>pause</button>
    </div>
  );
}

export default App;
