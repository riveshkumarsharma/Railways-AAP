import React, { useState, useEffect } from 'react';
import StudentModal from './StudentModal';

function MeritList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [domainFilter, setDomainFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
          branch: "Computer Science",
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
          branch: "Information Technology",
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
          branch: "Electronics",
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

  const handleSelectStudent = (studentId) => {
    setStudents(students.map(student => 
      student.id === studentId ? {...student, status: 'selected'} : student
    ));
    setShowModal(false);
  };

  const handleRejectStudent = (studentId) => {
    setStudents(students.map(student => 
      student.id === studentId ? {...student, status: 'rejected'} : student
    ));
    setShowModal(false);
  };

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDomain = domainFilter === 'all' || student.domain === domainFilter;
    const matchesStatus = statusFilter === 'all' || student.status === statusFilter;
    
    return matchesSearch && matchesDomain && matchesStatus;
  });

  return (
    <div className="merit-list-container">
      <h1>Student Merit List</h1>
      
      <div className="export-buttons">
        <button className="export-btn pdf-btn">Export to PDF</button>
        <button className="export-btn excel-btn">Export to Excel</button>
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
                            onClick={() => handleSelectStudent(student.id)}
                          >
                            Select
                          </button>
                          <button 
                            className="reject-btn"
                            onClick={() => handleRejectStudent(student.id)}
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
        <StudentModal 
          student={selectedStudent}
          onClose={handleCloseModal}
          onSelect={() => handleSelectStudent(selectedStudent.id)}
          onReject={() => handleRejectStudent(selectedStudent.id)}
        />
      )}
    </div>
  );
}

export default MeritList;
