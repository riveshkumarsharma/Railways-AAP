// src/admin/challan/ChallanRow.js
import React from 'react';

function ChallanRow({ student, onMarkStamped, onMarkPaid }) {
  return (
    <tr>
      <td>{student.name}</td>
      <td>{student.trainingId}</td>
      <td>{student.challanId}</td>
      <td>{student.domain}</td>
      <td>₹{student.fees}</td>
      <td>
        <span className={`status-badge ${student.challanStamped ? 'success' : 'pending'}`}>
          {student.challanStamped ? '✅ Stamped' : '❌ Not Stamped'}
        </span>
      </td>
      <td>
        <span className={`status-badge ${student.feesSubmitted ? 'success' : 'pending'}`}>
          {student.feesSubmitted ? '💰 Paid' : '❌ Not Paid'}
        </span>
      </td>
      <td>
        <div className="action-buttons">
          <button 
            className="view-btn"
            onClick={() => alert(`View challan for ${student.name}`)}
          >
            View Challan
          </button>
          
          {!student.challanStamped && (
            <button 
              className="stamp-btn"
              onClick={onMarkStamped}
            >
              Mark Stamped
            </button>
          )}
          
          {student.challanStamped && !student.feesSubmitted && (
            <button 
              className="paid-btn"
              onClick={onMarkPaid}
            >
              Mark Paid
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}

export default ChallanRow;
