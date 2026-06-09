import { useState } from "react";

function DdayCard() {

  const [goals, setGoals] = useState([
    "",
    "",
    ""
  ]);

  const updateGoal = (index, value) => {

    const newGoals = [...goals];
    newGoals[index] = value;

    setGoals(newGoals);
  };

  const clearGoal = (index) => {

    const newGoals = [...goals];
    newGoals[index] = "";

    setGoals(newGoals);
  };

  return (
    <div>

      <h2>오늘의 마음가짐 목표</h2>

      {goals.map((goal, index) => (

        <div
          key={index}
          className="today-goal-item"
        >

          <button
            className="goal-check"
            onClick={() => clearGoal(index)}
          >
            ✓
          </button>

          <input
            type="text"
            placeholder={`목표 ${index + 1}`}
            value={goal}
            onChange={(e) =>
              updateGoal(
                index,
                e.target.value
              )
            }
          />

        </div>

      ))}

    </div>
  );
}

export default DdayCard;