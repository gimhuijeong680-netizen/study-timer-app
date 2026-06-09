import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Checklist.css";

function Checklist() {

  const [goals, setGoals] = useState([]);
  const [plans, setPlans] = useState([]);

  const addGoal = () => {
    setGoals([
      ...goals,
      {
        id: Date.now(),
        text: "",
        completed: false
      }
    ]);
  };

  const addPlan = () => {
    setPlans([
      ...plans,
      {
        id: Date.now(),
        text: "",
        completed: false
      }
    ]);
  };

  const updateGoal = (id, value) => {
    setGoals(
      goals.map(item =>
        item.id === id
          ? { ...item, text: value }
          : item
      )
    );
  };

  const updatePlan = (id, value) => {
    setPlans(
      plans.map(item =>
        item.id === id
          ? { ...item, text: value }
          : item
      )
    );
  };

  const completeGoal = (id) => {

    setGoals(
      goals.map(item =>
        item.id === id
          ? { ...item, completed: true }
          : item
      )
    );

    setTimeout(() => {
      setGoals(prev =>
        prev.filter(item => item.id !== id)
      );
    }, 1000);
  };

  const completePlan = (id) => {

    setPlans(
      plans.map(item =>
        item.id === id
          ? { ...item, completed: true }
          : item
      )
    );

    setTimeout(() => {
      setPlans(prev =>
        prev.filter(item => item.id !== id)
      );
    }, 1000);
  };

  return (
    <div className="check-page">

      <Sidebar />

      <div className="check-content">

        {/* 목표 */}

        <div className="check-box">

          <div className="box-header">
            <h3>목표</h3>

            <button onClick={addGoal}>
              + 새 목표
            </button>
          </div>

          {goals.map((goal) => (

            <div
              key={goal.id}
              className={`check-item ${
                goal.completed ? "completed" : ""
              }`}
            >

              <button
                className="circle-btn"
                onClick={() => completeGoal(goal.id)}
              >
                {goal.completed ? "✓" : ""}
              </button>

              <input
                type="text"
                value={goal.text}
                placeholder="목표를 적어주세요."
                onChange={(e) =>
                  updateGoal(goal.id, e.target.value)
                }
              />

            </div>

          ))}

        </div>

        {/* 계획 */}

        <div className="check-box">

          <div className="box-header">
            <h3>계획</h3>

            <button onClick={addPlan}>
              + 새 체크리스트
            </button>
          </div>

          {plans.map((plan) => (

            <div
              key={plan.id}
              className={`check-item ${
                plan.completed ? "completed" : ""
              }`}
            >

              <button
                className="circle-btn"
                onClick={() => completePlan(plan.id)}
              >
                {plan.completed ? "✓" : ""}
              </button>

              <input
                type="text"
                value={plan.text}
                placeholder="내용을 적어주세요."
                onChange={(e) =>
                  updatePlan(plan.id, e.target.value)
                }
              />

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Checklist;