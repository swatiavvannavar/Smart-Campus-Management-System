import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";

const role = {
  label: "Faculty",
  initials: "FA",
  accent: "faculty",
  navItems: [
    { key: "overview", label: "Overview", icon: "🏠" },
    { key: "classes", label: "My Classes", icon: "🧑‍🏫" },
    { key: "attendance", label: "Mark Attendance", icon: "🗓️" },
    { key: "grading", label: "Grading", icon: "📝" },
    { key: "announcements", label: "Announcements", icon: "📣" },
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

function FacultyDashboard() {
  const [activeKey, setActiveKey] = useState("overview");

  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const currentUser = {
    name: storedUser.name || "Faculty",
    subtitle: storedUser.email || "",
    initials: getInitials(storedUser.name),
  };

  return (
    <DashboardLayout
      role={role}
      activeKey={activeKey}
      onNavClick={setActiveKey}
      user={currentUser}
    >
      <p className="dash-page-title">Good morning, {currentUser.name}</p>
      <p className="dash-page-subtitle">You have 2 classes and 14 submissions to review today.</p>

      <div className="dash-pulse">
        <span className="dash-pulse-dot" />
        <span className="dash-pulse-text">
          <b>Campus Pulse:</b> DBMS (Sem 4) starts in <b>45 min</b> · 14 lab reports awaiting grading
        </span>
      </div>

      <div className="dash-stat-grid">
        <div className="dash-stat-card">
          <p className="dash-stat-label">Classes Today</p>
          <p className="dash-stat-value">2</p>
        </div>
        <div className="dash-stat-card">
          <p className="dash-stat-label">Students Taught</p>
          <p className="dash-stat-value">186</p>
        </div>
        <div className="dash-stat-card">
          <p className="dash-stat-label">Pending Grading</p>
          <p className="dash-stat-value">14</p>
          <p className="dash-stat-trend down">Due by Friday</p>
        </div>
        <div className="dash-stat-card">
          <p className="dash-stat-label">Avg. Class Attendance</p>
          <p className="dash-stat-value">89%</p>
          <p className="dash-stat-trend up">▲ 2% this week</p>
        </div>
      </div>

      <div className="dash-grid-2">
        <div className="dash-panel">
          <p className="dash-panel-title">Today's Schedule</p>
          <table className="dash-table">
            <thead>
              <tr><th>Time</th><th>Class</th><th>Room</th><th>Status</th></tr>
            </thead>
            <tbody>
              {[
                ["9:30 AM", "DBMS — Sem 4, Section A", "Lab 2", "good", "Upcoming"],
                ["11:30 AM", "DBMS — Sem 4, Section B", "Room 118", "warn", "Prep Pending"],
                ["2:00 PM", "Office Hours", "Faculty Cabin 3", "good", "Open"],
              ].map(([time, cls, room, tone, status]) => (
                <tr key={cls}>
                  <td>{time}</td>
                  <td>{cls}</td>
                  <td>{room}</td>
                  <td><span className={`dash-badge ${tone}`}>{status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="dash-panel">
          <p className="dash-panel-title">Submissions to Review</p>
          <div className="dash-list-item">
            <div>
              <p className="dash-list-title">DBMS Lab 3 — Section A</p>
              <p className="dash-list-sub">38 of 42 submitted</p>
            </div>
            <span className="dash-badge warn">Review</span>
          </div>
          <div className="dash-list-item">
            <div>
              <p className="dash-list-title">ER Diagram Assignment</p>
              <p className="dash-list-sub">40 of 40 submitted</p>
            </div>
            <span className="dash-badge good">Ready</span>
          </div>
          <div className="dash-list-item">
            <div>
              <p className="dash-list-title">Mid-Term Answer Scripts</p>
              <p className="dash-list-sub">Grading in progress</p>
            </div>
            <span className="dash-badge bad">Overdue</span>
          </div>
          <button className="dash-btn" style={{ marginTop: 12, width: "100%" }}>
            Open Grading Queue
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default FacultyDashboard;