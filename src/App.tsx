import Home from "./component/Home";
import Profile from "./component/Profile";
import SethingsPage from "./component/SethingsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<SethingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
