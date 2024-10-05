import React, { useEffect, useState } from "react";

function Timer() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);

  let timer;
  useEffect(() => {
    timer = setInterval(() => {
    
      setSecond(second + 1);
      console.log('interval run')
      if (second === 59) {
        setMinute(minute => minute + 1);
        setSecond(0);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("clear");
    };
  });

  function Stop() {
    clearInterval(timer);
  }

  function Restart() {
    setSecond(0);
    setMinute(0);
  }

  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <div className="border-2 border-black bg-green-100 p-8 flex flex-col items-center gap-4">
        <div>
          <p>
            {minute < 10 ? "0" + minute : minute}:
            {second < 10 ? "0" + second : second}
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-green-500 px-2 py-1 rounded-xl text-white">
            Start
          </button>
          <button
            onClick={Stop}
            className="bg-red-500 px-2 py-1 rounded-xl text-white"
          >
            Stop
          </button>
          <button
            onClick={Restart}
            className="bg-violet-500 px-2 py-1 rounded-xl text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
