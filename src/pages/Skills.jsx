import '../CSS/Skills.css';

export default function Skills() {
  const Languages = [
    { name: "Python", level: 90, category: "Language" },
    { name: "JavaScript (ES6+)", level: 90, category: "Language" },
    { name: "TypeScript", level: 20, category: "Language" },
    { name: "HTML & CSS", level: 90, category: "Languages" },
    { name: "PHP", level: 90, category: "Language" },
  ];
  const frameworks = [
    { name: "Flask", level: 60, category: "Framework" },
    { name: "React", level: 85, category: "Framework" },
    { name: "Laravel", level: 50, category: "Framework" },
  ];

  const tools = [
    { name: "Git & GitHub", level: 85, category: "Tool" },
    { name: "GitLabs", level: 25, category: "Tool" },
    { name: "Docker", level: 40, category: "Tool" },

  ];

  const databases = [

    { name: "MySql", level: 20, category: "Database" },
    { name: "MongoDB", level: 65, category: "Database" },
    { name: "REST APIs", level: 80, category: "Backend" }
  ];

  const softSkills = [
    { name: "Problem Solving", level: 90, icon: "🧩" },
    { name: "Communication", level: 85, icon: "💬" },
    { name: "Team Collaboration", level: 88, icon: "🤝" },
    { name: "Time Management", level: 82, icon: "⏰" },
    { name: "Adaptability", level: 87, icon: "🔄" },
    { name: "Critical Thinking", level: 85, icon: "🧠" }
  ];

  return (
    <section className="skills-page">
      <div className="skills-header">
        <h2>Skills & Expertise</h2>
        <p className="skills-subtitle">Technical proficiencies and professional competencies</p>
      </div>

      <div className="skills-container">
        {/* HARD SKILLS */}
        <div className="skills-section">
          <div className="section-title">
            <h3>Technical Skills</h3>
            <span className="skill-count">{Languages.length} Skills</span>
          </div>
          <h4>
            Programming Languages
          </h4>
          <div className="hard-skills-grid">
            {Languages.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div>
                    <h4>{skill.name}</h4>
                    <span className="skill-category">{skill.category}</span>
                  </div>
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

          <h4>
            Frameworks 
          </h4>
          <div className="hard-skills-grid">
            {frameworks.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div>
                    <h4>{skill.name}</h4>
                    <span className="skill-category">{skill.category}</span>
                  </div>
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

          <h4>
            Tools & Platforms
          </h4>
          <div className="hard-skills-grid">
            {tools.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div>
                    <h4>{skill.name}</h4>
                    <span className="skill-category">{skill.category}</span>
                  </div>
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

          <h4>
            Databases 
          </h4>
          <div className="hard-skills-grid">
            {databases.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-header">
                  <div>
                    <h4>{skill.name}</h4>
                    <span className="skill-category">{skill.category}</span>
                  </div>
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

        {/* SOFT SKILLS */}
        <div className="skills-section">
          <div className="section-title">
            <h3>Soft Skills</h3>
            <span className="skill-count">{softSkills.length} Skills</span>
          </div>

          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="soft-skill-card">
                <div className="soft-skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>

                <div className="level-dots">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`dot ${i < Math.round(skill.level / 20) ? 'active' : ''}`}
                    ></span>
                  ))}
                </div>

                <span className="skill-level-text">
                  {skill.level >= 90 ? 'Expert' :
                    skill.level >= 80 ? 'Advanced' :
                      skill.level >= 70 ? 'Proficient' : 'Intermediate'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}