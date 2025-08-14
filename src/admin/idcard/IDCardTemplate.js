// src/admin/idcard/IDCardTemplate.js
import React from 'react';

function IDCardTemplate({ student }) {
  // Get current academic year
  const currentYear = new Date().getFullYear();
  const nextYear = currentYear + 1;
  const academicYear = `${currentYear}-${nextYear}`;
  
  // Calculate expiry date (1 year from now)
  const expiryDate = new Date();
  expiryDate.setFullYear(expiryDate.getFullYear() + 1);
  const formattedExpiryDate = expiryDate.toLocaleDateString();

  return (
    <div className="id-card-template">
      <div className="id-card-front">
        <div className="id-card-header">
          <div className="id-card-logo">
            <img src="/logo.png" alt="Logo" />
          </div>
          <div className="id-card-title">
            <h2>SUMMER TRAINING PROGRAM</h2>
            <p>Student Identity Card</p>
            <p className="academic-year">{academicYear}</p>
          </div>
        </div>
        
        <div className="id-card-body">
          <div className="id-card-photo">
            <img src={student.photo} alt={student.name} />
          </div>
          
          <div className="id-card-details">
            <div className="detail-row">
              <span className="label">Name:</span>
              <span className="value">{student.name}</span>
            </div>
            
            <div className="detail-row">
              <span className="label">Training ID:</span>
              <span className="value">{student.trainingId}</span>
            </div>
            
            <div className="detail-row">
              <span className="label">Domain:</span>
              <span className="value">{student.domain}</span>
            </div>
            
            <div className="detail-row">
              <span className="label">Batch:</span>
              <span className="value">{student.batch}</span>
            </div>
            
            <div className="detail-row">
              <span className="label">College:</span>
              <span className="value">{student.college}</span>
            </div>
          </div>
        </div>
        
        <div className="id-card-footer">
          <div className="signature">
            <div className="signature-line"></div>
            <p>Student Signature</p>
          </div>
          
          <div className="signature">
            <div className="signature-line"></div>
            <p>Director</p>
          </div>
        </div>
      </div>
      
      <div className="id-card-back">
        <div className="id-card-back-header">
          <h3>INSTRUCTIONS</h3>
        </div>
        
        <div className="id-card-back-content">
          <ol className="instructions-list">
            <li>This card is non-transferable and must be carried at all times during training.</li>
            <li>Report loss of card immediately to the training office.</li>
            <li>Card must be surrendered upon completion or termination of training.</li>
            <li>Valid until: {formattedExpiryDate}</li>
          </ol>
          
          <div className="contact-info">
            <h4>Contact Information</h4>
            <p>Training Office: +91 1234567890</p>
            <p>Email: training@example.com</p>
            <p>Website: www.example.com</p>
          </div>
        </div>
        
        <div className="id-card-back-footer">
          <div className="official-stamp-area">
            <p>Official Stamp</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IDCardTemplate;
