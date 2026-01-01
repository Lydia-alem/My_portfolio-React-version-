import React, { useState } from 'react';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'SIMOU COSMETIQUE',
      description: 'Full-stack e-commerce solution from scratch and PHP',
      technologies: ['HTML', 'CSS','JavaScript', 'PHP', 'SQL'],
      link: 'https://simoucosmetique.com/',
    },
    {
      id: 2,
      title: 'RYMEMBALLAGE',
      description: 'a software for managing printing services',
      technologies: ['HTML', 'CSS','JavaScript', 'PHP', 'SQL'],
      link: 'https://rymemballage.com/' 
    },
    {
      id: 3,
      title: 'portfolio website ',
      description: 'Responsive portfolio with modern design',
      technologies: ['React','Vite', 'CSS3', 'JavaScript'],
      link: 'https://github.com/Lydia-alem/My_portfolio-React-version-.git' 
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
                cursor: 'pointer',
                position: 'relative'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
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
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
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
              
              {}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: '10px 20px',
                    background: '#FF00FF',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '25px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    textAlign: 'center',
                    width: '100%',
                    boxSizing: 'border-box'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.opacity = '1';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;