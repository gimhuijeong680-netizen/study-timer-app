import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Timer from "./pages/Timer";
import Checklist from "./pages/Checklist";
import Dday from "./pages/Dday";
import Calendar from "./pages/Calendar";
import Routine from "./pages/Routine";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/checklist" element={<Checklist />} />
        <Route path="/dday" element={<Dday />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/routine" element={<Routine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;