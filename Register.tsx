// src/components/Register.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/styles.css";
import contactData from "../data/contact.json";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Get existing users from localStorage or empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username already exists
    const userExists = existingUsers.find((u) => u.username === username);
    if (userExists) {
      setError("Username already exists");
      return;
    }

    // Add new user to localStorage
    const newUser = { username, password };
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setSuccess("Registration successful! Redirecting to login...");
    setError("");

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="page-container">
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Landing</Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Sign Up</Link></li>
        </ul>
      </nav>

      <div className="login-container">
        <div className="login-card">
          <h2>Register</h2>
          <p>Create your account</p>

          {error && <div className="error-message">{error}</div>}
          {success && <div className="success-message">{success}</div>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
            <button type="submit" className="login-btn">Register</button>
          </form>

          <p className="register-link">
            Already have an account?{" "}
            <span onClick={() => navigate("/login")} className="link-text">
              Login
            </span>
          </p>
        </div>
      </div>

      {/* Footer same as before */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Landing</Link></li>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: {contactData.email}</p>
            <p>Phone: {contactData.phone}</p>
            <p>Support: {contactData.support}</p>
          </div>

          <div className="footer-section">
            <h3>Location</h3>
            <p>{contactData.address}</p>
            <p>{contactData.city}, {contactData.zipcode}</p>
            <p>{contactData.country}</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Job Application Tracker. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Register;
