import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

const SelectionTracker = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulated fetch - Replace with actual API later
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = [
          { name: 'Amit Sharma', email: 'amit@example.com', status: 'Verified' },
          { name: 'Pooja Verma', email: 'pooja@example.com', status: 'Shortlisted' },
          { name: 'Ravi Kumar', email: 'ravi@example.com', status: 'Final Selected' },
        ];
        setStudents(data);
      } catch (err) {
        console.error('Error loading selection data:', err);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const stages = ['Form Submitted', 'Verified', 'Shortlisted', 'Final Selected'];

  const getStageClass = (stage, current) => {
    const index = stages.indexOf(stage);
    const currentIndex = stages.indexOf(current);
    if (index < currentIndex) return 'completed';
    if (index === currentIndex) return 'current';
    return '';
  };

  return (
    <div className='fixed-sidebar'>
    <Sidebar/>
    <div className="selection-tracker-container">
      <h2 className="tracker-title">Selection Process Tracker</h2>
      {loading ? (
        <p className="loading">Loading student progress...</p>
      ) : (
        <div className="student-trackers">
          {students.map((student, index) => (
            <div className="student-card" key={index}>
              <h3>{student.name}</h3>
              <p>{student.email}</p>
              <div className="progress-bar">
                {stages.map((stage, idx) => (
                  <div
                    key={idx}
                    className={`stage ${getStageClass(stage, student.status)}`}
                  >
                    <span>{stage}</span>
                    {idx < stages.length - 1 && <div className="line" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default SelectionTracker;
