import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      console.log(formData);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <motion.div
        className="contact-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* FORM SECTION */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Send a Message</h2>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              className={formErrors.name ? 'error' : ''}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            {formErrors.name && <p className="error-message">{formErrors.name}</p>}
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              className={formErrors.email ? 'error' : ''}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              rows="5"
              className={formErrors.message ? 'error' : ''}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            {formErrors.message && <p className="error-message">{formErrors.message}</p>}
          </div>
          <button type="submit">Submit</button>
        </motion.form>

        {/* CONTACT INFO */}
        <motion.div
          className="other-details"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2>Contact Info</h2>
          <p><strong>Address:</strong> STC Campus, Charbagh, Lucknow - 226004</p>
          <p><strong>Email:</strong> stccharbagh@gmail.com</p>
          <p><strong>Phone:</strong> +91-522-1234567</p>
        </motion.div>
      </motion.div>

      {/* MAP SECTION */}
      <motion.div
        className="map-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Find Us Here</h2>
        <div className="map-container">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.736132778264!2d80.91607991504441!3d26.837071983157523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd5980ddc23d%3A0xc067fdfba3150e15!2sCharbagh%2C%20Lucknow%2C%20Uttar%20Pradesh%20226004!5e0!3m2!1sen!2sin!4v1625733567639!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
