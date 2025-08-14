import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MeritList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [domainFilter, setDomainFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  
  const navigate = useNavigate();

  useEffect(() => {
    // In a real app, fetch data from API
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      // Mock data - in a real app, this would be an API call
      const mockStudents = [
        {
          id: 1,
          name: "Smriti Pandey",
          email: "smriti@example.com",
          college: "University of Lucknow",
          domain: "Web Development",
          academicPerformance: "8.5 CGPA",
          status: "selected",
          documents: {
            lor: "lor_smriti.pdf",
            idCard: "id_smriti.jpg"
          }
        },
        {
          id: 2,
          name: "Rahul Kumar",
          email: "rahul@example.com",
          college: "Delhi University",
          domain: "Data Science",
          academicPerformance: "9.0 CGPA",
          status: "pending",
          documents: {
            lor: "lor_rahul.pdf",
            idCard: "id_rahul.jpg"
          }
        },
        {
          id: 3,
          name: "Priya Singh",
          email: "priya@example.com",
          college: "IIT Bombay",
          domain: "Mobile Development",
          academicPerformance: "8.7 CGPA",
          status: "rejected",
          documents: {
            lor: "lor_priya.pdf",
            idCard: "id_priya.jpg"
          }
        }
      ];
      
      setStudents(mockStudents);
    } catch (error) {
      console.error("Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleViewStudent = (student) => {
    setSelectedStudent(student);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleStatusChange = async (studentId, newStatus) => {
    // In a real app, this would be an API call
    setStudents(students.map(student => 
      student.id === studentId ? {...student, status: newStatus} : student
    ));
    
    if (selectedStudent && selectedStudent.id === studentId) {
      setSelectedStudent({...selectedStudent, status: newStatus});
    }
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = domainFilter === 'all' || student.domain === domainFilter;
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    
    return matchesSearch && matchesDomain && matchesStatus;
  });

  const exportToPDF = () => {
    alert("Exporting to PDF... This would generate a PDF in a real application.");
  };

  const exportToExcel = () => {
    alert("Exporting to Excel... This would generate an Excel file in a real application.");
  };

  return (
    <div className="merit-list-container">
      <h1>Student Merit List</h1>
      
      <div className="export-buttons">
        <button className="export-btn pdf-btn" onClick={exportToPDF}>
          Export to PDF
        </button>
        <button className="export-btn excel-btn" onClick={exportToExcel}>
          Export to Excel
        </button>
      </div>
      
      <div className="filters-container">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-container">
          <select 
            value={domainFilter} 
            onChange={(e) => setDomainFilter(e.target.value)}
          >
            <option value="all">All Domains</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile Development">Mobile Development</option>
            <option value="Data Science">Data Science</option>
            <option value="Cloud Computing">Cloud Computing</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </div>
        
        <div className="filter-container">
          <select 
            value={statusFilter} 
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="selected">Selected</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
      
      <div className="table-container">
        {loading ? (
          <p>Loading students...</p>
        ) : filteredStudents.length > 0 ? (
          <table className="students-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>College</th>
                <th>Domain</th>
                <th>Academic Performance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.college}</td>
                  <td>{student.domain}</td>
                  <td>{student.academicPerformance}</td>
                  <td>
                    <span className={`status-badge ${student.status}`}>
                      {student.status.charAt(0).toUpperCase() + student.status.slice(1)}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button 
                        className="view-btn"
                        onClick={() => handleViewStudent(student)}
                      >
                        View
                      </button>
                      
                      {student.status === 'pending' && (
                        <>
                          <button 
                            className="select-btn"
                            onClick={() => handleStatusChange(student.id, 'selected')}
                          >
                            Select
                          </button>
                          <button 
                            className="reject-btn"
                            onClick={() => handleStatusChange(student.id, 'rejected')}
                          >
                            Reject
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No students found matching your criteria.</p>
        )}
      </div>
      
      {showModal && selectedStudent && (
        <div className="modal-overlay">
          <div className="student-modal">
            <div className="modal-header">
              <h2>Student Details</h2>
              <button className="close-btn" onClick={handleCloseModal}>&times;</button>
            </div>
            
            <div className="modal-body">
              <div className="student-details">
                <h3>{selectedStudent.name}</h3>
                <p><strong>Email:</strong> {selectedStudent.email}</p>
                <p><strong>College:</strong> {selectedStudent.college}</p>
                <p><strong>Domain:</strong> {selectedStudent.domain}</p>
                <p><strong>Academic Performance:</strong> {selectedStudent.academicPerformance}</p>
                <p>
                  <strong>Status:</strong> 
                  <span className={`status-badge ${selectedStudent.status}`}>
                    {selectedStudent.status.charAt(0).toUpperCase() + selectedStudent.status.slice(1)}
                  </span>
                </p>
              </div>
              
              <div className="application-details">
                <h3>Documents</h3>
                <p><strong>Letter of Reference:</strong> <a href="#">View Document</a></p>
                <p><strong>ID Card:</strong> <a href="#">View Document</a></p>
              </div>
            </div>
            
            <div className="modal-footer">
              {selectedStudent.status === 'pending' && (
                <>
                  <button 
                    className="select-btn"
                    onClick={() => handleStatusChange(selectedStudent.id, 'selected')}
                  >
                    Select Student
                  </button>
                  <button 
                    className="reject-btn"
                    onClick={() => handleStatusChange(selectedStudent.id, 'rejected')}
                  >
                    Reject Student
                  </button>
                </>
              )}
              <button className="view-btn" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MeritList;
