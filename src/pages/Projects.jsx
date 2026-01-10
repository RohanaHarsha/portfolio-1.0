import { useState } from 'react';
import '../CSS/Projects.css';



export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Daffodil Zone",
      description: "A real-world web app built with React. Focused on performance and clean state management.",
      image: "/projects/daffodil_zone.png", // Add your project images to public/projects/
      technologies: ["React", "JavaScript", "Flask", "vercel", "render"],
      liveUrl: "https://daffodilzone.vercel.app/",
      githubUrl: "https://github.com/RohanaHarsha/daffodilzone",
      isLive: true,

    },
    {
      title: "Pocket_Base_Test-Guest_Management",
      description: "This is a Simple UI to to test newest database technology PocketBase. It is simple, reliable and effective and beginner and user friendly. If you want to to try it be my guest, clone the repo and enjoy",
      image: "/projects/pocketbase.png",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://pocketbaseproject.vercel.app/",
      githubUrl: "https://github.com/RohanaHarsha/-Pocket_Base_Test-Guest_Management",
      isLive: true,

    },
    {
      title: "Word-classification-model",
      description: "This model was created to collaborate with daffodilzone website and enhances search functionality by allowing users to enter natural language queries. It extracts relevant keywords related to real estate and housing, ensuring more accurate and reliable search results.",
      image: "/projects/classification_model.png",
      technologies: ["Python", "Tensorflow", "NumPy"],
      liveUrl: "",
      githubUrl: "https://github.com/RohanaHarsha/Word-classification-model",
      isLive: false,

    },
    {
      title: "Mcp-resume-server",
      description: "Mobile-responsive dashboard with real-time data visualization and analytics.",
      image: "/projects/project4.jpg",
      technologies: ["React", "Chart.js", "API"],
      liveUrl: "https://your-live-site.com",
      githubUrl: "https://github.com/yourusername/project-four",
      isLive: false,

    },
  ];


  return (

    <section className="projects-page">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p className="projects-count">{projects.length} Projects</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/400x300/141414/eaeaea?text=Project+Image';
                }}
              />
            </div>


            <div className="project-content">
              <div className="project-number">0{index + 1}</div>

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div className="project-actions">
                {project.isLive && project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="action-btn live">
                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                      <path d="M14 3H17V6M17 3L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Live Demo
                  </a>
                )}
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="action-btn github">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.48c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.88-1.17-.88-1.17-.72-.49.06-.48.06-.48.8.06 1.22.82 1.22.82.71 1.21 1.85.86 2.3.66.07-.52.28-.86.5-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.67 7.67 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0010 2z" fill="currentColor" />
                  </svg>
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}