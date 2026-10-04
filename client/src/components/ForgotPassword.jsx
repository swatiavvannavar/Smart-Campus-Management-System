import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, newPassword }),
      });
      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Could not reset password");
        return;
      }

      setSuccess("Password updated!");
      setTimeout(() => navigate("/signin"), 1500);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1 className="reset-title">Reset Password</h1>
        <br></br>
        <p>Enter your account email and choose a new password.</p>

        {error && (
          <p style={{ color: "#dc2626", fontSize: "13.5px", marginBottom: "10px" }}>
            {error}
          </p>
        )}
        {success && (
          <p style={{ color: "#22c55e", fontSize: "13.5px", marginBottom: "10px" }}>
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <label>Confirm New Password</label>
          <input
            type="password"
            placeholder="Re-enter new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="hero-btn" style={{ width: "100%", marginTop: "15px" }}>
            Reset Password
          </button>
        </form>

        <p className="auth-switch">
          Remembered your password?{" "}
          <span onClick={() => navigate("/signin")}>Sign In</span>
        </p>

        <button className="hero-btn outline" style={{ marginTop: "15px" }} onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;