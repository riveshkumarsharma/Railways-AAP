// src/admin/studentManagement/StudentsList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function StudentsList() {
  // Mock data for students
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Smriti Pandey',
      trainingId: 'TR202300001',
      email: 'smriti@example.com',
      college: 'University of Lucknow',
      domain: 'Web Development',
      attendance: 95,
      feesStatus: 'paid',
      status: 'active'
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      trainingId: 'TR202300002',
      email: 'rahul@example.com',
      college: 'Delhi University',
      domain: 'Data Science',
      attendance: 85,
      feesStatus: 'paid',
      status: 'active'
    },
    {
      id: 3,
      name: 'Priya Singh',
      trainingId: 'TR202300003',
      email: 'priya@example.com',
      college: 'Mumbai University',
      domain: 'Mobile App Development',
      attendance: 90,
      feesStatus: 'paid',
      status: 'active'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter students based on status and search term
  const filteredStudents = students.filter(student => {
    let statusMatch = true;
    
    if (filter !== 'all') {
      statusMatch = student.status === filter;
    }
    
    const searchMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       student.trainingId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       student.email.toLowerCase().includes(searchTerm.toLowerCase());
                       
    return statusMatch && searchMatch;
  });

  // Simple export functions that don't rely on external libraries
  const handleExportToPDF = () => {
    alert("PDF export functionality will be implemented with proper libraries");
    // In a real implementation, you would use jsPDF here
  };

  const handleExportToExcel = () => {
    alert("Excel export functionality will be implemented with proper libraries");
    // In a real implementation, you would use xlsx here
  };

  return (
    <div className="students-list-container">
      <h1>Student Management</h1>
      
      <div className="filters-container">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search by name, email or ID" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-container">
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All Students</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>
      
      {/* Add export buttons */}
      <div className="export-buttons">
        <button className="export-btn pdf-btn" onClick={handleExportToPDF}>
          Export to PDF
        </button>
        <button className="export-btn excel-btn" onClick={handleExportToExcel}>
          Export to Excel
        </button>
      </div>
      
      <div className="table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Training ID</th>
              <th>Email</th>
              <th>College</th>
              <th>Domain</th>
              <th>Attendance</th>
              <th>Fees Status</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.trainingId}</td>
                <td>{student.email}</td>
                <td>{student.college}</td>
                <td>{student.domain}</td>
                <td>
                  <span className={`attendance-badge ${student.attendance >= 75 ? 'success' : 'warning'}`}>
                    {student.attendance}%
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${student.feesStatus === 'paid' ? 'success' : 'pending'}`}>
                    {student.feesStatus.charAt(0).toUpperCase() + student.feesStatus.slice(1)}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${student.status}`}>
                    {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <Link to={`/admin/student-management/${student.id}`} className="view-btn">
                      View Profile
                    </Link>
                    <button 
                      className="attendance-btn"
                      onClick={() => alert(`Mark attendance for ${student.name}`)}
                    >
                      Attendance
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default StudentsList;
