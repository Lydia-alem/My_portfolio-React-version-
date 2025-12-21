import React from 'react';

const About = () => {
  const skills = [
    'HTML5 & CSS3', 'JavaScript', 'PHP', 'React', 'Node.js',
    'Next.js', 'Flutter', 'Python', 'Django', 'Javafx'
  ];

  return (
    <section id="about" className="about" style={{
      backgroundColor: 'rgba(15, 15, 26, 0.7)',
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
          About Me
        </h2>
        <div className="about-content" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '50px'
        }}>
          <div className="about-text" style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '28px',
              marginBottom: '20px',
              color: 'var(--secondary)'
            }}>
              Who I Am
            </h3>
            <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
              I'm Lydia Alem, an Information Technology student at University of Constantine2 with a passion
              for full-stack development. I specialize in creating responsive, user-friendly web applications
              that deliver exceptional user experiences.
            </p>
            <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
              My journey in tech began when I discovered my love for problem-solving and creativity through
              programming. Since then, I've been dedicated to expanding my skills and staying updated with
              the latest technologies in web development.
            </p>
            <div className="skills" style={{ marginTop: '30px' }}>
              <h4 style={{
                fontSize: '20px',
                marginBottom: '15px',
                color: 'var(--secondary)'
              }}>
                My Skills
              </h4>
              <div className="skills-list" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px'
              }}>
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-item"
                    style={{
                      background: 'var(--glass)',
                      padding: '10px 20px',
                      borderRadius: '50px',
                      backdropFilter: 'blur(5px)'
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;