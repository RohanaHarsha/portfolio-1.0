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
      credentialId: "AWS-123456789",
      verifyUrl: "https://aws.amazon.com/verification",
      isVerified: true,
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      description: "Certification for building scalable and highly available applications on Google Cloud Platform.",
      image: "/projects/gcp_cert.png",
      issueDate: "2023-08-20",
      credentialId: "GCP-987654321",
      verifyUrl: "https://cloud.google.com/certification",
      isVerified: true,
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      description: "Official certification for React development skills and best practices.",
      image: "/projects/react_cert.png",
      issueDate: "2023-04-10",
      credentialId: "META-REACT-456789",
      verifyUrl: "https://developers.facebook.com/certifications",
      isVerified: true,
    },
    {
      title: "Python Programming Certification",
      issuer: "Python Institute",
      description: "Certification validating proficiency in Python programming language.",
      image: "/projects/python_cert.png",
      issueDate: "2022-12-05",
      credentialId: "PCPP-123456",
      verifyUrl: "https://pythoninstitute.org/certification",
      isVerified: true,
    },
    {
      title: "JavaScript Fundamentals",
      issuer: "FreeCodeCamp",
      description: "Completed JavaScript algorithms and data structures certification.",
      image: "/projects/js_cert.png",
      issueDate: "2023-07-01",
      credentialId: "FCC-JS-789",
      verifyUrl: "https://freecodecamp.org/certification",
      isVerified: true,
    },
  ];

  const sportsCertificates = [
    {
      title: "Football Championship",
      issuer: "Local Sports Association",
      description: "Won first place in regional football championship.",
      image: "/projects/football_cert.png",
      issueDate: "2024-05-15",
      credentialId: "SPORT-001",
      verifyUrl: null,
      isVerified: false,
    },
    {
      title: "Swimming Competition",
      issuer: "City Swimming Club",
      description: "Gold medal in 100m freestyle swimming competition.",
      image: "/projects/swimming_cert.png",
      issueDate: "2024-03-20",
      credentialId: "SPORT-002",
      verifyUrl: null,
      isVerified: false,
    },
    {
      title: "Basketball Tournament",
      issuer: "School Sports Department",
      description: "Team captain and MVP in inter-school basketball tournament.",
      image: "/projects/basketball_cert.png",
      issueDate: "2023-11-10",
      credentialId: "SPORT-003",
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
        <h3>Sports Achievements</h3>
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