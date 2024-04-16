// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Authentication from "./Authentication";
import LandingPage from "./LandingPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home/HomePage";
import FlashcardLearning from "./FlashcardLearning";
import TopicsPage from "./TopicsPage";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <AuthProvider>
      <div className="h-full flex flex-col ">
        <Router>
          <div>
            <NavBar />
          </div>
          <Routes>
            <Route path="/login" element={<Authentication />} />
            <Route
              path="/homepage"
              element={
                <ProtectedRoute>
                  <HomePage />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/topics"
              element={
                <ProtectedRoute>
                  <TopicsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/quiz"
              element={
                <ProtectedRoute>
                  <FlashcardLearning />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
        <div className="footer mt-auto justify-self-end text-secondary-text-color self-center">
          WorkWise All Right Reserved,2024
        </div>

        <Routes>
          <Route path="/login" Component={Authentication} />
          <Route path="/homepage" Component={HomePage} />
          <Route path="/" Component={LandingPage} />
          <Route path="/topics" Component={TopicsPage} />
          <Route path="/quiz" Component={FlashcardLearning} />
          <Route path="/profile" Component={Profile} />
        </Routes>
      </Router>
      <div className="footer mt-auto justify-self-end text-secondary-text-color">
        WorkWise All Right Reserved,2024

      </div>
    </AuthProvider>
  );
}

export default App;
