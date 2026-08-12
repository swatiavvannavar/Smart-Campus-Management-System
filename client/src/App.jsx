import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import StudentDashboard from "./components/StudentDashboard";
import FacultyDashboard from "./components/FacultyDashboard";
import AdminDashboard from "./components/AdminDashboard";
import StudentPage from "./components/StudentPage";
import FacultyPage from "./components/FacultyPage";
import AdminPage from "./components/AdminPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Preview pages — no login needed, shown from "Explore Now" */}
        <Route path="/student-preview" element={<StudentPage />} />
        <Route path="/faculty-preview" element={<FacultyPage />} />
        <Route path="/admin-preview" element={<AdminPage />} />

        {/* Real dashboards — shown after login */}
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/faculty" element={<FacultyDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;