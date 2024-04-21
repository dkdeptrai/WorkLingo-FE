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
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <div className="h-screen">
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
                  // <ProtectedRoute>
                  <HomePage />
                  // </ProtectedRoute>
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
              <Route path="/search" element={<SearchResultsPage />} />
              <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
          </Router>
          <div className="footer mt-auto justify-self-end text-secondary-text-color self-center">
            WorkWise All Right Reserved,2024
          </div>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
