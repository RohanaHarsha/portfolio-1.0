import '../CSS/Experience.css';

export default function Experience() {
  const experiences = [
    {
      role: "Software Engineering Intern",
      company: "National Science Foundation",
      location: "National Science Foundation, Vidya Mawatha, Colombo 07",
      duration: "May 2025 - Nov 2024",
      type: "Internship",
      description: "Designed and developed employee and asset management platform used by HR and store keepers within the company.",
      responsibilities: [
        "Developed and maintained web applications using Flask / React and modern JavaScript",
        "Collaborated with cross-functional teams to implement new features",
        "Participated in code reviews and followed best practices for software development",
        "Worked on improving user experience and application performance",
        "Assisted in network administration tasks as needed",
        "Wrote unit and integration tests to ensure code quality"

      ],
      technologies: ["React", "Flask", "Git", "REST APIs"],
      achievements: [
        "reducing manual documentation by 90% through automation",
        "Handled more than 100+ experts in the database"
      ]
    },
    // Add more experiences here as needed
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      location: "Remote",
      duration: "Jan 2023 - Present",
      type: "Freelance",
      description: "Building custom websites and web applications for small businesses and startups.",
      responsibilities: [
        "Designed and developed responsive websites from scratch",
        "Worked directly with clients to understand requirements",
        "Provided ongoing maintenance and support",
        "Optimized websites for SEO and performance"
      ],
      technologies: ["React", "HTML", "CSS", "JavaScript","Flask"],
      achievements: [
        "Completed 4+ projects with 100% client satisfaction",
        
      ]
    }
  ];

  return (
    <section className="experience-page">
      <div className="experience-header">
        <h2>Work Experience</h2>
        <p className="experience-subtitle">My professional journey and contributions</p>
      </div>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker">
              <div className="marker-dot"></div>
              <div className="marker-line"></div>
            </div>

            <div className="experience-card">
              <div className="experience-header-section">
                <div className="experience-title-group">
                  <h3>{exp.role}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="duration">{exp.duration}</span>
                  <span className={`type-badge ${exp.type.toLowerCase()}`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="experience-description">{exp.description}</p>

              <div className="experience-section">
                <h4>Key Responsibilities</h4>
                <ul className="responsibilities-list">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>

              {exp.achievements && exp.achievements.length > 0 && (
                <div className="experience-section">
                  <h4>Achievements</h4>
                  <ul className="achievements-list">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="experience-technologies">
                <h4>Technologies Used</h4>
                <div className="tech-tags">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}