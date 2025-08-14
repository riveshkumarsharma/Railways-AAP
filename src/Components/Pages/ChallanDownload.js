import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import html2pdf from 'html2pdf.js';

function ChallanDownload() {
  const navigate = useNavigate();
  const challanRef = useRef();
  const [challanGenerated, setChallanGenerated] = useState(false);

  const studentData = {
    name: "Smriti Pandey",
    trainingId: "TR202300001",
    email: "smriti@example.com",
    college: "University of Lucknow",
    domain: "Web Development",
    fees: 250,
    validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
  };

  const handleGenerateChallan = () => {
    setChallanGenerated(true);
  };

  const generatePDF = () => {
    const element = challanRef.current;
    element.style.display = 'block';

    const opt = {
      margin: 1,
      filename: `Railway_Challan_${studentData.trainingId}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save().then(() => {
      element.style.display = 'none';
    });
  };

  return (
    <div className="challan-container">
      <h1>Fee Challan Generation</h1>

      {!challanGenerated ? (
        <div className="challan-info">
          <p>You have been selected for the summer training program. Please generate your fee challan to proceed with the payment.</p>

          <div className="student-details">
            <h2>Student Details</h2>
            <p><strong>Name:</strong> {studentData.name}</p>
            <p><strong>Training ID:</strong> {studentData.trainingId}</p>
            <p><strong>Email:</strong> {studentData.email}</p>
            <p><strong>College:</strong> {studentData.college}</p>
            
            <p><strong>Fee Amount:</strong> ₹{studentData.fees}</p>
          </div>

          <button className="generate-challan-btn" onClick={handleGenerateChallan}>
            Generate Challan
          </button>
        </div>
      ) : (
        <div className="challan-preview">
          <div className="challan-card">
            <div className="challan-header">
              <h2>Fee Payment Challan</h2>
              <p className="challan-id">Challan #: CH{Math.floor(Math.random() * 1000000)}</p>
            </div>

            <div className="challan-body">
              <div className="challan-student-details">
                <p><strong>Name:</strong> {studentData.name}</p>
                <p><strong>Training ID:</strong> {studentData.trainingId}</p>
                <p><strong>Email:</strong> {studentData.email}</p>
                <p><strong>College:</strong> {studentData.college}</p>
               
              </div>

              <div className="challan-fee-details">
                <p><strong>Fee Amount:</strong> ₹{studentData.fees}</p>
                <p><strong>Valid Until:</strong> {studentData.validUntil}</p>
              </div>

              <div className="challan-instructions">
                <h3>Instructions:</h3>
                <ol>
                  <li>Download and print this challan</li>
                  <li>Visit the training office for challan stamping</li>
                  <li>Submit the fees at the designated counter</li>
                  <li>Keep a copy of the stamped challan for your records</li>
                </ol>
              </div>

              <div className="challan-signature">
                <div className="signature-box">
                  <p>Student Signature</p>
                </div>
                <div className="signature-box">
                  <p>Office Stamp</p>
                </div>
              </div>
            </div>
          </div>

          <div className="challan-actions">
            <button className="download-challan-btn" onClick={generatePDF}>
              Download Challan (PDF)
            </button>

            <button className="back-btn" onClick={() => navigate('/student/dashboard')}>
              Back to Dashboard
            </button>
          </div>
        </div>
      )}

      {/* Hidden Challan Template for PDF Generation */}
      <div 
        ref={challanRef} 
        style={{ 
          display: 'none', 
          fontFamily: 'Arial, sans-serif',
          padding: '40px', 
          fontSize: '14px', 
          lineHeight: '1.8',
          backgroundColor: 'white',
          width: '210mm',
          minHeight: '297mm',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>उत्तर रेलवे</div>
        <div style={{ textAlign: 'left', fontWeight: '500', marginTop: '10px' }}>
          कार्यालय मुख्य कारखाना प्रबंधक,<br />
          लोको वर्कशाप, चारबाग, लखनऊ
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
          <span>संख्या - ..................</span>
          <span>दिनांक: {new Date().toLocaleDateString()}</span>
        </div>

        <div style={{ marginTop: '30px' }}>
          DCPM / CBS, LKO.<br />
          N. Rly, Lucknow.
        </div>

        <div style={{ marginTop: '30px', fontWeight: 'bold' }}>
          विषय- ग्रीष्म कालीन प्रशिक्षण का ₹250/- शुल्क जमा करने के सम्बंध में।
        </div>

        <div style={{ marginTop: '30px' }}>
          श्री/श्रीमती <strong>{studentData.name}</strong> का ₹250/- ग्रीष्म कालीन प्रशिक्षण शुल्क<br />
          को Dy. FA&CAO (W) / कारखाना, चारबाग के पक्ष में<br />
          मद संख्या: <strong>जेड-650-99</strong> में जमा करायें एवं पत्रवाहक को रसीद देने की कृपा करें।
        </div>

        <table style={{ width: '100%', marginTop: '30px', borderCollapse: 'collapse' }}>
          <tbody>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px', width: '40%' }}><strong>Name / नाम:</strong></td>
              <td style={{ padding: '8px' }}>{studentData.name}</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}><strong>Training ID / प्रशिक्षण आईडी:</strong></td>
              <td style={{ padding: '8px' }}>{studentData.trainingId}</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}><strong>College / कॉलेज:</strong></td>
              <td style={{ padding: '8px' }}>{studentData.college}</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #ddd' }}>
              <td style={{ padding: '8px' }}><strong>Domain / डोमेन:</strong></td>
              <td style={{ padding: '8px' }}>{studentData.domain}</td>
            </tr>
          </tbody>
        </table>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '60px' }}>
          <div style={{ width: '30%', textAlign: 'center' }}>
            <div style={{ borderBottom: '1px solid #000', height: '40px' }}></div>
            <p>छात्र के हस्ताक्षर<br />(Student Signature)</p>
          </div>
          
          <div style={{ width: '30%', textAlign: 'center' }}>
            <div style={{ textAlign: 'right', whiteSpace: 'pre-line', fontWeight: '500' }}>
              कृते निदेशक<br />
              पर्यवेक्षक प्रशिक्षण केंद्र,<br />
              चारबाग, लखनऊ।
            </div>
          </div>
        </div>

        <div style={{ marginTop: '60px', fontSize: '12px', borderTop: '1px dashed #000', paddingTop: '10px' }}>
          <p><strong>Note:</strong> Please bring this challan while visiting the office for payment.</p>
          <p><strong>Generated on:</strong> {new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default ChallanDownload;
