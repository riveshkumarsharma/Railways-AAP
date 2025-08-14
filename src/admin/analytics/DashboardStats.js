// src/admin/analytics/DashboardStats.js
import React from 'react';

function DashboardStats() {
  // Mock statistics data
  const stats = {
    totalApplications: 150,
    selectedStudents: 120,
    pendingReview: 30,
    feesSubmitted: 95,
    certificatesIssued: 80,
    domains: [
      { name: 'Web Development', students: 50 },
      { name: 'Data Science', students: 35 },
      { name: 'Mobile App Development', students: 25 },
      { name: 'Machine Learning', students: 20 },
      { name: 'Cloud Computing', students: 20 }
    ]
  };

  return (
    <div className="dashboard-stats-container">
      <h1>Admin Dashboard</h1>
      
      <div className="stats-cards">
        <div className="stat-card">
          <h3>Total Applications</h3>
          <p className="stat-number">{stats.totalApplications}</p>
        </div>
        
        <div className="stat-card">
          <h3>Selected Students</h3>
          <p className="stat-number">{stats.selectedStudents}</p>
        </div>
        
        <div className="stat-card">
          <h3>Pending Review</h3>
          <p className="stat-number">{stats.pendingReview}</p>
        </div>
        
        <div className="stat-card">
          <h3>Fees Submitted</h3>
          <p className="stat-number">{stats.feesSubmitted}</p>
        </div>
        
        <div className="stat-card">
          <h3>Certificates Issued</h3>
          <p className="stat-number">{stats.certificatesIssued}</p>
        </div>
      </div>
      
      <div className="dashboard-sections">
        <div className="domain-summary">
          <h2>Domain Distribution</h2>
          <div className="domain-bars">
            {stats.domains.map((domain, index) => (
              <div className="domain-bar-container" key={index}>
                <div className="domain-label">{domain.name}</div>
                <div className="domain-bar-wrapper">
                  <div 
                    className="domain-bar" 
                    style={{ width: `${(domain.students / stats.selectedStudents) * 100}%` }}
                  ></div>
                  <span className="domain-count">{domain.students}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="recent-activities">
          <h2>Recent Activities</h2>
          <ul className="activity-list">
            <li>
              <span className="activity-time">10:30 AM</span>
              <span className="activity-desc">New application received from Amit Kumar</span>
            </li>
            <li>
              <span className="activity-time">Yesterday</span>
              <span className="activity-desc">Certificate approved for Priya Singh</span>
            </li>
            <li>
              <span className="activity-time">Yesterday</span>
              <span className="activity-desc">Fees submitted by Rahul Kumar</span>
            </li>
            <li>
              <span className="activity-time">2 days ago</span>
              <span className="activity-desc">10 new students selected for Web Development batch</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <button onClick={() => window.location.href = '/admin/merit-list'}>
            Review Applications
          </button>
          <button onClick={() => window.location.href = '/admin/challan'}>
            Verify Challans
          </button>
          <button onClick={() => window.location.href = '/admin/certificate'}>
            Manage Certificates
          </button>
          <button onClick={() => window.location.href = '/admin/batch-management'}>
            Create New Batch
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardStats;
