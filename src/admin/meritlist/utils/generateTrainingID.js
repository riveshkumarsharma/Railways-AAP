// src/admin/meritlist/utils/generateTrainingID.js
export function generateTrainingID(studentId) {
  // Format: TR + Year + Padded Student ID (4 digits)
  const year = new Date().getFullYear();
  const paddedId = String(studentId).padStart(4, '0');
  return `TR${year}${paddedId}`;
}
