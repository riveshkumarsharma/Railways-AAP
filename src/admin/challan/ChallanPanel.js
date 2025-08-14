// src/admin/challan/ChallanPanel.js
import React, { useState } from 'react';
import ChallanRow from './ChallanRow';
import ChallanFilters from './ChallanFilters';

function ChallanPanel() {
  // Mock data for students with challans
  const [students, setStudents] = useState([
    {
      id: 1,
      name: 'Smriti Pandey',
      trainingId: 'TR202300001',
      challanId: 'CH123456',
      domain: 'Web Development',
      fees: 5000,
      challanStamped: false,
      feesSubmitted: false
    },
    {
      id: 2,
      name: 'Rahul Kumar',
      trainingId: 'TR202300002',
      challanId: 'CH123457',
      domain: 'Data Science',
      fees: 5000,
      challanStamped: true,
      feesSubmitted: false
    },
    {
      id: 3,
      name: 'Priya Singh',
      trainingId: 'TR202300003',
      challanId: 'CH123458',
      domain: 'Mobile App Development',
      fees: 5000,
      challanStamped: true,
      feesSubmitted: true
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleMarkStamped = (id) => {
    setStudents(students.map(student => {
      if (student.id === id) {
        return {
          ...student,
          challanStamped: true
        };
      }
      return student;
    }));
  };

  const handleMarkPaid = (id) => {
    setStudents(students.map(student => {
      if (student.id === id) {
        return {
          ...student,
          feesSubmitted: true
        };
      }
      return student;
    }));
  };

  // Filter students based on status and search term
  const filteredStudents = students.filter(student => {
    let statusMatch = true;
    
    if (filter === 'stamped') {
      statusMatch = student.challanStamped;
    } else if (filter === 'paid') {
      statusMatch = student.feesSubmitted;
    } else if (filter === 'pending') {
      statusMatch = !student.challanStamped || !student.feesSubmitted;
    }
    
    const searchMatch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       student.trainingId.toLowerCase().includes(searchTerm.toLowerCase());
                       
    return statusMatch && searchMatch;
  });

  return (
    <div className="challan-panel-container">
      <h1>Challan Verification</h1>
      
      <ChallanFilters 
        filter={filter}
        searchTerm={searchTerm}
        onFilterChange={(value) => setFilter(value)}
        onSearchChange={(value) => setSearchTerm(value)}
      />
      
      <div className="table-container">
        <table className="challan-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Training ID</th>
              <th>Challan ID</th>
              <th>Domain</th>
              <th>Fees</th>
              <th>Challan Stamped</th>
              <th>Fees Submitted</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map(student => (
              <ChallanRow 
                key={student.id}
                student={student}
                onMarkStamped={() => handleMarkStamped(student.id)}
                onMarkPaid={() => handleMarkPaid(student.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ChallanPanel;
