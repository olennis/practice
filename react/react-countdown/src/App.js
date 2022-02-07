import { useEffect, useState } from "react";

function App() {
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(0);
  const [mSec, setMsec] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(mSec) > 0) {
        setMsec(parseInt(mSec) - 1);
      }
      if (parseInt(mSec) === 0) {
        if (parseInt(min) === 0 && parseInt(sec) === 0) {
          //완료 됐을 때
          console.log("finish!!");
          clearInterval(countdown);
        } else {
          if (parseInt(sec) > 0) {
            setSec(parseInt(sec) - 1);
          } else {
            setSec(59);
            setMin(parseInt(min) - 1);
          }
          setMsec(99);
        }
      }
    }, 10);
    return () => clearInterval(countdown);
  }, [mSec]);

  return (
    <div className="App">
      <div>
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec}:
        {mSec < 10 ? `0${mSec}` : mSec}
      </div>
    </div>
  );
}

export default App;
