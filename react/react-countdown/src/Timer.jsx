import React from "react";
import { useEffect, useState } from "react";

const Timer = ({ setCorrectTime }) => {
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(0);
  const [isHere, setIsHere] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(sec) > 0) {
        setSec(parseInt(sec) - 1);
      } else {
        if (parseInt(min) === 0) {
          //완료 됐을 때
          setCorrectTime(false);
          clearInterval(countdown);
        } else {
          setSec(59);
          setMin(parseInt(min) - 1);
        }
      }
    }, 1000);
    //settimeout 으로 수정할것!
    return () => clearInterval(countdown);
  }, [sec]);
  return (
    <div>
      <div>지금 자리에 계신가요?</div>
      <div>
        {min < 10 ? `0${min}` : min}:{sec < 10 ? `0${sec}` : sec} 후 로그아웃
        됩니다.
      </div>
      <button>네, 저 여기 있어요</button>
    </div>
  );
};

export default Timer;
