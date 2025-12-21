import React, { useState } from 'react';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution from scratch and PHP',
      technologies: ['HTML', 'CSS','JavaScript', 'PHP', 'SQL']
    },
    {
      id: 2,
      title: 'Restaurant App',
      description: 'Mobile application for discovering restaurants  ',
      technologies: ['Flutter', 'PHP']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Responsive portfolio with modern design',
      technologies: ['React', 'CSS3', 'JavaScript']
    }
  ]);

  return (
    <section id="projects" style={{
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="container">
        <h2 className="section-title" style={{
          fontSize: '42px',
          marginBottom: '50px',
          textAlign: 'center',
          background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent'
        }}>
          My Projects
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                background: 'var(--glass)',
                borderRadius: '15px',
                padding: '30px',
                backdropFilter: 'blur(5px)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.target.style.transform = 'translateY(-10px)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'translateY(0)';
              }}
            >
              <h3 style={{
                fontSize: '24px',
                marginBottom: '15px',
                color: 'var(--secondary)'
              }}>
                {project.title}
              </h3>
              <p style={{
                marginBottom: '20px',
                lineHeight: '1.6',
                opacity: '0.9'
              }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      padding: '5px 15px',
                      borderRadius: '20px',
                      fontSize: '14px'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;