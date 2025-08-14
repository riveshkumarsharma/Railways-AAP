// src/admin/AdminRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import admin pages
import DashboardStats from './analytics/DashboardStats';
import DocumentVerification from './documentVerification/DocumentVerification';
import MeritList from './meritlist/MeritList';
import BatchManagement from './batchManagement/BatchManagement';
import StudentsList from './studentManagement/StudentsList';
import StudentProfile from './studentManagement/StudentProfile';
import ChallanPanel from './challan/ChallanPanel';
import CertificateApproval from './certificate/CertificateApproval';
import IDCardGenerator from './idcard/IDCardGenerator';

function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardStats />} />
      <Route path="/document-verification" element={<DocumentVerification />} />
      <Route path="/merit-list" element={<MeritList />} />
      <Route path="/batch-management" element={<BatchManagement />} />
      <Route path="/student-management" element={<StudentsList />} />
      <Route path="/student-management/:id" element={<StudentProfile />} />
      <Route path="/challan" element={<ChallanPanel />} />
      <Route path="/certificate" element={<CertificateApproval />} />
      <Route path="/id-card" element={<IDCardGenerator />} />
      <Route path="/analytics" element={<DashboardStats />} />
    </Routes>
  );
}

export default AdminRoutes;
