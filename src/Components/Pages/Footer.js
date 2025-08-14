import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Logo & About */}
        <div className="footer-section">
          <h2 className="footer-logo">Indian Railway Portal</h2>
          <p className="footer-text">
            This portal provides centralized access to all Railway Summer Training programs, notices, and important updates for students and institutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/notice">Notice Board</Link></li>
            <li><Link to="/course-modules">Course Modules</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">Indian Railways HQ</p>
          <p className="footer-text">New Delhi, India</p>
          <p className="footer-text">Email: support@indianrailway.in</p>
          <p className="footer-text">Phone: +91 12345 67890</p>
        </div>

        {/* Social Media */}
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Indian Railway Summer Training Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
