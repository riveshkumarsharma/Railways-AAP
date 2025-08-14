// src/admin/AdminSidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/Sidebar.css';

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
      </div>
      
      <nav className="sidebar-nav">
        <NavLink to="/admin" end className={({isActive}) => isActive ? 'active' : ''}>
          Dashboard
        </NavLink>
        
        <NavLink to="/admin/document-verification" className={({isActive}) => isActive ? 'active' : ''}>
          Document Verification
        </NavLink>
        
        <NavLink to="/admin/merit-list" className={({isActive}) => isActive ? 'active' : ''}>
          Merit List
        </NavLink>
        
        <NavLink to="/admin/batch-management" className={({isActive}) => isActive ? 'active' : ''}>
          Batch Management
        </NavLink>
        
        <NavLink to="/admin/student-management" className={({isActive}) => isActive ? 'active' : ''}>
          Student Management
        </NavLink>
        
        <NavLink to="/admin/challan" className={({isActive}) => isActive ? 'active' : ''}>
          Challan System
        </NavLink>
        
        <NavLink to="/admin/certificate" className={({isActive}) => isActive ? 'active' : ''}>
          Certificate Approval
        </NavLink>
        
        <NavLink to="/admin/id-card" className={({isActive}) => isActive ? 'active' : ''}>
          ID Card Generator
        </NavLink>
        
        <NavLink to="/admin/analytics" className={({isActive}) => isActive ? 'active' : ''}>
          Analytics
        </NavLink>
      </nav>
      
      <div className="sidebar-footer">
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default AdminSidebar;
