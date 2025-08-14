// src/admin/idcard/IDCardGenerator.js
import React, { useState } from 'react';
import IDCardPreview from './IDCardPreview';

function IDCardGenerator() {
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const [previewStudent, setPreviewStudent] = useState(null);
  const [showPreview, setShowPreview] = useState(false);

  // Mock student data
  const students = [
    {
      id: 1,
      name: 'Smriti Pandey',
      trainingId: 'TR202300001',
      email: 'smriti@example.com',
      college: 'University of Lucknow',
      domain: 'Web Development',
      batch: 'Web Development Batch 1',
      photo: 'https://via.placeholder.com/150',
      idCardGenerated: false
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      trainingId: 'TR202300002',
      email: 'rahul@example.com',
      college: 'Delhi University',
      domain: 'Data Science',
      batch: 'Data Science Batch 1',
      photo: 'https://via.placeholder.com/150',
      idCardGenerated: true
    },
    {
      id: 3,
      name: 'Priya Singh',
      trainingId: 'TR202300003',
      email: 'priya@example.com',
      college: 'Mumbai University',
      domain: 'Mobile App Development',
      batch: 'Mobile App Development Batch 1',
      photo: 'https://via.placeholder.com/150',
      idCardGenerated: false
    }
  ];

  // Filter students based on search term and filter
  const filteredStudents = students.filter(student => {
    let statusMatch = true;
    
    if (filter === 'generated') {
      statusMatch = student.idCardGenerated;
    } else if (filter === 'pending') {
      statusMatch = !student.idCardGenerated;
    }
    
    const searchMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       student.trainingId.toLowerCase().includes(searchTerm.toLowerCase());
                       
    return statusMatch && searchMatch;
  });

  const handleSelectStudent = (student) => {
    if (selectedStudents.find(s => s.id === student.id)) {
      setSelectedStudents(selectedStudents.filter(s => s.id !== student.id));
    } else {
      setSelectedStudents([...selectedStudents, student]);
    }
  };

  const handleSelectAll = () => {
    if (selectedStudents.length === filteredStudents.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents([...filteredStudents]);
    }
  };

  const handlePreview = (student) => {
    setPreviewStudent(student);
    setShowPreview(true);
  };

  const handleClosePreview = () => {
    setShowPreview(false);
    setPreviewStudent(null);
  };

  const handleGenerateSelected = () => {
    if (selectedStudents.length === 0) {
      alert('Please select at least one student');
      return;
    }
    
    alert(`ID Cards generated for ${selectedStudents.length} students`);
    // In a real app, you would call an API to generate the ID cards
  };

  return (
    <div className="id-card-generator-container">
      <h1>ID Card Generator</h1>
      
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
            <option value="generated">ID Card Generated</option>
            <option value="pending">ID Card Pending</option>
          </select>
        </div>
      </div>
      
      <div className="action-bar">
        <button 
          className="generate-btn"
          onClick={handleGenerateSelected}
          disabled={selectedStudents.length === 0}
        >
          Generate Selected ({selectedStudents.length})
        </button>
      </div>
      
      <div className="table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>
                <input 
                  type="checkbox" 
                  checked={selectedStudents.length === filteredStudents.length && filteredStudents.length > 0}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Photo</th>
              <th>Name</th>
              <th>Training ID</th>
              <th>College</th>
              <th>Domain</th>
              <th>Batch</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <tr key={student.id}>
                <td>
                  <input 
                    type="checkbox" 
                    checked={!!selectedStudents.find(s => s.id === student.id)}
                    onChange={() => handleSelectStudent(student)}
                  />
                </td>
                <td>
                  <img 
                    src={student.photo} 
                    alt={student.name} 
                    className="student-photo" 
                    width="40" 
                    height="40"
                  />
                </td>
                <td>{student.name}</td>
                <td>{student.trainingId}</td>
                <td>{student.college}</td>
                <td>{student.domain}</td>
                <td>{student.batch}</td>
                <td>
                  <span className={`status-badge ${student.idCardGenerated ? 'success' : 'pending'}`}>
                    {student.idCardGenerated ? 'Generated' : 'Pending'}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="preview-btn"
                      onClick={() => handlePreview(student)}
                    >
                      Preview
                    </button>
                    {!student.idCardGenerated && (
                      <button 
                        className="generate-btn"
                        onClick={() => {
                          alert(`ID Card generated for ${student.name}`);
                          // In a real app, you would call an API to generate the ID card
                        }}
                      >
                        Generate
                      </button>
                    )}
                    {student.idCardGenerated && (
                      <button 
                        className="download-btn"
                        onClick={() => alert(`Downloading ID Card for ${student.name}`)}
                      >
                        Download
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {showPreview && previewStudent && (
        <IDCardPreview 
          student={previewStudent} 
          onClose={handleClosePreview} 
        />
      )}
    </div>
  );
}

export default IDCardGenerator;
