import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Authentication from "./Authentication";
import LandingPage from "./LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Authentication} />
        <Route path="/" Component={LandingPage} />
      </Routes>
    </Router>
  );
}

export default App;
