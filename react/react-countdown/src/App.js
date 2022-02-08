import { useEffect, useState } from "react";

function App() {
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(0);
  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(sec) > 0) {
        setSec(parseInt(sec) - 1);
      } else {
        if (parseInt(min) === 0) {
          //완료 됐을 때
          console.log("finish!!");
          clearInterval(countdown);
        } else {
          setSec(59);
          setMin(parseInt(min) - 1);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [sec]);

  return (
    <div className="App">
      <div>
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}
      </div>
    </div>
  );
}

export default App;
