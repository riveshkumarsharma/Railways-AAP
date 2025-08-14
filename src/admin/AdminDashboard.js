// src/admin/AdminDashboard.js
import React from 'react';
import AdminSidebar from './AdminSidebar';
import AdminRoutes from './AdminRoutes';
import './styles/AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-content">
        <AdminRoutes />
      </div>
    </div>
  );
}

export default AdminDashboard;
