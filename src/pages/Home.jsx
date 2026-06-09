import Sidebar from "../components/Sidebar";
import PomodoroTimer from "../components/PomodoroTimer";
import DdayCard from "../components/DdayCard";
import GoalList from "../components/GoalList";

import character from "../assets/character.png";
import character2 from "../assets/character2.png";

import "./Home.css";

function Home() {
  return (
    <div className="container">
      <Sidebar />

      <div className="content">

        <div className="timer-box">
          <PomodoroTimer />
        </div>

        <div className="bottom">

          <div className="card dday-card">
            <DdayCard />

            <img
              src={character}
              alt="캐릭터"
              className="card-character"
            />
          </div>

          <div className="card goal-card">
            <GoalList />

            <img
              src={character2}
              alt="캐릭터"
              className="card-character"
            />
          </div>

        </div>

      </div>
    </div>
  );
}

export default Home;