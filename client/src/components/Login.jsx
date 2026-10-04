import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import instance from "../API/axios";

function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

     // ✅ Add this line
  if (password.length < 6) {
    setError("Password must be at least 6 characters long");
    return;
  }
    try {
      const res = await instance.post("/auth/register", { name, email, password, role });
      const data = res.data;

      setSuccess("Account created successfully!");
      setTimeout(() => {
        navigate("/signin");
      }, 1500);

    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1><center>Get Started</center></h1>
        <br></br>
        <p><center>Create your Smart Campus account to begin.</center></p>

        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}
        {success && <p className="success-text">{success}</p>}

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Administrator</option>
          </select>

          <button type="submit" className="hero-btn" style={{ width: "100%", marginTop: "15px" }}>
            Create Account
          </button>
        </form>

        <p className="auth-switch">
          Already have an account?{" "}
          <span onClick={() => navigate("/signin")}>Sign In</span>
        </p>

        <button className="hero-btn outline" style={{ marginTop: "15px" }} onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Login;