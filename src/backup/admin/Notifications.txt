import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Dummy notifications
    const dummyData = [
      {
        id: 1,
        message: 'New student registration: Aryan Sharma',
        date: '2025-07-17',
        type: 'Registration',
        isRead: false,
      },
      {
        id: 2,
        message: 'Merit list uploaded successfully.',
        date: '2025-07-15',
        type: 'System',
        isRead: true,
      },
      {
        id: 3,
        message: 'Project "Smart Garbage Bin" approved by admin.',
        date: '2025-07-14',
        type: 'Approval',
        isRead: false,
      },
    ];
    setNotifications(dummyData);
  }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  return (
    <div className="fixed-sidebar">
      <Sidebar />
      <div className="admin-content">
        <h2>Admin Notifications</h2>
        {notifications.length === 0 ? (
          <p>No notifications available.</p>
        ) : (
          <ul className="notification-list">
            {notifications.map((note) => (
              <li
                key={note.id}
                className={`notification-item ${note.isRead ? 'read' : 'unread'}`}
              >
                <div>
                  <strong>{note.type}:</strong> {note.message}
                  <div className="notification-meta">{note.date}</div>
                </div>
                {!note.isRead && (
                  <button onClick={() => markAsRead(note.id)}>Mark as Read</button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Notifications;
