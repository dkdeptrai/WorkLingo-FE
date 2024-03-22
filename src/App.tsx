import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Authentication from "./Authentication";
import LandingPage from "./LandingPage";
import NavBar from "./components/NavBar";
import FlashcardLearning from "./FlashcardLearning";

function App() {
  return (
    <div className="h-full flex flex-col">
      <Router>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path="/login" Component={Authentication} />
          <Route path="/" Component={LandingPage} />
          <Route path="/topics" Component={FlashcardLearning} />
        </Routes>
      </Router>
      <div className="footer mt-auto justify-self-end text-secondary-text-color">
        WorkWise All Right Reserved,2024
      </div>
    </div>
  );
}

export default App;
