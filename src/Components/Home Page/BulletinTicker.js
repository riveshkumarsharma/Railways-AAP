import React from 'react';

const BulletinTicker = () => {
  const alerts = [
    '📢 Registration for Summer Training 2025 is now open!',
    '⚠️ STC portal will be under maintenance on 22nd July (10 PM – 2 AM).',
    '🎓 Last date to upload internship certificates is 31st July.',
    '📄 Download your ID Card from the Dashboard section.',
  ];

  return (
    <div className="ticker-container">
      <div className="ticker-title">Bulletin:</div>
      <div className="ticker-wrapper">
        <div className="ticker-move">
          {alerts.map((alert, index) => (
            <span key={index} className="ticker-item">{alert}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BulletinTicker;
