// StudentDashboard.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function StudentDashboard() {
  const navigate = useNavigate();
  const [showBatchSelection, setShowBatchSelection] = useState(false);
  
  // Sample data (replace with actual data fetching)
  const studentData = {
    name: "Smriti Pandey",
    photo: "student-photo.jpg", // Replace with actual image path
    enrollmentId: "STU12345",
    college: "University of Lucknow",
    branch: "Computer Science",
    semester: 6,
    email: "smritipandey.doe@example.com",
    phone: "1234567890",
    course: "Web Development",
    batch: {
      start: "2023-09-01",
      duration: "3 months",
    },
    mode: "Online",
    mentor: "Birju parshad",
    status: "Selected", // Changed from "Completed" to "Selected"
    challanStatus: "Pending", // New field
    paymentStatus: "Pending", // New field
    batchAssigned: false, // New field
    certificateStatus: "Pending", // Changed from "Available" to "Pending"
    attendance: {
      attended: 25,
      total: 30,
    },
    project: {
      submissionStatus: "Reviewed",
      evaluationResult: "Excellent",
    },
    studyMaterials: [
      { title: "HTML Basics", type: "PDF", link: "#" },
      { title: "CSS Fundamentals", type: "Video", link: "#" },
    ],
    liveSessions: [
      { title: "React Introduction", date: "2023-12-15", time: "10:00 AM", link: "#" },
    ],
    notices: [
      "Project submission deadline extended to Dec 20.",
      "Mentor session scheduled for Dec 18 at 2 PM.",
    ],
    events: [
      { title: "Webinar: Advanced React", date: "2023-12-22", time: "11:00 AM", link: "#" },
    ],
    progress: 100,
  };

  // Available batches (would come from API)
  const availableBatches = [
    { id: 1, name: "Morning Batch", time: "9:00 AM - 12:00 PM", startDate: "2024-01-15", seats: 5 },
    { id: 2, name: "Afternoon Batch", time: "2:00 PM - 5:00 PM", startDate: "2024-01-15", seats: 3 },
    { id: 3, name: "Evening Batch", time: "6:00 PM - 9:00 PM", startDate: "2024-01-20", seats: 7 }
  ];

  const handleGenerateChallan = () => {
    navigate('/student/challan');
  };

  const handleDownloadCertificate = () => {
    // In a real app, this would download the certificate
    alert('Downloading certificate...');
  };

  const handleSelectBatch = (batchId) => {
    // In a real app, this would send the selection to the server
    alert(`Selected batch ${batchId}. Your selection has been submitted.`);
    setShowBatchSelection(false);
  };

  return (
    <div className="student-dashboard">
      <h1 className="dashboard-title">Student Dashboard</h1>

      <button className="logout-btn">Logout</button> {/* Logout Button */}

      {/* 1. Student Profile Summary */}
      <div className="dashboard-section profile-summary">
        <img src={studentData.photo} alt="Student" className="profile-photo" />
        <div className="profile-details">
          <h2>{studentData.name}</h2>
          <p><strong>Enrollment ID:</strong> {studentData.enrollmentId}</p>
          <p><strong>College:</strong> {studentData.college}</p>
          <p><strong>Branch:</strong> {studentData.branch}, Semester {studentData.semester}</p>
          <p><strong>Email:</strong> {studentData.email}</p>
          <p><strong>Phone:</strong> {studentData.phone}</p>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>

      {/* 2. Application Status Section */}
      <div className="dashboard-section application-status">
        <h2 className="section-title">Application Status</h2>
        <p>
          <strong>Status:</strong>
          <span className={`status-indicator ${studentData.status.toLowerCase()}`}></span>
          {studentData.status}
        </p>
        
        {/* Challan Generation Section - Only show if selected but challan not generated */}
        {studentData.status === "Selected" && studentData.challanStatus === "Pending" && (
          <div className="challan-section">
            <p>Congratulations! You have been selected for the training program.</p>
            <p>Please generate your fee challan to proceed with the payment.</p>
            <button 
              className="generate-challan-btn"
              onClick={handleGenerateChallan}
            >
              Generate Fee Challan
            </button>
          </div>
        )}
        
        {/* Payment Status Section */}
        {studentData.challanStatus === "Generated" && (
          <div className="payment-status">
            <p><strong>Payment Status:</strong> {studentData.paymentStatus}</p>
            {studentData.paymentStatus === "Pending" && (
              <p>Please visit the office with your printed challan to complete the payment.</p>
            )}
            {studentData.paymentStatus === "Completed" && !studentData.batchAssigned && (
              <div>
                <p>Your payment has been verified. Please select your preferred batch:</p>
                <button 
                  className="select-batch-btn"
                  onClick={() => setShowBatchSelection(true)}
                >
                  Select Batch
                </button>
              </div>
            )}
          </div>
        )}
        
        {/* Batch Selection Modal */}
        {showBatchSelection && (
          <div className="batch-selection-modal">
            <div className="modal-content">
              <h3>Select Your Preferred Batch</h3>
              <div className="batch-list">
                {availableBatches.map(batch => (
                  <div key={batch.id} className="batch-option">
                    <h4>{batch.name}</h4>
                    <p><strong>Time:</strong> {batch.time}</p>
                    <p><strong>Start Date:</strong> {batch.startDate}</p>
                    <p><strong>Available Seats:</strong> {batch.seats}</p>
                    <button 
                      onClick={() => handleSelectBatch(batch.id)}
                      disabled={batch.seats <= 0}
                    >
                      Select This Batch
                    </button>
                  </div>
                ))}
              </div>
              <button onClick={() => setShowBatchSelection(false)}>Cancel</button>
            </div>
          </div>
        )}
      </div>

      {/* 3. Training Details Overview - Show if batch assigned */}
      {studentData.batchAssigned && (
        <div className="dashboard-section training-details">
          <h2 className="section-title">Training Details</h2>
          <p><strong>Course:</strong> {studentData.course}</p>
          <p><strong>Batch:</strong> Start Date: {studentData.batch.start}, Duration: {studentData.batch.duration}</p>
          <p><strong>Mode:</strong> {studentData.mode}</p>
          <p><strong>Assigned Mentor:</strong> {studentData.mentor || "N/A"}</p>
          <p>
            <strong>Status:</strong>
            <span className={`status-indicator ${studentData.status.toLowerCase()}`}></span>
            {studentData.status}
          </p>
        </div>
      )}

      {/* 4. Certificate Section */}
      <div className="dashboard-section certificate-section">
        <h2 className="section-title">Certificate</h2>
        <p><strong>Status:</strong> {studentData.certificateStatus}</p>
        {studentData.certificateStatus === "Available" && (
          <button onClick={handleDownloadCertificate}>Download Certificate</button>
        )}
        {studentData.certificateStatus === "Pending" && (
          <p>Your certificate will be available after course completion and approval.</p>
        )}
      </div>

      {/* Only show these sections if batch is assigned */}
      {studentData.batchAssigned && (
        <>
          {/* 5. Attendance Tracker */}
          <div className="dashboard-section attendance-tracker">
            <h2 className="section-title">Attendance</h2>
            <p>{studentData.attendance.attended} / {studentData.attendance.total} days attended</p>
          </div>

          {/* 6. Project Submission Section */}
          <div className="dashboard-section project-submission">
            <h2 className="section-title">Project Submission</h2>
            <p><strong>Submission Status:</strong> {studentData.project.submissionStatus}</p>
            {studentData.project.submissionStatus === "Reviewed" && (
              <p><strong>Evaluation Result:</strong> {studentData.project.evaluationResult}</p>
            )}
            <button>Upload Project/Report</button>
            {studentData.project.submissionStatus === "Reviewed" && (
              <button>Download Evaluation Result</button>
            )}
          </div>

          {/* 7. Study Materials / Resources */}
          <div className="dashboard-section study-materials">
            <h2 className="section-title">Study Materials</h2>
            <ul>
              {studentData.studyMaterials.map((material, index) => (
                <li key={index}>
                  <a href={material.link} target="_blank" rel="noopener noreferrer">
                    {material.title} ({material.type})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 8. Live Session / Class Links */}
          <div className="dashboard-section live-sessions">
            <h2 className="section-title">Live Sessions</h2>
            <ul>
              {studentData.liveSessions.map((session, index) => (
                <li key={index}>
                  {session.title} - {session.date}, {session.time}
                  <button className="join-btn" onClick={() => window.open(session.link, "_blank")}>
                    Join
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* 9. Notice Board (Personalized) - Always show */}
      <div className="dashboard-section personalized-notices">
        <h2 className="section-title">Notices</h2>
        <ul>
          {studentData.notices.map((notice, index) => (
            <li key={index}>{notice}</li>
          ))}
        </ul>
      </div>

      {/* 10. Important Downloads - Always show */}
      <div className="dashboard-section downloads">
        <h2 className="section-title">Downloads</h2>
        <ul className='download-list'>
          <li><a href="#">Admit Card (if applicable)</a></li>
          <li><a href="#">Guidelines</a></li>
          <li><a href="#">Report Format</a></li>
          <li><a href="#">Certificate Instructions</a></li>
        </ul>
      </div>

      {/* Only show if batch is assigned */}
      {studentData.batchAssigned && (
        <>
          {/* 11. Feedback Form / Review */}
          <div className="dashboard-section feedback-form">
            <h2 className="section-title">Feedback</h2>
            <textarea placeholder="Your feedback"></textarea>
            <button className="submit-feedback-btn">Submit Feedback</button>
          </div>

          {/* 12. Support / Chat Box */}
          <div className="dashboard-section support-chat">
            <h2 className="section-title">Support</h2>
            <p>Chat functionality will be added here.</p>
          </div>

          {/* 13. Announcements / Events */}
          <div className="dashboard-section events">
            <h2 className="section-title">Events</h2>
            <div className="event-grid">
              {studentData.events.map((event, index) => (
                <div className="event-card" key={index}>
                  <h3>{event.title}</h3>
                  <p>{event.date}, {event.time}</p>
                  <button className="join-btn" onClick={() => window.open(event.link, "_blank")}>Join</button>
                </div>
              ))}
            </div>
          </div>

          {/* 14. Progress Bar or Tracker */}
          <div className="dashboard-section progress-tracker">
            <h2 className="section-title">Progress</h2>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: `${studentData.progress}%` }}></div>
            </div>
            <p>{studentData.progress}% Completed</p>
          </div>
        </>
      )}
    </div>
  );
}

export default StudentDashboard;
