import { useState } from "react";
import Sidebar from "../components/Sidebar";
import character from "../assets/dday-character.png";
import "./Dday.css";

function Dday() {

  const [ddays, setDdays] = useState([]);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const calculateDday = (targetDate) => {

    const today = new Date();
    const target = new Date(targetDate);

    const diff = Math.ceil(
      (target - today) / (1000 * 60 * 60 * 24)
    );

    return diff;
  };

  const addDday = () => {

    if (!title || !date) return;

    setDdays([
      ...ddays,
      {
        id: Date.now(),
        title,
        date
      }
    ]);

    setTitle("");
    setDate("");
  };

  const sortedDdays = [...ddays].sort(
    (a, b) =>
      calculateDday(a.date) -
      calculateDday(b.date)
  );

  const nearest = sortedDdays[0];

  return (
    <div className="dday-page">

      <Sidebar />

      <div className="dday-content">

        {/* 상단 카드 */}

        <div className="top-dday-box">

          <div className="character-area">
            <img
              src={character}
              alt="캐릭터"
            />
          </div>

          <div className="nearest-info">

            <h1>{nearest?.title}</h1>

            <p>{nearest?.date}</p>

          </div>

          <div className="nearest-count">

            <h1>
              D-{calculateDday(nearest?.date)}
            </h1>

            <span>남았어요!</span>

          </div>

        </div>

        {/* 추가 영역 */}

        <div className="add-dday">

          <input
            type="text"
            placeholder="디데이 이름"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />

          <button onClick={addDday}>
            + 새 디데이
          </button>

        </div>

        {/* 목록 */}

        <div className="list-box">

          {sortedDdays.map((item) => (

            <div
              key={item.id}
              className="dday-item"
            >

              <div>{item.title}</div>

              <div>{item.date}</div>

              <div>
                D-{calculateDday(item.date)}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Dday;