// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Authentication from "./pages/Authentication";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar";
import HomePage from "./pages/Home/HomePage";
import FlashcardLearning from "./FlashcardLearning";
import LessonsPage from "./pages/LessonsPage";
import Profile from "./pages/Profile/Profile";
import CreateLessonPage from "./pages/CreateLessonPage";

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
                  <LessonsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/topics/:id"
              element={
                <ProtectedRoute>
                  <LessonsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/lessons/:id"
              element={
                <ProtectedRoute>
                  <FlashcardLearning />
                </ProtectedRoute>
              }
            />
            <Route
              path="/lessons/create"
              element={
                <ProtectedRoute>
                  <CreateLessonPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
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
