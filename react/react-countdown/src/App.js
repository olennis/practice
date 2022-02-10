import { useEffect, useState } from "react/cjs/react.development";
import Timer from "./Timer";

function App() {
  const [correctTime, setCorrectTime] = useState(false);

  const settingTime = ["12:10:50", "11:00:00", "12:00:00"];
  const isCorrectTime = () => {
    const date = new Date();
    const hour =
      date.getHours() >= 10 ? date.getHours() : `0${date.getHours()}`;
    const min =
      date.getMinutes() >= 10 ? date.getMinutes() : `0${date.getMinutes()}`;
    const sec =
      date.getSeconds() >= 10 ? date.getSeconds() : `0${date.getSeconds()}`;
    const currentTime = `${hour}:${min}:${sec}`;
    if (currentTime === settingTime[0]) {
      setCorrectTime(true);
    }
  };

  useEffect(() => {
    setInterval(isCorrectTime, 1000);
  }, []);

  return (
    <div className="App">
      {correctTime ? (
        <Timer setCorrectTime={setCorrectTime}></Timer>
      ) : (
        <div>정해진 시간이 노놉</div>
      )}
    </div>
  );
}

export default App;
