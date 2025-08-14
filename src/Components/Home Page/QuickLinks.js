// components/QuickLinks.js
import React from 'react';
import {
  FaCalendarAlt,
  FaDownload,
  FaEnvelope,
  FaBook,
  FaUpload,
  FaQuestionCircle,
  FaMapMarkerAlt,
  FaClipboardList,
  FaUserCheck,
  FaRegCommentDots
} from 'react-icons/fa';

const links = [
  { icon: <FaCalendarAlt />, text: 'Training Schedule', url: '/schedule' },
  { icon: <FaUserCheck />, text: 'Apply for Training', url: '/login' },
  { icon: <FaBook />, text: 'Training Guidelines', url: '/guidelines' },
  { icon: <FaClipboardList />, text: 'Study Materials', url: '/materials' },
  { icon: <FaUpload />, text: 'Assignment Submission', url: '/submit-assignment' },
  { icon: <FaDownload />, text: 'Certificate Download', url: '/certificate' },
  { icon: <FaEnvelope />, text: 'Contact Coordinator', url: '/contact' },
  { icon: <FaQuestionCircle />, text: 'FAQs', url: '/faqs' },
  { icon: <FaRegCommentDots />, text: 'Feedback Form', url: '/feedback' },
  { icon: <FaMapMarkerAlt />, text: 'Training Location Map', url: '/map' },
];

const QuickLinks = () => {
  return (
    <section className="quick-links-section">
      <h2 className="quick-links-title">Quick Links for Students</h2>
      <div className="quick-links-grid">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="quick-link-card">
            <span className="quick-link-icon">{link.icon}</span>
            <span className="quick-link-text">{link.text}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default QuickLinks;
