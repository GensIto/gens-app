import { useState, useEffect } from "react";

export const Timer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [displayMessage, setDisplayMessage] = useState(false);

  useEffect(() => {
    let interval = setTimeout(() => {
      clearInterval(interval);

      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          // カウントダウン終了時
          let minutes = displayMessage ? 0 : 14;
          let seconds = 59;
          setSeconds(seconds);
          setMinutes(minutes);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
  }, [seconds]);

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className='absolute top-0 right-0 text-4xl'>
      {displayMessage && <h1>Rest!</h1>}
      <div className='flex items-center justify-center  rounded bg-indigo-600 px-4 py-3'>
        <h1 className='text-slate-100'>
          {timerMinutes}:{timerSeconds}
        </h1>
      </div>
    </div>
  );
};
