import React, { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  if (isRunning) {
    setTimeout(() => setTimer(timer + 1), 1000);
  }
  return (
    <div className="App">
      <div>{timer}</div>
      <button>start</button>
      <button>pause</button>
    </div>
  );
}

export default App;
