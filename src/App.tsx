import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" Component={Login} />
      </Routes>
    </Router>
  );
}

export default App;
