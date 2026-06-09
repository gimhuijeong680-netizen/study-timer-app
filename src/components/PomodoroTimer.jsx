import { useState, useEffect } from "react";

function PomodoroTimer() {
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [running, time]);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="timer-content">
      <h1 className="timer-text">
        {minutes}:{seconds}
      </h1>

      <div className="timer-buttons">
        <button onClick={() => setRunning(!running)}>
          {running ? "STOP" : "START"}
        </button>

        <button
          onClick={() => {
            setTime(25 * 60);
            setRunning(false);
          }}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default PomodoroTimer;