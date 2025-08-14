
import { Route, Routes } from 'react-router-dom';
import DashboardHome from './DashboardHome';
import ApproveForms from './ApproveForms';
import StudentProfiles from './StudentProfiles';
import Notifications from "./Notifications";
import SelectionTracker from './SelectionTracker';
import AdminLogin from './AdminLogin';
import DocumentVerification from './DocumentVerification'; // Import DocumentVerification component
import MeritList from './MeritList'; // Import MeritList component
import Sidebar from './Sidebar';
import DomainBatchManagement from './DomainBatchManagement'; // Import DomainBatchManagement component


function App() {
  return (
    <div className="admin-container">
    <Routes>
      <Route path="/admin/dashboard" element={<DashboardHome />} />
      <Route path="/admin/forms" element={<ApproveForms />} />
      <Route path="/admin/students" element={<StudentProfiles />} />
      <Route path="/admin/notifications" element={<Notifications />} />
      <Route path="/admin/tracker" element={<SelectionTracker />} />
      <Route path="/AdminLogin" element={<h1><AdminLogin/></h1>} /> {/* Placeholder for Admin Login */}
      <Route path="/admin/documents" element={<DocumentVerification />} />
      <Route path='/admin/DocumentVerification' element={<DocumentVerification />} />
      <Route path='/admin/merit-list' element={<MeritList />} /> {/* Placeholder for Merit List */}
      <Route path="/admin/domain-batch" element={<DomainBatchManagement />} />


    </Routes>
     <div>
      <Sidebar/>
      
    </div>
    </div>
    
  );
}
// src/admin/admin.js
export { default as DashboardHome } from './DashboardHome';
export { default as ApproveForms } from './ApproveForms';
export { default as StudentProfiles } from './StudentProfiles';
export { default as Navbar } from './Navbar';
export { default as Sidebar } from './Sidebar';
export { default as Notifications } from './Notifications';
export { default as SelectionTracker } from './SelectionTracker';
export { default as MeritList } from './MeritList';
export { default as DocumentVerification } from './DocumentVerification';
export { default as DomainBatchManagement } from './DomainBatchManagement'; // Export DomainBatchManagement component
export default App;
//
