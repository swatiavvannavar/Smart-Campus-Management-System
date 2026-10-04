import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function StudentPage() {
  const navigate = useNavigate();

  return (
    <div className="portal-page">
      <h1>📚 Student Portal</h1><br></br>
      <p>Access your courses, grades, and campus updates instantly.</p><br></br>

      <div className="admin-sections">
        <div className="admin-card">
          <h3>📖 My Courses</h3>
          <p>View enrolled subjects, syllabus, and class schedules.</p>
        </div>

        <div className="admin-card">
          <h3>📝 Grades</h3>
          <p>Check your marks, GPA, and semester performance.</p>
        </div>

        <div className="admin-card">
          <h3>📢 Announcements</h3>
          <p>Stay updated with campus events and important notices.</p>
        </div>
      </div>

      <button className="hero-btn" style={{ marginTop: "30px" }} onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
}

export default StudentPage;