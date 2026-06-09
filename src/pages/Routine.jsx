import { useState } from "react";
import Sidebar from "../components/Sidebar";

import morningIcon from "../assets/morning.jpg";
import eveningIcon from "../assets/evening.jpg";

import "./Routine.css";

function Routine() {

  const [morning, setMorning] = useState([]);
  const [evening, setEvening] = useState([]);

  const addMorning = () => {

    setMorning([
      ...morning,
      {
        id: Date.now(),
        text: "",
        completed: false
      }
    ]);
  };

  const addEvening = () => {

    setEvening([
      ...evening,
      {
        id: Date.now(),
        text: "",
        completed: false
      }
    ]);
  };

  const updateMorning = (id, value) => {

    setMorning(
      morning.map(item =>
        item.id === id
          ? { ...item, text: value }
          : item
      )
    );
  };

  const updateEvening = (id, value) => {

    setEvening(
      evening.map(item =>
        item.id === id
          ? { ...item, text: value }
          : item
      )
    );
  };

  const completeMorning = (id) => {

    setMorning(
      morning.map(item =>
        item.id === id
          ? { ...item, completed: true }
          : item
      )
    );

    setTimeout(() => {
      setMorning(prev =>
        prev.filter(item => item.id !== id)
      );
    }, 700);
  };

  const completeEvening = (id) => {

    setEvening(
      evening.map(item =>
        item.id === id
          ? { ...item, completed: true }
          : item
      )
    );

    setTimeout(() => {
      setEvening(prev =>
        prev.filter(item => item.id !== id)
      );
    }, 700);
  };

  return (
    <div className="routine-page">

      <Sidebar />

      <div className="routine-content">

        {/* 아침 */}

        <div className="routine-box">

          <div className="routine-header">

            <img
              src={morningIcon}
              alt="아침"
              className="routine-icon"
            />

            <h2>아침 루틴</h2>

            <button onClick={addMorning}>
              + 새 루틴
            </button>

          </div>

          <hr />

          {morning.map(item => (

            <div
              key={item.id}
              className="routine-item"
            >

              <button
                className="circle-btn"
                onClick={() =>
                  completeMorning(item.id)
                }
              >
                {item.completed ? "✓" : ""}
              </button>

              <input
                type="text"
                placeholder="아침 루틴 입력"
                value={item.text}
                onChange={(e) =>
                  updateMorning(
                    item.id,
                    e.target.value
                  )
                }
              />

            </div>

          ))}

        </div>

        {/* 저녁 */}

        <div className="routine-box">

          <div className="routine-header">

            <img
              src={eveningIcon}
              alt="저녁"
              className="routine-icon"
            />

            <h2>저녁 루틴</h2>

            <button onClick={addEvening}>
              + 새 루틴
            </button>

          </div>

          <hr />

          {evening.map(item => (

            <div
              key={item.id}
              className="routine-item"
            >

              <button
                className="circle-btn"
                onClick={() =>
                  completeEvening(item.id)
                }
              >
                {item.completed ? "✓" : ""}
              </button>

              <input
                type="text"
                placeholder="저녁 루틴 입력"
                value={item.text}
                onChange={(e) =>
                  updateEvening(
                    item.id,
                    e.target.value
                  )
                }
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Routine;