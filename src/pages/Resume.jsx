import { useState } from 'react';
import '../CSS/Resume.css';

export default function Resume() {
  const resumes = [
    {
      id: 'analyst',
      label: 'for entry level Data Analyst / BI Resume',
      subtitle: 'Tailored for Data Analyst & BI roles',
      path: '/rohana_wickramarathna-analyst.pdf',
      downloadName: 'rohana_analyst_cv.pdf',
    },
    {
      id: 'erp',
      label: 'For ERP Support, SAP & Odoo entry-level roles',
      subtitle: 'Tailored for ERP Consultant roles',
      path: '/rohana_wickramarathna-erp.pdf',
      downloadName: 'rohana_erp_cv.pdf',
    },
  ];

  return (
    <section className="resume-page">
      <div className="resume-header">
        <div className="resume-title">
          <h2>Resume</h2>
          <p className="resume-subtitle">View or download my resumes</p>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '2rem',
          justifyContent: 'center',
        }}
      >
        {resumes.map((resume) => (
          <ResumeBlock key={resume.id} resume={resume} />
        ))}
      </div>
    </section>
  );
}

function ResumeBlock({ resume }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resume.path;
    link.download = resume.downloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ flex: '1 1 400px', minWidth: '300px' }}>
      <div className="resume-header">
        <div className="resume-title">
          <h3>{resume.label}</h3>
          <p className="resume-subtitle">{resume.subtitle}</p>
        </div>

        <button onClick={handleDownload} className="download-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3V13M10 13L6 9M10 13L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Download
        </button>
      </div>

      <div className="resume-viewer">
        {isLoading && (
          <div className="loading-indicator">
            <div className="spinner"></div>
            <p>Loading resume...</p>
          </div>
        )}

        <iframe
          src={`${resume.path}#toolbar=0&navpanes=0&scrollbar=1`}
          title={resume.label}
          className="pdf-frame"
          onLoad={() => setIsLoading(false)}
        />
      </div>

      <div className="resume-actions">
        <button onClick={handleDownload} className="action-button primary">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M10 3V13M10 13L6 9M10 13L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Download PDF
        </button>

        <a href={resume.path} target="_blank" rel="noopener noreferrer" className="action-button secondary">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M14 3H17V6M17 3L10 10M17 3V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 10V15H5V6H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Open in New Tab
        </a>
      </div>
    </div>
  );
}