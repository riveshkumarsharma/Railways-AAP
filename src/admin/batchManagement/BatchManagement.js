// src/admin/batchManagement/BatchManagement.js
import React, { useState } from 'react';

function BatchManagement() {
  // Mock data for batches
  const [batches, setBatches] = useState([
    {
      id: 1,
      name: 'Web Development Batch 1',
      domain: 'Web Development',
      startDate: '2023-06-01',
      endDate: '2023-08-31',
      capacity: 30,
      enrolled: 25,
      status: 'active'
    },
    {
      id: 2,
      name: 'Data Science Batch 1',
      domain: 'Data Science',
      startDate: '2023-06-15',
      endDate: '2023-09-15',
      capacity: 25,
      enrolled: 20,
      status: 'active'
    },
    {
      id: 3,
      name: 'Mobile App Development Batch 1',
      domain: 'Mobile App Development',
      startDate: '2023-07-01',
      endDate: '2023-10-01',
      capacity: 20,
      enrolled: 15,
      status: 'upcoming'
    }
  ]);

  const [newBatch, setNewBatch] = useState({
    name: '',
    domain: '',
    startDate: '',
    endDate: '',
    capacity: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBatch({
      ...newBatch,
      [name]: value
    });
  };

  const handleAddBatch = (e) => {
    e.preventDefault();
    
    const batch = {
      id: batches.length + 1,
      ...newBatch,
      enrolled: 0,
      status: 'upcoming'
    };
    
    setBatches([...batches, batch]);
    
    // Reset form
    setNewBatch({
      name: '',
      domain: '',
      startDate: '',
      endDate: '',
      capacity: ''
    });
  };

  return (
    <div className="batch-management-container">
      <h1>Batch Management</h1>
      
      <div className="add-batch-form">
        <h2>Add New Batch</h2>
        <form onSubmit={handleAddBatch}>
          <div className="form-group">
            <label htmlFor="name">Batch Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={newBatch.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="domain">Domain</label>
            <select
              id="domain"
              name="domain"
              value={newBatch.domain}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Domain</option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="Machine Learning">Machine Learning</option>
              <option value="Cloud Computing">Cloud Computing</option>
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="startDate">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={newBatch.startDate}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="endDate">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={newBatch.endDate}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="capacity">Capacity</label>
            <input
              type="number"
              id="capacity"
              name="capacity"
              value={newBatch.capacity}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <button type="submit" className="add-batch-btn">Add Batch</button>
        </form>
      </div>
      
      <div className="batches-list">
        <h2>Current Batches</h2>
        <table className="batches-table">
          <thead>
            <tr>
              <th>Batch Name</th>
              <th>Domain</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Capacity</th>
              <th>Enrolled</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {batches.map(batch => (
              <tr key={batch.id}>
                <td>{batch.name}</td>
                <td>{batch.domain}</td>
                <td>{batch.startDate}</td>
                <td>{batch.endDate}</td>
                <td>{batch.capacity}</td>
                <td>{batch.enrolled}</td>
                <td>
                  <span className={`status-badge ${batch.status}`}>
                    {batch.status.charAt(0).toUpperCase() + batch.status.slice(1)}
                  </span>
                </td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="view-btn"
                      onClick={() => alert(`View details for ${batch.name}`)}
                    >
                      View
                    </button>
                    <button 
                      className="edit-btn"
                      onClick={() => alert(`Edit ${batch.name}`)}
                    >
                      Edit
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

export default BatchManagement;
