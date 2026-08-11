import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function FacultyPage() {
  const navigate = useNavigate();

  return (
    <div className="portal-page">
      <h1>👩‍🏫 Faculty Dashboard</h1>
      <p>Manage classes, schedules, and student progress with ease.</p>

      <div className="admin-sections">
        <div className="admin-card">
          <h3>🏫 My Classes</h3>
          <p>View assigned classes, timings, and student lists.</p>
        </div>

        <div className="admin-card">
          <h3>✅ Attendance</h3>
          <p>Mark and track student attendance for each class.</p>
        </div>

        <div className="admin-card">
          <h3>📊 Grade Uploads</h3>
          <p>Upload and manage student marks and evaluations.</p>
        </div>
      </div>

      <button className="hero-btn" style={{ marginTop: "30px" }} onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
}

export default FacultyPage;