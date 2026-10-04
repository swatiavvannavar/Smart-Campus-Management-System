import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import instance from "../API/axios"; 

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
     
     const res = await instance.post("/auth/login", { email, password });
     const data = res.data;
     

      // Save the logged-in user's real info so dashboards can read it
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      const role = data.user.role;
      if (role === "student") navigate("/student");
      else if (role === "faculty") navigate("/faculty");
      else if (role === "admin") navigate("/admin");
      else navigate("/");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1><center>Sign In</center></h1>
        <br></br>
        <p><center>Welcome back to Smart Campus</center></p>

        {error && (
          <p style={{ color: "#dc2626", fontSize: "13.5px", marginBottom: "10px" }}>
            {error}
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

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <p style={{ textAlign: "right", marginTop: "8px" }}>
            <span
              style={{ color: "#38bdf8", cursor: "pointer", fontSize: "13px" }}
              onClick={() => navigate("/forgot-password")}
            >
             <center> Forgot Password?</center>
            </span>
          </p>

          <button type="submit" className="hero-btn" style={{ width: "100%", marginTop: "15px" }}>
            Sign In
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account?{" "}
          <span onClick={() => navigate("/login")}>Create one</span>
        </p>

        <button className="hero-btn outline" style={{ marginTop: "15px" }} onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default SignIn;