import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import contactData from "../data/contact.json";

const Home = () => {

  const [contact, setContact] = useState({});

  useEffect(() => {
    setContact(contactData);
  }, []);



  return (
    <div className="home-container">
      { }
      <nav className="navbar">
        <ul className="nav-links">
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/about">About</Link> </li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="#services">Track</a></li>
          <li><Link to="/Login">Login </Link></li>
          <li><Link to="/login">About</Link></li>
          <li><Link to="/login">Sign-up</Link></li>
        </ul>
      </nav>
      { }
      <div className="header">

        <div className="header-content">
          { }

          <h1 className="content">
            <p className="slogan">Job Application Tracker</p>
            <strong style={{ color: 'red' }}>Apply</strong>,{' '}
            <strong style={{ color: 'blue' }}>Track</strong>,{' '}
            <strong style={{ color: 'yellow' }}>And manage</strong> <br />
            <strong style={{ color: 'black' }}>Your Job Hunting</strong>

          </h1>

          { }

          <img
            src="/jobss.webp"
            alt="Job Tracker"
            className="header-image"
          />
        </div>

      </div>
      <p className="intro">
        Keep all your job applications, deadlines, and interviews organized in one place so you can focus on landing your next opportunity.
      </p>
      <h2 className="choose">
        Why Choose Our Free Job Application Tracker.
      </h2>
      <p className="description">
        Stay Connected,Organized and get Job offers faster of your desired Job
      </p>
      <div className="stats-row">
        <div className="stat-item">
          <h2 className="tentimes">10x</h2>
          <p className="desc">Fast Job Search</p>
        </div>

        <div className="stat-item">
          <h2 className="tentimes">90%</h2>
          <p className="desc">Job Interviews</p>
        </div>

        <div className="stat-item">
          <h2 className="tentimes">100%</h2>
          <p className="desc">Job Application Tracked</p>
        </div>
      </div>
      <div className="feedback-section">
        <h2 className="feedback-title">What Job Seekers Say</h2>

        <div className="feedback-container">
          { }
          <div className="feedback-card">
            <div className="stars">
              ★★★★☆  { }
            </div>
            <p className="feedback-text">
              This tracker helped me stay organized and get my dream job faster!
            </p>
            <p className="feedback-author">Rorisang  S.</p>
          </div>

          { }
          <div className="feedback-card">
            <div className="stars">
              ★★★★★  { }
            </div>
            <p className="feedback-text">
              Simple, easy-to-use, and keeps all my job applications in one place.
            </p>
            <p className="feedback-author">Zwanga M.</p>
          </div>

          { }
          <div className="feedback-card">
            <div className="stars">
              ★★★★☆  { }
            </div>
            <p className="feedback-text">
              I love how it tracks interviews and deadlines automatically.
            </p>
            <p className="feedback-author">Mbali M.</p>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-container">

          { }
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Track</a></li>
              <li><a href="#applications">Job Application</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </div>

          { }
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Support: {contact.support}</p>
          </div>
          <div className="footer-section">
            <h3>Location</h3>
            <p>{contact.address}</p>
            <p>{contact.city}, {contact.zipcode}</p>
            <p>{contact.country}</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2025 Job Application Tracker. All Rights Reserved.</p>
        </div>
      </footer>


    </div>

  );
};

export default Home;
