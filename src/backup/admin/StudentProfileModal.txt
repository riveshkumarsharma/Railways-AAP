import React from 'react';
import '../../App.css'; // Assuming styles are in App.css

const StudentProfileModal = ({ student, onClose }) => {
    if (!student) {
        return null;
    }

    // Dummy links for documents
    const docLink = "/#";

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Student Profile: {student.name}</h2>
                <p><strong>Unique ID:</strong> {student.uniqueId}</p>
                <p><strong>Email:</strong> {student.email}</p>
                <p><strong>Course:</strong> {student.course}</p>
                <p><strong>Status:</strong> <span className={`status ${student.status.toLowerCase()}`}>{student.status}</span></p>
                
                <h3>Documents</h3>
                <div className="document-grid">
                    <div className="doc-card">
                        <p>10th Marksheet</p>
                        <a href={docLink} target="_blank" rel="noopener noreferrer">View Document</a>
                    </div>
                    <div className="doc-card">
                        <p>12th Marksheet</p>
                        <a href={docLink} target="_blank" rel="noopener noreferrer">View Document</a>
                    </div>
                    <div className="doc-card">
                        <p>Aadhaar Card</p>
                        <a href={docLink} target="_blank" rel="noopener noreferrer">View Document</a>
                    </div>
                </div>

                <button onClick={onClose} className="close-btn">Close</button>
            </div>
        </div>
    );
};

export default StudentProfileModal;

