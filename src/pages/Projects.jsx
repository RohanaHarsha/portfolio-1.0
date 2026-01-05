import { useState } from 'react';
import '../CSS/Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Project One",
      description: "A real-world web app built with React. Focused on performance and clean state management.",
      image: "/projects/project1.jpg", // Add your project images to public/projects/
      technologies: ["React", "JavaScript", "CSS"],
      liveUrl: "https://your-live-site.com",
      githubUrl: "https://github.com/yourusername/project-one",
      isLive: true,
      gallery: [
        "/projects/project1-1.jpg",
        "/projects/project1-2.jpg",
        "/projects/project1-3.jpg"
      ]
    },
    {
      title: "Project Two",
      description: "Full-stack application with Node.js backend and MongoDB database integration.",
      image: "/projects/project2.jpg",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "https://your-live-site.com",
      githubUrl: "https://github.com/yourusername/project-two",
      isLive: true,
      gallery: [
        "/projects/project2-1.jpg",
        "/projects/project2-2.jpg"
      ]
    },
    {
      title: "Project Three",
      description: "E-commerce platform with payment integration and user authentication.",
      image: "/projects/project3.jpg",
      technologies: ["React", "Firebase", "Stripe"],
      liveUrl: "",
      githubUrl: "https://github.com/yourusername/project-three",
      isLive: false,
      gallery: [
        "/projects/project3-1.jpg",
        "/projects/project3-2.jpg",
        "/projects/project3-3.jpg"
      ]
    },
    {
      title: "Project Four",
      description: "Mobile-responsive dashboard with real-time data visualization and analytics.",
      image: "/projects/project4.jpg",
      technologies: ["React", "Chart.js", "API"],
      liveUrl: "https://your-live-site.com",
      githubUrl: "https://github.com/yourusername/project-four",
      isLive: true,
      gallery: [
        "/projects/project4-1.jpg",
        "/projects/project4-2.jpg"
      ]
    },
    {
      title: "Project Five",
      description: "Social media application with user profiles and real-time messaging features.",
      image: "/projects/project5.jpg",
      technologies: ["React", "Socket.io", "Express"],
      liveUrl: "",
      githubUrl: "https://github.com/yourusername/project-five",
      isLive: false,
      gallery: [
        "/projects/project5-1.jpg",
        "/projects/project5-2.jpg"
      ]
    },
    {
      title: "Project Six",
      description: "Portfolio website generator with custom themes and content management system.",
      image: "/projects/project6.jpg",
      technologies: ["React", "Tailwind", "CMS"],
      liveUrl: "https://your-live-site.com",
      githubUrl: "https://github.com/yourusername/project-six",
      isLive: true,
      gallery: [
        "/projects/project6-1.jpg",
        "/projects/project6-2.jpg",
        "/projects/project6-3.jpg"
      ]
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="projects-page">
        <div className="projects-header">
          <h2>My Projects</h2>
          <p className="projects-count">{projects.length} Projects</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-square">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x400/141414/eaeaea?text=Project+Image';
                  }}
                />
                <div className="image-overlay">
                  <button 
                    className="view-details-btn"
                    onClick={() => openModal(project)}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M10 4C4 4 1 10 1 10s3 6 9 6 9-6 9-6-3-6-9-6z" stroke="currentColor" strokeWidth="2"/>
                      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    View Details
                  </button>
                </div>
              </div>

              <div className="project-inner">
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
                      Live
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="action-btn github">
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>

            <div className="modal-body">
              <div className="modal-gallery">
                <div className="main-image">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/800x600/141414/eaeaea?text=Project+Image';
                    }}
                  />
                </div>
                <div className="gallery-thumbnails">
                  {selectedProject.gallery.map((img, i) => (
                    <img 
                      key={i} 
                      src={img} 
                      alt={`${selectedProject.title} ${i + 1}`}
                      className="thumbnail"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/200x150/141414/eaeaea?text=Gallery';
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="modal-info">
                <h2>{selectedProject.title}</h2>
                <p className="modal-description">{selectedProject.description}</p>

                <div className="modal-tech">
                  <h4>Technologies Used</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge-modal">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  {selectedProject.isLive && selectedProject.liveUrl && (
                    <a 
                      href={selectedProject.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="modal-btn live"
                    >
                      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                        <path d="M14 3H17V6M17 3L10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                      Visit Live Site
                    </a>
                  )}
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="modal-btn github"
                  >
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                      <path d="M10 2a8 8 0 00-2.53 15.59c.4.07.55-.17.55-.38v-1.48c-2.22.48-2.69-1.07-2.69-1.07-.36-.92-.88-1.17-.88-1.17-.72-.49.06-.48.06-.48.8.06 1.22.82 1.22.82.71 1.21 1.85.86 2.3.66.07-.52.28-.86.5-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.67 7.67 0 012-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48v2.19c0 .21.15.46.55.38A8 8 0 0010 2z" fill="currentColor"/>
                    </svg>
                    View Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}