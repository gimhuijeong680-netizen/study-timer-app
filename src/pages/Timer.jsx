import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./Timer.css";

function Timer() {

  const [selectedTime, setSelectedTime] = useState(25);
  const [time, setTime] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [status, setStatus] = useState("대기중");

  useEffect(() => {

    let timer;

    if (running && time > 0) {
      timer = setInterval(() => {
        setTime(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);

  }, [running, time]);

  const changeTime = (minutes) => {

    setSelectedTime(minutes);
    setTime(minutes * 60);

    setRunning(false);
    setStatus("대기중");
  };

  const startTimer = () => {
    setRunning(true);
    setStatus("공부중");
  };

  const stopTimer = () => {
    setRunning(false);
    setStatus("일시정지");
  };

  const resetTimer = () => {
    setRunning(false);
    setTime(selectedTime * 60);
    setStatus("대기중");
  };

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  return (
    <div className="timer-page">

      <Sidebar />

      <div className="timer-content-page">

        <div className="timer-main-box">

          <h1 className="timer-number">
            {minutes}:{seconds}
          </h1>

          <p className="timer-label">
            집중 시간
          </p>

          <div className="timer-buttons">

            <button onClick={startTimer}>
              START
            </button>

            <button onClick={stopTimer}>
              STOP
            </button>

            <button onClick={resetTimer}>
              RESET
            </button>

          </div>

        </div>

        <div className="bottom-boxes">

          <div className="setting-box">

            <h3>시간설정</h3>

            <div className="setting-buttons">

              <button onClick={() => changeTime(25)}>
                25분
              </button>

              <button onClick={() => changeTime(30)}>
                30분
              </button>

              <button onClick={() => changeTime(60)}>
                60분
              </button>

            </div>

          </div>

          <div className="status-box">

            <h3>현재상태</h3>

            <div className="status-text">
              {status}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Timer;