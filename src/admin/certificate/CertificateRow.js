// src/admin/certificate/CertificateRow.js
import React from 'react';

function CertificateRow({ student, onApprove, onRevoke }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.trainingId}</td>
      <td>{student.domain}</td>
      <td>{student.duration}</td>
      <td>
        <span className={`status-badge ${student.feesSubmitted ? 'success' : 'pending'}`}>
          {student.feesSubmitted ? '💰 Paid' : '❌ Not Paid'}
        </span>
      </td>
      <td>
        <span className={`attendance-badge ${student.attendancePercentage >= 75 ? 'success' : 'warning'}`}>
          {student.attendancePercentage}%
        </span>
      </td>
      <td>
        <span className={`status-badge ${student.certificateApproved ? 'success' : 'pending'}`}>
          {student.certificateApproved ? '✅ Approved' : '❌ Pending'}
        </span>
      </td>
      <td>
        <div className="action-buttons">
          {!student.certificateApproved ? (
            <button 
              className="approve-btn"
              onClick={onApprove}
              disabled={!student.feesSubmitted || student.attendancePercentage < 75}
            >
              Approve Certificate
            </button>
          ) : (
            <>
              <button 
                className="view-btn"
                onClick={() => alert(`View certificate for ${student.name}`)}
              >
                View Certificate
              </button>
              <button 
                className="revoke-btn"
                onClick={onRevoke}
              >
                Revoke Access
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

export default CertificateRow;
