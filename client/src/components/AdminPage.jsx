import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function AdminPage() {
  const navigate = useNavigate();

  return (
    <div className="portal-page">
      <h1>🏛 Administration Dashboard</h1><br></br>
      <p>Oversee campus operations, facilities, and resources.</p><br></br>

      {/* Add real admin features below, e.g. cards/stats */}
      <div className="admin-sections">
        <div className="admin-card">
          <h3>👥 User Management</h3>
          <p>Manage student, faculty, and staff accounts.</p>
        </div>

        <div className="admin-card">
          <h3>🏢 Facilities</h3>
          <p>Track rooms, labs, and campus infrastructure.</p>
        </div>

        <div className="admin-card">
          <h3>📊 Reports</h3>
          <p>View enrollment, attendance, and performance analytics.</p>
        </div>
      </div>

      <button className="hero-btn" style={{ marginTop: "30px" }} onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
}

export default AdminPage;