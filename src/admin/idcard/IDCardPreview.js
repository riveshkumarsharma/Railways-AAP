// src/admin/idcard/IDCardPreview.js
import React from 'react';
import IDCardTemplate from './IDCardTemplate';

function IDCardPreview({ student, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="id-card-preview-modal">
        <div className="modal-header">
          <h2>ID Card Preview</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <IDCardTemplate student={student} />
        </div>
        
        <div className="modal-footer">
          <button 
            className="download-btn"
            onClick={() => {
              // In a real app, this would download the ID card as PDF
              alert(`Downloading ID Card for ${student.name}`);
            }}
          >
            Download ID Card
          </button>
          <button 
            className="print-btn"
            onClick={() => {
              // In a real app, this would open the print dialog
              alert(`Printing ID Card for ${student.name}`);
            }}
          >
            Print ID Card
          </button>
          <button className="cancel-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default IDCardPreview;
