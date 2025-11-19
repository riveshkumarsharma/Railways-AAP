import '../src/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/Pages/about';
import Contact from './Components/Pages/contact';
import Login from './Components/Pages/login';
import Registration from './Components/Pages/Registration';
import { ThemeProvider } from './ThemeContext';
import HomePage from './Components/Home Page/Home Page';
import StudentDashboard from './Components/Pages/StudentDashboard';
import Footer from './Components/Pages/Footer';
import CourseModule from './Components/Pages/CourseModule';
// Import admin components
import AdminDashboard from './admin/AdminDashboard';
import AdminLogin from './admin/login/AdminLogin';
// Import student components
import StudentApplicationForm from './Components/Pages/StudemtApplicationForm';
import StudentCertificate from './Components/Pages/StudentCertificate';
import ChallanDownload from './Components/Pages/ChallanDownload';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div>
          {/* <div className='notice'> This side is under maintenance </div> */}
          <Header />
          <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/course-modules" element={<CourseModule/>} />
            
            {/* Student Routes */}
            <Route path="/register" element={<Registration />} />
            <Route path="/student/dashboard" element={<StudentDashboard />} />
            <Route path="/student/application" element={<StudentApplicationForm />} />
            <Route path="/student/challan" element={<ChallanDownload />} />
            <Route path="/student/certificate" element={<StudentCertificate />} />
            
            {/* Admin Routes */}
            <Route path="/admin/*" element={<AdminDashboard />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            
            <Route path="login" element={<Login />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          </div>
          
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
