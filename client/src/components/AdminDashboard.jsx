import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";

const role = {
  label: "Administration",
  initials: "AD",
  accent: "admin",
  navItems: [
    { key: "overview", label: "Overview", icon: "🏠" },
    { key: "students", label: "Students", icon: "🎓" },
    { key: "faculty", label: "Faculty", icon: "🧑‍🏫" },
    { key: "departments", label: "Departments", icon: "🏛️" },
    { key: "reports", label: "Reports", icon: "📊" },
    { key: "settings", label: "Settings", icon: "⚙️" },
  ],
};

function getInitials(name) {
  if (!name) return "U";
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function AdminDashboard() {
  const [activeKey, setActiveKey] = useState("overview");

  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const currentUser = {
    name: storedUser.name || "Administrator",
    subtitle: storedUser.email || "Campus Administrator",
    initials: getInitials(storedUser.name),
  };

  return (
    <DashboardLayout
      role={role}
      activeKey={activeKey}
      onNavClick={setActiveKey}
      user={currentUser}
    >
      <p className="dash-page-title">Welcome, {currentUser.name}</p>
      <p className="dash-page-subtitle">A live snapshot of everything happening across Smart Campus.</p>

      <div className="dash-pulse">
        <span className="dash-pulse-dot" />
        <span className="dash-pulse-text">
          <b>Campus Pulse:</b> 3 faculty leave requests pending · Hostel occupancy at <b>94%</b>
        </span>
      </div>

      <div className="dash-stat-grid">
        <div className="dash-stat-card">
          <p className="dash-stat-label">Total Students</p>
          <p className="dash-stat-value">3,240</p>
          <p className="dash-stat-trend up">▲ 58 new admissions</p>
        </div>
        <div className="dash-stat-card">
          <p className="dash-stat-label">Total Faculty</p>
          <p className="dash-stat-value">214</p>
        </div>
        <div className="dash-stat-card">
          <p className="dash-stat-label">Active Departments</p>
          <p className="dash-stat-value">12</p>
        </div>
        <div className="dash-stat-card">
          <p className="dash-stat-label">Avg. Campus Attendance</p>
          <p className="dash-stat-value">91%</p>
          <p className="dash-stat-trend up">▲ 1.4% this month</p>
        </div>
      </div>

      <div className="dash-grid-2">
        <div className="dash-panel">
          <p className="dash-panel-title">Department Performance</p>
          <table className="dash-table">
            <thead>
              <tr><th>Department</th><th>Students</th><th>Avg. Attendance</th><th>Status</th></tr>
            </thead>
            <tbody>
              {[
                ["Computer Science (BCA)", 620, 92, "good"],
                ["Commerce (BCom)", 540, 85, "good"],
                ["Business Admin (BBA)", 410, 74, "warn"],
                ["Electronics", 300, 58, "bad"],
              ].map(([dept, count, pct, tone]) => (
                <tr key={dept}>
                  <td>{dept}</td>
                  <td>{count}</td>
                  <td style={{ width: 140 }}>
                    <div className="dash-progress-track">
                      <div className="dash-progress-fill" style={{ width: `${pct}%` }} />
                    </div>
                  </td>
                  <td><span className={`dash-badge ${tone}`}>{pct}%</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dash-panel">
          <p className="dash-panel-title">Pending Approvals</p>
          <div className="dash-list-item">
            <div>
              <p className="dash-list-title">Faculty Leave — Prof. K. Iyer</p>
              <p className="dash-list-sub">Aug 12–14</p>
            </div>
            <span className="dash-badge warn">Pending</span>
          </div>
          <div className="dash-list-item">
            <div>
              <p className="dash-list-title">New Course Proposal</p>
              <p className="dash-list-sub">Cloud Computing Elective</p>
            </div>
            <span className="dash-badge warn">Pending</span>
          </div>
          <div className="dash-list-item">
            <div>
              <p className="dash-list-title">Lab Equipment Purchase</p>
              <p className="dash-list-sub">₹4,80,000 · Electronics Dept.</p>
            </div>
            <span className="dash-badge bad">Overdue</span>
          </div>
          <button className="dash-btn" style={{ marginTop: 12, width: "100%" }}>
            Review All Requests
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AdminDashboard;