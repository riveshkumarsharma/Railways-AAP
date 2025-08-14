// src/admin/certificate/generateCertificate.js
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

/**
 * Generates a certificate PDF for a student
 * @param {Object} student - Student data object
 * @returns {Blob} - PDF file as a Blob
 */
export function generateCertificate(student) {
  // Create new PDF document
  const doc = new jsPDF({
    orientation: 'landscape',
    unit: 'mm',
    format: 'a4'
  });
  
  // Set background color
  doc.setFillColor(252, 252, 252);
  doc.rect(0, 0, 297, 210, 'F');
  
  // Add border
  doc.setDrawColor(31, 59, 87);
  doc.setLineWidth(3);
  doc.rect(10, 10, 277, 190);
  
  // Add header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(24);
  doc.setTextColor(31, 59, 87);
  doc.text('CERTIFICATE OF COMPLETION', 148.5, 40, { align: 'center' });
  
  // Add certificate text
  doc.setFontSize(12);
  doc.setTextColor(0, 0, 0);
  doc.text('This is to certify that', 148.5, 60, { align: 'center' });
  
  // Add student name
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(student.name, 148.5, 75, { align: 'center' });
  
  // Add training ID
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`Training ID: ${student.trainingId}`, 148.5, 85, { align: 'center' });
  
  // Add completion text
  doc.text('has successfully completed the', 148.5, 95, { align: 'center' });
  
  // Add course name
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`${student.domain} Training Program`, 148.5, 105, { align: 'center' });
  
  // Add duration
  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text(`for a duration of ${student.duration}`, 148.5, 115, { align: 'center' });
  
  // Add date range
  doc.text(`from ${student.startDate} to ${student.endDate}`, 148.5, 125, { align: 'center' });
  
  // Add signature placeholders
  doc.line(60, 160, 110, 160);
  doc.text('Training Coordinator', 85, 170, { align: 'center' });
  
  doc.line(187, 160, 237, 160);
  doc.text('Director', 212, 170, { align: 'center' });
  
  // Add stamp placeholder
  doc.setDrawColor(200, 200, 200);
  doc.setLineDashPattern([1, 1], 0);
  doc.circle(148.5, 155, 25);
  doc.text('Official Stamp', 148.5, 170, { align: 'center' });
  
  // Add issue date
  doc.setFontSize(10);
  doc.text(`Issued on: ${new Date().toLocaleDateString()}`, 148.5, 190, { align: 'center' });
  
  // Return the PDF as a blob
  return doc.output('blob');
}

/**
 * Downloads the certificate PDF
 * @param {Object} student - Student data object
 */
export function downloadCertificate(student) {
  const pdf = generateCertificate(student);
  const url = URL.createObjectURL(pdf);
  
  // Create a link and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = `Certificate_${student.trainingId}.pdf`;
  link.click();
  
  // Clean up
  URL.revokeObjectURL(url);
}
