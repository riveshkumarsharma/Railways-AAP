// src/admin/certificate/CertificateApproval.js
import React, { useState } from 'react';
import CertificateRow from './CertificateRow';

function CertificateApproval() {
  // Mock data for students eligible for certificates
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Smriti Pandey',
      trainingId: 'TR202300001',
      domain: 'Web Development',
      duration: '3 months',
      feesSubmitted: true,
      attendancePercentage: 95,
      certificateApproved: false
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      trainingId: 'TR202300002',
      domain: 'Data Science',
      duration: '3 months',
      feesSubmitted: true,
      attendancePercentage: 85,
      certificateApproved: false
    },
    {
      id: 3,
      name: 'Priya Singh',
      trainingId: 'TR202300003',
      domain: 'Mobile App Development',
      duration: '3 months',
      feesSubmitted: true,
      attendancePercentage: 90,
      certificateApproved: true
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleApproveCertificate = (id) => {
    setStudents(students.map(student => {
      if (student.id === id) {
        return {
          ...student,
          certificateApproved: true
        };
      }
      return student;
    }));
  };

  const handleRevokeCertificate = (id) => {
    setStudents(students.map(student => {
      if (student.id === id) {
        return {
          ...student,
          certificateApproved: false
        };
      }
      return student;
    }));
  };

  // Filter students based on certificate status and search term
  const filteredStudents = students.filter(student => {
    let statusMatch = true;
    
    if (filter === 'approved') {
      statusMatch = student.certificateApproved;
    } else if (filter === 'pending') {
      statusMatch = !student.certificateApproved;
    }
    
    const searchMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       student.trainingId.toLowerCase().includes(searchTerm.toLowerCase());
                       
    return statusMatch && searchMatch;
  });

  return (
    <div className="certificate-approval-container">
      <h1>Certificate Management</h1>
      
      <div className="filters-container">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by name or ID" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-container">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Students</option>
            <option value="approved">Certificate Approved</option>
            <option value="pending">Certificate Pending</option>
          </select>
        </div>
      </div>
      
      <div className="table-container">
        <table className="certificate-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Training ID</th>
              <th>Domain</th>
              <th>Duration</th>
              <th>Fees Status</th>
              <th>Attendance</th>
              <th>Certificate Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <CertificateRow 
                key={student.id}
                student={student}
                onApprove={() => handleApproveCertificate(student.id)}
                onRevoke={() => handleRevokeCertificate(student.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CertificateApproval;
