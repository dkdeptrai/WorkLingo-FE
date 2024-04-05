import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Authentication from "./Authentication";
import LandingPage from "./LandingPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home/HomePage";

function App() {
  return (
    <div className="h-auto flex flex-col">
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/login" Component={Authentication} />
          <Route path="/homepage" Component={HomePage} />
          <Route path="/" Component={LandingPage} />
        </Routes>
      </Router>
      <div className="footer my-4 justify-self-end text-secondary-text-color">
        WorkWise All Right Reserved,2024
      </div>
    </div>
  );
}

export default App;
