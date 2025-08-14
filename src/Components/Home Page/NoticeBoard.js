import React, { useState, useEffect } from 'react';

function NoticeBoard() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch('/api/notices'); // Replace with actual API
        if (response.ok) {
          const data = await response.json();
          setNotices(data);
        } else {
          console.error('Failed to fetch notices');
        }
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();

    const intervalId = setInterval(fetchNotices, 300000); // Refresh every 5 minutes
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="notice-board-container">
      <h2 className="notice-heading">Announcements</h2>
      {notices.length > 0 ? (
        <ul className="notice-list">
          {notices.map((notice, index) => (
            <li key={index} className="notice-item">
              <h3 className="notice-title">{notice.title}</h3>
              <p className="notice-content">{notice.content}</p>
              {notice.date && (
                <small className="notice-date">
                  Posted on: {new Date(notice.date).toLocaleDateString()}
                </small>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-notice">No announcements at this time.</p>
      )}
    </div>
  );
}

export default NoticeBoard;
