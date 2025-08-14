// src/admin/studentManagement/StudentProfile.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function StudentProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock student data (in a real app, you would fetch this based on the ID)
  const student = {
    id: parseInt(id),
    name: 'Smriti Pandey',
    trainingId: `TR2023000${id}`,
    email: 'smriti@example.com',
    phone: '1234567890',
    college: 'University of Lucknow',
    branch: 'Computer Science',
    semester: 6,
    domain: 'Web Development',
    batch: {
      name: 'Web Development Batch 1',
      startDate: '2023-06-01',
      endDate: '2023-08-31'
    },
    attendance: 95,
    feesStatus: 'paid',
    challanDetails: {
      challanId: 'CH123456',
      amount: 5000,
      stamped: true,
      paid: true,
      paidDate: '2023-05-20'
    },
    certificateStatus: 'approved',
    documents: [
      { type: 'ID Proof', status: 'verified' },
      { type: 'College ID', status: 'verified' },
      { type: 'Address Proof', status: 'verified' }
    ],
    performance: {
      assignments: 90,
      projects: 95,
      overall: 92
    },
    status: 'active'
  };

  return (
    <div className="student-profile-container">
      <div className="profile-header">
        <button className="back-btn" onClick={() => navigate('/admin/student-management')}>
          Back to List
        </button>
        <h1>Student Profile</h1>
      </div>
      
      <div className="profile-content">
        <div className="profile-section basic-info">
          <h2>Basic Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Name</label>
              <p>{student.name}</p>
            </div>
            <div className="info-item">
              <label>Training ID</label>
              <p>{student.trainingId}</p>
            </div>
            <div className="info-item">
              <label>Email</label>
              <p>{student.email}</p>
            </div>
            <div className="info-item">
              <label>Phone</label>
              <p>{student.phone}</p>
            </div>
            <div className="info-item">
              <label>College</label>
              <p>{student.college}</p>
            </div>
            <div className="info-item">
              <label>Branch</label>
              <p>{student.branch}</p>
            </div>
            <div className="info-item">
              <label>Semester</label>
              <p>{student.semester}</p>
            </div>
            <div className="info-item">
              <label>Status</label>
              <p>
                <span className={`status-badge ${student.status}`}>
                  {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="profile-section training-info">
          <h2>Training Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Domain</label>
              <p>{student.domain}</p>
            </div>
            <div className="info-item">
              <label>Batch</label>
              <p>{student.batch.name}</p>
            </div>
            <div className="info-item">
              <label>Start Date</label>
              <p>{student.batch.startDate}</p>
            </div>
            <div className="info-item">
              <label>End Date</label>
              <p>{student.batch.endDate}</p>
            </div>
            <div className="info-item">
              <label>Attendance</label>
              <p>
                <span className={`attendance-badge ${student.attendance >= 75 ? 'success' : 'warning'}`}>
                  {student.attendance}%
                </span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="profile-section fees-info">
          <h2>Fees Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Fees Status</label>
              <p>
                <span className={`status-badge ${student.feesStatus === 'paid' ? 'success' : 'pending'}`}>
                  {student.feesStatus.charAt(0).toUpperCase() + student.feesStatus.slice(1)}
                </span>
              </p>
            </div>
            <div className="info-item">
              <label>Challan ID</label>
              <p>{student.challanDetails.challanId}</p>
            </div>
            <div className="info-item">
              <label>Amount</label>
              <p>₹{student.challanDetails.amount}</p>
            </div>
            <div className="info-item">
              <label>Challan Stamped</label>
              <p>{student.challanDetails.stamped ? 'Yes' : 'No'}</p>
            </div>
            <div className="info-item">
              <label>Payment Date</label>
              <p>{student.challanDetails.paidDate || 'N/A'}</p>
            </div>
          </div>
        </div>
        
        <div className="profile-section certificate-info">
          <h2>Certificate Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Certificate Status</label>
              <p>
                <span className={`status-badge ${student.certificateStatus === 'approved' ? 'success' : 'pending'}`}>
                  {student.certificateStatus.charAt(0).toUpperCase() + student.certificateStatus.slice(1)}
                </span>
              </p>
            </div>
            {student.certificateStatus === 'approved' && (
              <div className="info-item">
                <button 
                  className="view-certificate-btn"
                  onClick={() => alert('View certificate')}
                >
                  View Certificate
                </button>
              </div>
            )}
          </div>
        </div>
        
        <div className="profile-section documents-info">
          <h2>Documents</h2>
          <table className="documents-table">
            <thead>
              <tr>
                <th>Document Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {student.documents.map((doc, index) => (
                <tr key={index}>
                  <td>{doc.type}</td>
                  <td>
                    <span className={`status-badge ${doc.status}`}>
                      {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="view-btn"
                      onClick={() => alert(`View ${doc.type}`)}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="profile-section performance-info">
          <h2>Performance</h2>
          <div className="info-grid">
            <div className="info-item">
              <label>Assignments</label>
              <p>{student.performance.assignments}%</p>
            </div>
            <div className="info-item">
              <label>Projects</label>
              <p>{student.performance.projects}%</p>
            </div>
            <div className="info-item">
              <label>Overall</label>
              <p>{student.performance.overall}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;
