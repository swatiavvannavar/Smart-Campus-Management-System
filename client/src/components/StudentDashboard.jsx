import React, { useState } from "react";
import DashboardLayout from "./DashboardLayout";

const role = {
  label: "Student",
  initials: "ST",
  accent: "student",
  navItems: [
    { key: "overview", label: "Overview", icon: "🏠" },
    { key: "courses", label: "My Courses", icon: "📚" },
    { key: "attendance", label: "Attendance", icon: "🗓️" },
    { key: "grades", label: "Grades", icon: "📈" },
    { key: "notices", label: "Notices", icon: "🔔" },
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

function StudentDashboard() {
  const [activeKey, setActiveKey] = useState("overview");

  const storedUser = JSON.parse(localStorage.getItem("user")) || {};
  const currentUser = {
    name: storedUser.name || "Student",
    subtitle: storedUser.email || "",
    initials: getInitials(storedUser.name),
  };
  const firstName = currentUser.name.split(" ")[0];

  return (
    <DashboardLayout
      role={role}
      activeKey={activeKey}
      onNavClick={setActiveKey}
      user={currentUser}
    >
      <p className="dash-page-title">Welcome back, {firstName} 👋</p>
      <p className="dash-page-subtitle">Here's what's happening in your academic world today.</p>

      <div className="dash-pulse">
        <span className="dash-pulse-dot" />
        <span className="dash-pulse-text">
          <b>Campus Pulse:</b> Assignment "DBMS Lab 3" due in <b>2 days</b> · Attendance this week: <b>92%</b>
        </span>
      </div>

      <div className="dash-stat-grid">
        <div className="dash-stat-card">
          <p className="dash-stat-label">Overall Attendance</p>
          <p className="dash-stat-value">87%</p>
          <p className="dash-stat-trend up">▲ 3% this month</p>
        </div>
        <div className="dash-stat-card">
          <p className="dash-stat-label">Current CGPA</p>
          <p className="dash-stat-value">8.42</p>
          <p className="dash-stat-trend up">▲ 0.12 last semester</p>
        </div>
        <div className="dash-stat-card">
          <p className="dash-stat-label">Pending Assignments</p>
          <p className="dash-stat-value">3</p>
          <p className="dash-stat-trend down">1 due this week</p>
        </div>
        <div className="dash-stat-card">
          <p className="dash-stat-label">Enrolled Courses</p>
          <p className="dash-stat-value">6</p>
        </div>
      </div>

      <div className="dash-grid-2">
        <div className="dash-panel">
          <p className="dash-panel-title">My Courses</p>
          <table className="dash-table">
            <thead>
              <tr><th>Course</th><th>Faculty</th><th>Progress</th><th>Status</th></tr>
            </thead>
            <tbody>
              {[
                ["Database Management Systems", "Dr. R. Sharma", 78, "good"],
                ["Operating Systems", "Prof. K. Iyer", 62, "warn"],
                ["Web Technologies", "Dr. M. Fernandes", 91, "good"],
                ["Computer Networks", "Prof. S. Nair", 45, "bad"],
              ].map(([course, fac, pct, tone]) => (
                <tr key={course}>
                  <td>{course}</td>
                  <td>{fac}</td>
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
          <p className="dash-panel-title">Upcoming</p>
          <div className="dash-list-item">
            <div>
              <p className="dash-list-title">DBMS Lab 3 Submission</p>
              <p className="dash-list-sub">Due Aug 10 · 11:59 PM</p>
            </div>
            <span className="dash-badge warn">Due Soon</span>
          </div>
          <div className="dash-list-item">
            <div>
              <p className="dash-list-title">OS Mid-Term Exam</p>
              <p className="dash-list-sub">Aug 14 · Room 204</p>
            </div>
            <span className="dash-badge good">Scheduled</span>
          </div>
          <div className="dash-list-item">
            <div>
              <p className="dash-list-title">Guest Lecture: Cloud Computing</p>
              <p className="dash-list-sub">Aug 16 · Auditorium</p>
            </div>
            <span className="dash-badge good">Event</span>
          </div>
          <button className="dash-btn ghost" style={{ marginTop: 12, width: "100%" }}>
            View Full Timetable
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StudentDashboard;