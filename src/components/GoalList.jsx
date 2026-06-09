import { useState } from "react";
import "./GoalList.css";
function GoalList() {
  const [input, setInput] = useState("");
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    if (!input.trim()) return;

    setGoals([
      ...goals,
      {
        id: Date.now(),
        text: input
      }
    ]);

    setInput("");
  };

  const completeGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div>

      <div className="goal-input">

        <input
          type="text"
          placeholder="할 일 입력"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={addGoal}>
          +
        </button>

      </div>

      <div className="goal-list">

        {goals.map((goal) => (

          <div
            key={goal.id}
            className="goal-item"
          >

            <button
              className="check-btn"
              onClick={() => completeGoal(goal.id)}
            >
              ○
            </button>

            <span>{goal.text}</span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default GoalList;