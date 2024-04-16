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
      </div>
    </AuthProvider>
  );
}

export default App;
