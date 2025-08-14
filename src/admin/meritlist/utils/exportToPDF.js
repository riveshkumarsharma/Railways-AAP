// src/admin/meritlist/utils/exportToPDF.js
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

export function exportToPDF(students, title = 'Student List') {
  // Initialize the PDF document
  const doc = new jsPDF();
  
  // Add title
  doc.setFontSize(18);
  doc.text(title, 14, 22);
  doc.setFontSize(11);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 14, 30);
  
  // Define the table data
  const tableColumn = ["Name", "Email", "College", "Domain", "Status", "Training ID"];
  const tableRows = [];

  // Add data to rows
  students.forEach(student => {
    const studentData = [
      student.name,
      student.email,
      student.college,
      student.domain,
      student.status.charAt(0).toUpperCase() + student.status.slice(1),
      student.trainingId || 'N/A'
    ];
    tableRows.push(studentData);
  });

  // Generate the table
  autoTable(doc, {
    head: [tableColumn],
    body: tableRows,
    startY: 40,
    theme: 'striped',
    headStyles: {
      fillColor: [31, 59, 87],
      textColor: [255, 255, 255],
      fontStyle: 'bold'
    },
    styles: {
      overflow: 'linebreak',
      cellWidth: 'wrap'
    },
    columnStyles: {
      0: { cellWidth: 40 }, // Name
      1: { cellWidth: 50 }, // Email
      2: { cellWidth: 40 }, // College
      3: { cellWidth: 30 }, // Domain
      4: { cellWidth: 20 }, // Status
      5: { cellWidth: 70 }  // Training ID
    }
  });
  
  // Save the PDF
  doc.save(`${title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.pdf`);
}
