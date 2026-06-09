import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="sidebar">
      {/* 로고 */}
      <Link to="/" className="logo">
        🐰 StudyOn
      </Link>

      {/* 메뉴 */}
      <nav>
        <Link to="/" className="menu">
          홈
        </Link>

        <Link to="/timer" className="menu">
          타이머
        </Link>

        <Link to="/checklist" className="menu">
          체크리스트
        </Link>

        <Link to="/dday" className="menu">
          D-day
        </Link>

        <Link to="/record" className="menu">
          기록
        </Link>

        <Link to="/note" className="menu">
          오답노트
        </Link>
      </nav>
    </div>
  );
}

export default Header;