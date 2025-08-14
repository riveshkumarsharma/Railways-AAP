import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const MeritList = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedDomain, setSelectedDomain] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = [
          { name: 'Amit Sharma', email: 'amit@example.com', domain: 'Computer Science', chosen: 'AI', score: 95 },
          { name: 'Pooja Verma', email: 'pooja@example.com', domain: 'Electronics', chosen: 'IoT', score: 92 },
          { name: 'Ravi Kumar', email: 'ravi@example.com', domain: 'Mechanical', chosen: 'Robotics', score: 90 },
        ];
        const sorted = data.sort((a, b) => b.score - a.score);
        setStudents(sorted);
        setFilteredStudents(sorted);
      } catch (error) {
        console.error('Failed to fetch merit list:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedDomain === 'All') {
      setFilteredStudents(students);
    } else {
      setFilteredStudents(students.filter(student => student.domain === selectedDomain));
    }
  }, [selectedDomain, students]);

  const domains = ['All', ...new Set(students.map(student => student.domain))];

  // 🧾 DOWNLOAD AS PDF
  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text(`Merit List - ${selectedDomain}`, 14, 15);
    const tableColumn = ['Rank', 'Name', 'Email', 'Score', 'Domain', 'Chosen'];
    const tableRows = filteredStudents.map((student, index) => [
      index + 1,
      student.name,
      student.email,
      student.score,
      student.domain,
      student.chosen,
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save(`Merit_List_${selectedDomain}.pdf`);
  };

  // 📊 DOWNLOAD AS EXCEL
  const downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(
      filteredStudents.map((s, i) => ({
        Rank: i + 1,
        Name: s.name,
        Email: s.email,
        Score: s.score,
        Domain: s.domain,
        Chosen: s.chosen,
      }))
    );
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'MeritList');
    const xlsBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const fileData = new Blob([xlsBuffer], { type: 'application/octet-stream' });
    saveAs(fileData, `Merit_List_${selectedDomain}.xlsx`);
  };

  return (
    <div className="fixed-sidebar">
      <Sidebar />
      <div className="merit-list-container">
        <h2 className="merit-title">Final Merit List</h2>

        {/* Domain Filter */}
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="domain-filter" style={{ marginRight: '10px', fontWeight: 'bold' }}>Filter by Domain:</label>
          <select
            id="domain-filter"
            value={selectedDomain}
            onChange={(e) => setSelectedDomain(e.target.value)}
            style={{ padding: '6px', borderRadius: '4px' }}
          >
            {domains.map((domain, idx) => (
              <option key={idx} value={domain}>{domain}</option>
            ))}
          </select>
        </div>

        {/* Download Buttons */}
        <div style={{ marginBottom: '16px' }}>
          <button onClick={downloadPDF} style={{ marginRight: '10px', padding: '6px 12px', background: '#007bff', color: '#fff', border: 'none', borderRadius: '4px' }}>Download PDF</button>
          <button onClick={downloadExcel} style={{ padding: '6px 12px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px' }}>Download Excel</button>
        </div>

        {/* Table */}
        {loading ? (
          <p className="loading-text">Loading merit list...</p>
        ) : (
          <table className="merit-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Student Name</th>
                <th>Email</th>
                <th>Score (%)</th>
                <th>Domain</th>
                <th>Chosen Domain</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.score}</td>
                  <td>{student.domain}</td>
                  <td>{student.chosen}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MeritList;
