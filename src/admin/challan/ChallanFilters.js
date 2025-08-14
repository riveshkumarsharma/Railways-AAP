// src/admin/challan/ChallanFilters.js
import React from 'react';

function ChallanFilters({ filter, searchTerm, onFilterChange, onSearchChange }) {
  return (
    <div className="filters-container">
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search by name or ID" 
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      
      <div className="filter-container">
        <select value={filter} onChange={(e) => onFilterChange(e.target.value)}>
          <option value="all">All Students</option>
          <option value="stamped">Challan Stamped</option>
          <option value="paid">Fees Submitted</option>
          <option value="pending">Pending</option>
        </select>
      </div>
    </div>
  );
}

export default ChallanFilters;
