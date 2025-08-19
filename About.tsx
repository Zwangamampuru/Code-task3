import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import contactData from "../data/contact.json"; 

const About = () => {
  const [contact, setContact] = useState({});

  useEffect(() => {
    setContact(contactData);
  }, []);



  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="#services">Track</a></li>
          <li><a href="#applications">Job Application</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#sign-up">Sign-up</a></li>
        </ul>
      </nav>

      {/* About Header */}
      <div className="about-header">
        <h1 className="about-title">About Job Application Tracker</h1>
        <p className="about-subtitle">
          Helping job seekers stay organized, track applications, and land their dream job.
        </p>
      </div>

      {/* About content */}
      <div className="about-content">
        <div className="about-text">
          <p>
            Job Application Tracker is a modern platform designed to make your job hunt simple and efficient.
            Keep all your applications, deadlines, and interviews in one place. Stay organized, save time, 
            and increase your chances of landing your dream job.
          </p>
          <p>
            Our mission is to empower job seekers with tools to track, manage, and optimize their applications.
            With our intuitive dashboard, you can monitor your progress and never miss an important deadline again.
          </p>
        </div>

        <div className="about-image">
          <img src="/about.webp" alt="About Us" />
        </div>
      </div>

  {/* Team Section */}
<div className="team-section">
  <h2>Meet Our Team</h2>
  <div className="team-cards">
    <div className="team-card">
      <h3>Sekomane R.</h3>
      <p>Founder & CEO</p>
    </div>
    <div className="team-card">
      <h3>Rorisang S.</h3>
      <p>Lead Developer</p>
    </div>
    <div className="team-card">
      <h3>Rori S.</h3>
      <p>Product Manager</p>
    </div>
  </div>
</div>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><a href="#services">Track</a></li>
              <li><a href="#applications">Job Application</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </div>

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

export default About;
