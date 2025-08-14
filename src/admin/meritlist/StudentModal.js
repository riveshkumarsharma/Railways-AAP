// src/admin/meritlist/StudentModal.js
import React from 'react';

function StudentModal({ student, onClose, onSelect, onReject }) {
  return (
    <div className="modal-overlay">
      <div className="student-modal">
        <div className="modal-header">
          <h2>Student Application Details</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="student-details">
            <h3>{student.name}</h3>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>College:</strong> {student.college}</p>
            <p><strong>Branch:</strong> {student.branch}</p>
            <p><strong>Domain:</strong> {student.domain}</p>
            <p><strong>Status:</strong> 
              <span className={`status-badge ${student.status}`}>
                {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
              </span>
            </p>
            {student.trainingId && (
              <p><strong>Training ID:</strong> {student.trainingId}</p>
            )}
          </div>
          
          <div className="application-details">
            <h3>Application Details</h3>
            <p><strong>Semester:</strong> 6th</p>
            <p><strong>Experience:</strong> Basic knowledge of HTML, CSS, and JavaScript</p>
            <p><strong>Resume:</strong> <a href="#">View Resume</a></p>
          </div>
        </div>
        
        <div className="modal-footer">
          {student.status === 'pending' && (
            <>
              <button className="select-btn" onClick={onSelect}>Select Student</button>
              <button className="reject-btn" onClick={onReject}>Reject Application</button>
            </>
          )}
          <button className="cancel-btn" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default StudentModal;
