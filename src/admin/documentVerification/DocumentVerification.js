// src/admin/documentVerification/DocumentVerification.js
import React, { useState } from 'react';
import DocumentRow from './DocumentRow';

function DocumentVerification() {
  // Mock data for document verification
  const [documents, setDocuments] = useState([
    {
      id: 1,
      studentName: 'Smriti Pandey',
      trainingId: 'TR202300001',
      documentType: 'ID Proof',
      status: 'pending',
      submittedDate: '2023-05-15'
    },
    {
      id: 2,
      studentName: 'Rahul Kumar',
      trainingId: 'TR202300002',
      documentType: 'College ID',
      status: 'verified',
      submittedDate: '2023-05-14'
    },
    {
      id: 3,
      studentName: 'Priya Singh',
      trainingId: 'TR202300003',
      documentType: 'Address Proof',
      status: 'rejected',
      submittedDate: '2023-05-13'
    }
  ]);

  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const handleVerify = (id) => {
    setDocuments(documents.map(doc => {
      if (doc.id === id) {
        return {
          ...doc,
          status: 'verified'
        };
      }
      return doc;
    }));
  };

  const handleReject = (id) => {
    setDocuments(documents.map(doc => {
      if (doc.id === id) {
        return {
          ...doc,
          status: 'rejected'
        };
      }
      return doc;
    }));
  };

  // Filter documents based on status and search term
  const filteredDocuments = documents.filter(doc => {
    let statusMatch = true;
    
    if (filter !== 'all') {
      statusMatch = doc.status === filter;
    }
    
    const searchMatch = doc.studentName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       doc.trainingId.toLowerCase().includes(searchTerm.toLowerCase());
                       
    return statusMatch && searchMatch;
  });

  return (
    <div className="document-verification-container">
      <h1>Document Verification</h1>
      
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
            <option value="all">All Documents</option>
            <option value="pending">Pending</option>
            <option value="verified">Verified</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>
      
      <div className="table-container">
        <table className="documents-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Training ID</th>
              <th>Document Type</th>
              <th>Submitted Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredDocuments.map(doc => (
              <DocumentRow 
                key={doc.id}
                document={doc}
                onVerify={() => handleVerify(doc.id)}
                onReject={() => handleReject(doc.id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocumentVerification;
