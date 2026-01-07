import '../CSS/Skills.css';

export default function Skills() {
  const Languages = [
    { name: "Python", level: 90 },
    { name: "JavaScript (ES6+)", level: 90 },
    { name: "TypeScript", level: 20 },
    { name: "HTML & CSS", level: 90 },
    { name: "PHP", level: 90 },
  ];

  const frameworks = [
    { name: "Flask", level: 60 },
    { name: "React", level: 85 },
    { name: "Laravel", level: 50 },
  ];

  const tools = [
    { name: "Git & GitHub", level: 85 },
    { name: "GitLabs", level: 25 },
    { name: "Docker", level: 40 },
  ];

  const databases = [
    { name: "MySQL", level: 20 },
    { name: "MongoDB", level: 65 },
    { name: "PostgreSQL", level: 45 }
  ];

  const softSkills = [
    { name: "Problem Solving", level: 90 },
    { name: "Communication", level: 85 },
    { name: "Team Collaboration", level: 88 },
    { name: "Time Management", level: 82 },
    { name: "Adaptability", level: 87 },
    { name: "Critical Thinking", level: 85 }
  ];

  const allTechnicalSkills = [...Languages, ...frameworks, ...tools, ...databases];

  return (
    <section className="skills-page">
      <div className="skills-header">
        <h2>Skills & Expertise</h2>
        <p className="skills-subtitle">Technical proficiencies and professional competencies</p>
      </div>

      <div className="skills-container">
        {/* LANGUAGES */}
        <div className="skills-section">
          <div className="section-title">
            <h3>Languages</h3>
            <span className="skill-count">{Languages.length} Skills</span>
          </div>

          <div className="hard-skills-grid">
            {Languages.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FRAMEWORKS */}
        <div className="skills-section">
          <div className="section-title">
            <h3>Frameworks</h3>
            <span className="skill-count">{frameworks.length} Skills</span>
          </div>

          <div className="hard-skills-grid">
            {frameworks.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TOOLS */}
        <div className="skills-section">
          <div className="section-title">
            <h3>Tools & DevOps</h3>
            <span className="skill-count">{tools.length} Skills</span>
          </div>

          <div className="hard-skills-grid">
            {tools.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DATABASES */}
        <div className="skills-section">
          <div className="section-title">
            <h3>Databases</h3>
            <span className="skill-count">{databases.length} Skills</span>
          </div>

          <div className="hard-skills-grid">
            {databases.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROFESSIONAL SKILLS */}
        <div className="skills-section">
          <div className="section-title">
            <h3>Professional Skills</h3>
            <span className="skill-count">{softSkills.length} Skills</span>
          </div>

          <div className="soft-skills-list">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-item">
                <div className="soft-skill-header">
                  <h4>{skill.name}</h4>
                  <span className="skill-percentage-soft">{skill.level}%</span>
                </div>
                
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}