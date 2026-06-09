import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import logo from "../assets/logo.png";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">

      <div
  className="logo"
  onClick={() => navigate("/")}
>
  <img src={logo} alt="로고" />
</div>

      <button onClick={() => navigate("/timer")}>
        타이머
      </button>

      <button onClick={() => navigate("/checklist")}>
        체크리스트
      </button>

      <button onClick={() => navigate("/dday")}>
        D-Day
      </button>

      <button onClick={() => navigate("/calendar")}>
        캘린더
      </button>

      <button onClick={() => navigate("/routine")}>
        나의 루틴
      </button>

    </div>
  );
}

export default Sidebar;