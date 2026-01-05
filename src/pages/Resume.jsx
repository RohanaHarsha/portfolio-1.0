import { useState } from 'react';
import '../CSS/Resume.css';

export default function Resume() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Path to your resume PDF in the public folder
  const resumePath = '/resume.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'rohana_2025_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="resume-page">
      <div className="resume-header">
        <div className="resume-title">
          <h2>Resume</h2>
          <p className="resume-subtitle">View or download my full resume</p>
        </div>
        
        <button onClick={handleDownload} className="download-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 3V13M10 13L6 9M10 13L14 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Download Resume
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
          src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=1`}
          title="Resume PDF Viewer"
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
        
        <a href={resumePath} target="_blank" rel="noopener noreferrer" className="action-button secondary">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M14 3H17V6M17 3L10 10M17 3V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 10V15H5V6H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Open in New Tab
        </a>
      </div>
    </section>
  );
}