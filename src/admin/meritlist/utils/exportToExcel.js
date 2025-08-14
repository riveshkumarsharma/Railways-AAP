// src/admin/meritlist/utils/exportToExcel.js
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export function exportToExcel(students, title = 'Student List') {
  // Prepare the data
  const data = students.map(student => ({
    'Name': student.name,
    'Email': student.email,
    'College': student.college,
    'Branch': student.branch,
    'Domain': student.domain,
    'Status': student.status.charAt(0).toUpperCase() + student.status.slice(1),
    'Training ID': student.trainingId || 'N/A'
  }));
  
  // Create a worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);
  
  // Create a workbook
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Students');
  
  // Generate Excel file
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  
  // Save the file
  const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
  saveAs(blob, `${title.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.xlsx`);
}
