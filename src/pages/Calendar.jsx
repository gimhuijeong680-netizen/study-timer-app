import { useState } from "react";
import Sidebar from "../components/Sidebar";
import character from "../assets/calendar-character.png";
import "./Calendar.css";

function Calendar() {

  const [year, setYear] = useState(2026);
const [month, setMonth] = useState(5);

const [selectedDate, setSelectedDate] = useState("2026-05-01");

const [schedule, setSchedule] = useState({});

const [input, setInput] = useState("");

  const daysInMonth = new Date(
  year,
  month,
  0
).getDate();

const days = Array.from(
  { length: daysInMonth },
  (_, i) => i + 1
);

  const prevMonth = () => {

  if(month === 1){
    setMonth(12);
    setYear(year - 1);
  }else{
    setMonth(month - 1);
  }

};

const nextMonth = () => {

  if(month === 12){
    setMonth(1);
    setYear(year + 1);
  }else{
    setMonth(month + 1);
  }

};

const addSchedule = () => {

  if (!input.trim()) return;

  setSchedule(prev => ({
    ...prev,

    [selectedDate]: [
      ...(prev[selectedDate] || []),
      input
    ]
  }));

  setInput("");
};

  return (
    <div className="calendar-page">

      <Sidebar />

      <div className="calendar-content">

        <div className="calendar-box">
          <div className="calendar-header">

  <button onClick={prevMonth}>
    ◀
  </button>

  <h2>
    {year}.{String(month).padStart(2,"0")}
  </h2>

  <button onClick={nextMonth}>
    ▶
  </button>

</div>

          <div className="week-header">
            <div>일</div>
            <div>월</div>
            <div>화</div>
            <div>수</div>
            <div>목</div>
            <div>금</div>
            <div>토</div>
          </div>

          <div className="calendar-grid">

            {days.map((day) => {

              const fullDate =
`${year}-${String(month).padStart(2,"0")}-${String(day).padStart(2,"0")}`;

              return (

                <div
                  key={day}
                  className={`calendar-day ${
                    selectedDate === fullDate
                      ? "selected"
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedDate(fullDate)
                  }
                >

                  <span className="day-number">
                    {day}
                  </span>

                  {(schedule[fullDate] || [])
                    .slice(0, 2)
                    .map((item, index) => (

                      <div
                        key={index}
                        className="calendar-event"
                      >
                        {item}
                      </div>

                    ))}

                </div>

              );
            })}

          </div>

        </div>

        <div className="right-panel">

          <h2>
            {selectedDate}
          </h2>

          <hr />

          <h4>공부 일정 추가</h4>

          <div className="schedule-input">

            <input
              type="text"
              placeholder="공부 일정을 적어주세요."
              value={input}
              onChange={(e) =>
                setInput(e.target.value)
              }
            />

            <button onClick={addSchedule}>
              일정 추가
            </button>

          </div>

          <h4 className="schedule-title">
            공부 일정 확인
          </h4>

          <div className="schedule-list">

            {(schedule[selectedDate] || []).map(
              (item, index) => (

                <div
                  key={index}
                  className="schedule-item"
                >
                  {item}
                </div>

              )
            )}

          </div>

          <img
            src={character}
            alt="캐릭터"
            className="calendar-character"
          />

        </div>

      </div>

    </div>
  );
}

export default Calendar;