import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function WelcomePage() {
  const [explore, setExplore] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  const renderContent = () => {
    switch (activeSection) {
      case "features":
        return (
          <section className="info-section">
            <h2>Platform Features</h2>
            <div className="info-grid">
              <div className="info-card">
                <h3>🔐 Role-Based Access</h3>
                <p>Separate portals for students, faculty, and administrators with tailored permissions.</p>
              </div>
              <div className="info-card">
                <h3>📅 Smart Scheduling</h3>
                <p>Automated timetables, attendance tracking, and class management.</p>
              </div>
              <div className="info-card">
                <h3>📊 Real-Time Analytics</h3>
                <p>Track academic performance, attendance trends, and campus resource usage.</p>
              </div>
              <div className="info-card">
                <h3>🔔 Instant Notifications</h3>
                <p>Stay updated with announcements, deadlines, and campus events.</p>
              </div>
            </div>
          </section>
        );

      case "usecases":
        return (
          <section className="info-section">
            <h2>Use Cases</h2>
            <div className="info-grid">
              <div className="info-card">
                <h3>🎓 Universities</h3>
                <p>Manage multi-department course structures and large student bodies efficiently.</p>
              </div>
              <div className="info-card">
                <h3>🏫 Colleges</h3>
                <p>Simplify attendance, grading, and faculty coordination across campuses.</p>
              </div>
              <div className="info-card">
                <h3>🏢 Training Institutes</h3>
                <p>Handle batch schedules, certifications, and student progress tracking.</p>
              </div>
            </div>
          </section>
        );

      case "contact":
        return (
          <section className="info-section">
            <h2>Contact Us</h2>
            <div className="contact-box">
              <p>📧 Email: Klebca@smartcampus.com</p>
              <p>📞 Phone: +91 98765 43210</p>
              <p>📍 Address: KLE BCA COLLEGE VIDYANAGAR HUBLI, India</p>
            </div>
          </section>
        );

      default: // home
        return (
          <header className="hero">
            <h1>Digital Campus Management System</h1>
            <p>
              Connect students, faculty, and administration through intelligent
              systems that power faster, smarter campus growth.
            </p>
            <button className="hero-btn" onClick={() => setExplore(true)}>
              Explore Now
            </button>
          </header>
        );
    }
  };

  return (
    <div className="welcome-container">
      {!explore ? (
        <>
          {/* Navigation */}
          <nav className="navbar">
            <div className="logo">Smart Campus</div>

            <ul className="nav-links">
              <li
                className={activeSection === "home" ? "active" : ""}
                onClick={() => setActiveSection("home")}
              >
                Home
              </li>
              <li
                className={activeSection === "features" ? "active" : ""}
                onClick={() => setActiveSection("features")}
              >
                Features
              </li>
              <li
                className={activeSection === "usecases" ? "active" : ""}
                onClick={() => setActiveSection("usecases")}
              >
                Use Cases
              </li>
              <li
                className={activeSection === "contact" ? "active" : ""}
                onClick={() => setActiveSection("contact")}
              >
                Contact
              </li>
            </ul>

            <div className="nav-actions">
              <button className="nav-btn" onClick={() => navigate("/signin")}>
                Sign In
              </button>
              <button className="nav-btn primary" onClick={() => navigate("/login")}>
                Get Started
              </button>
            </div>
          </nav>

          {renderContent()}

          <footer className="footer">
            <small>© 2026 Smart Campus Management System</small>
          </footer>
        </>
      ) : (
        <div className="features-page">
          <h1 className="portal-title">Choose Your Portal</h1>

          <section className="features">
            <div className="feature-card student">
              <h2>📚 Student Portal</h2>
              <p>Access courses, grades, and campus updates instantly.</p>
              <button className="card-btn" onClick={() => navigate("/student-preview")}>
                Go to Student
              </button>
            </div>

            <div className="feature-card faculty">
              <h2>👩‍🏫 Faculty Dashboard</h2>
              <p>Manage classes, schedules, and student progress with ease.</p>
              <button className="card-btn" onClick={() => navigate("/faculty-preview")}>
                Go to Faculty
              </button>
            </div>

            <div className="feature-card admin">
              <h2>🏛 Administration</h2>
              <p>Oversee campus operations, facilities, and resources.</p>
              <button className="card-btn" onClick={() => navigate("/admin-preview")}>
                Go to Admin
              </button>
            </div>
          </section>

          <button
            className="hero-btn"
            style={{ marginTop: "30px" }}
            onClick={() => setExplore(false)}
          >
            ← Back
          </button>
        </div>
      )}
    </div>
  );
}

export default WelcomePage;