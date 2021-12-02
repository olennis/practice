import { useEffect, useState } from "react";
import "./App.css";
import Hello from "./components/Hello";

function App() {
  const [isStart, setIsStart] = useState(false);
  const [sec, setSec] = useState(55);
  const [min, setMin] = useState(59);
  const [hour, setHour] = useState(0);
  useEffect(() => {
    if (isStart) {
      setTimeout(() => {
        if (isOver(sec)) {
          if (isOver(min)) {
            setMin(0);
            setHour(hour + 1);
          } else {
            setMin(min + 1);
          }
          setSec(0);
        } else {
          setSec(sec + 1);
        }
      }, 1000);
    }
  }, [sec, isStart]);
  const isOver = (time) => {
    return time > 58;
  };
  const startHandler = () => {
    setIsStart(true);
  };
  const stopHandler = () => {
    setIsStart(false);
  };

  return (
    <div className="App">
      <div className="stopwatch">
        {hour < 10 ? <span>0{hour}</span> : <span>{hour}</span>}
        <span> : </span>
        {min < 10 ? <span>0{min}</span> : <span>{min}</span>}
        <span> : </span>
        {sec < 10 ? <span>0{sec}</span> : <span>{sec}</span>}
      </div>
      <button onClick={startHandler}>start</button>
      <button onClick={stopHandler}>stop</button>
      <Hello></Hello>
    </div>
  );
}

export default App;
