import { useState } from 'react';
import '../CSS/Certificates.css';

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const technicalCertificates = [
    {
      title: "AWS Cloud Solution Essentials",
      issuer: "Amazon Web Services",
      description: "Professional certification demonstrating expertise in designing distributed systems on AWS.",
      image: "/projects/aws_cert.png",
      issueDate: "2023-06-15",
      credentialId: "ID 6KLEWFCYP2IG",
      isVerified: true,
    },
    {
      title: "React Basics Certification",
      issuer: "Meta (Facebook)",
      description: "Official certification for React development skills and best practices.",
      image: "/projects/react_cert.png",
      issueDate: "2023-04-10",
      credentialId: "META-REACT-456789",
      verifyUrl: "https://developers.facebook.com/certifications",
      isVerified: true,
    },
     {
      title: "Getting Started with Git and GitHub",
      issuer: "IMB",
      description: "Certification for mastering Git and GitHub version control systems.",
      image: "/projects/git_cert.png",
      issueDate: "2023-09-15",
      credentialId: "IMB-GIT-123456",
      verifyUrl: "https://www.ibm.com/certification",
      isVerified: true,
    },
    {
      title: "Python",
      issuer: "Kaggle",
      description: "Certification validating proficiency in Python programming language.",
      image: "/projects/python_cert.png",
      issueDate: "2022-12-05",
      credentialId: "PCPP-123456",
      verifyUrl: "https://pythoninstitute.org/certification",
      isVerified: true,
    },
   {
      title: "Introduction to Machine Learning",
      issuer: "Kaggle",
      description: "Certification for foundational knowledge in machine learning concepts and techniques.",
      image: "/projects/ml_cert.png",
      issueDate: "2022-12-05",
      credentialId: "PCPP-123456",
      verifyUrl: "https://pythoninstitute.org/certification",
      isVerified: true,
    },
  ];

  const sportsCertificates = [
    {
      title: "Karate Certificate of Honor",
      issuer: "Karate Association",
      description: "Certificate of honor for kumite achievements.",
      image: "/projects/karate_cert.png",
      issueDate: "2024-06-01",
      credentialId: "KARATE-001",
      verifyUrl: null,
      isVerified: false,
    },
    {
      title: "Zonal Music Competition - Instrumental",
      issuer: "Music Education Board",
      description: "Certificate in zonal music competition.",
      image: "/projects/music_cert1.png",
      issueDate: "2024-04-15",
      credentialId: "MUSIC-001",
      verifyUrl: null,
      isVerified: false,
    },
   
  ];


  return (
    <section className="certificates-page">
      <div className="certificates-header">
        <h2>My Certificates</h2>
        <p className="certificates-count">{technicalCertificates.length + sportsCertificates.length} Certificates</p>
      </div>

      <div className="certificates-category">
        <h3>Technical Certifications</h3>
        <div className="certificates-grid">
          {technicalCertificates.map((certificate, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-image-container">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/141414/eaeaea?text=Certificate+Image';
                  }}
                />
              </div>

              <div className="certificate-content">
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-description">{certificate.description}</p>
                <p className="certificate-issuer">Issued by: {certificate.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="certificates-category">
        <h3>Sports & Other Achievements</h3>
        <div className="certificates-grid">
          {sportsCertificates.map((certificate, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-image-container">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="certificate-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/141414/eaeaea?text=Certificate+Image';
                  }}
                />
              </div>

              <div className="certificate-content">
                <h3 className="certificate-title">{certificate.title}</h3>
                <p className="certificate-description">{certificate.description}</p>
                <p className="certificate-issuer">Issued by: {certificate.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}