// src/admin/documentVerification/DocumentRow.js
import React from 'react';

function DocumentRow({ document, onVerify, onReject }) {
  return (
    <tr className={document.status}>
      <td>{document.studentName}</td>
      <td>{document.trainingId}</td>
      <td>{document.documentType}</td>
      <td>{document.submittedDate}</td>
      <td>
        <span className={`status-badge ${document.status}`}>
          {document.status.charAt(0).toUpperCase() + document.status.slice(1)}
        </span>
      </td>
      <td>
        <div className="action-buttons">
          <button 
            className="view-btn"
            onClick={() => alert(`View document for ${document.studentName}`)}
          >
            View
          </button>
          
          {document.status === 'pending' && (
            <>
              <button 
                className="verify-btn"
                onClick={onVerify}
              >
                Verify
              </button>
              <button 
                className="reject-btn"
                onClick={onReject}
              >
                Reject
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

export default DocumentRow;
