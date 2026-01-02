import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  const titles = ['STIC Student', 'Full-Stack Developer'];

  // Check screen size on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        setFade(true);
      }, 500);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [titles.length]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: isMobile ? '80px 0 40px' : '120px 0 80px',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 40px'
      }}>
        <div className="hero-content" style={{
          display: 'flex',
          flexDirection: isMobile ? 'column-reverse' : 'row',
          alignItems: 'center',
          gap: isMobile ? '30px' : '50px',
          justifyContent: 'space-between'
        }}>
          <div className="hero-text" style={{ 
            flex: 1,
            textAlign: isMobile ? 'center' : 'left',
            maxWidth: isMobile ? '100%' : '600px'
          }}>
            <p className="greeting" style={{
              fontSize: isMobile ? '18px' : '24px',
              marginBottom: isMobile ? '10px' : '15px',
              color: 'var(--secondary)'
            }}>
              Hi there, I'm
            </p>
            <h1 className="name" style={{
              fontSize: isMobile ? '42px' : '72px',
              fontWeight: '700',
              marginBottom: isMobile ? '10px' : '15px',
              background: 'linear-gradient(45deg, var(--primary), var(--secondary))',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              lineHeight: '1.1'
            }}>
              Lydia Alem
            </h1>
            <h2 
              className="title-animation"
              style={{
                fontSize: isMobile ? '22px' : '28px',
                marginBottom: isMobile ? '20px' : '30px',
                color: 'var(--light)',
                minHeight: isMobile ? '32px' : '40px',
                opacity: fade ? 1 : 0,
                transition: 'opacity 0.5s ease'
              }}
            >
              {titles[currentTitleIndex]}
            </h2>
            <p className="description" style={{
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: '1.6',
              marginBottom: isMobile ? '30px' : '40px',
              maxWidth: '100%',
              opacity: '0.9'
            }}>
              I'm passionate about creating beautiful, functional web experiences.
              Currently studying Master1 Information and Communication Technologies at University of Constantine2
              while building modern web applications.
            </p>
            <div className="cta-buttons" style={{ 
              display: 'flex', 
              gap: '15px',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: isMobile ? 'center' : 'flex-start',
              alignItems: 'center'
            }}>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-primary"
                style={{
                  padding: isMobile ? '12px 24px' : '15px 30px',
                  borderRadius: '50px',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(255, 0, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: isMobile ? '100%' : 'auto',
                  maxWidth: isMobile ? '300px' : 'none',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(-3px)';
                    e.target.style.boxShadow = '0 15px 30px rgba(255, 0, 255, 0.4)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isMobile) {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 20px rgba(255, 0, 255, 0.3)';
                  }
                }}
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.target.style.transform = 'scale(0.98)';
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    e.target.style.transform = 'scale(1)';
                  }
                }}
              >
                <i className="fas fa-paper-plane"></i> Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-secondary"
                style={{
                  padding: isMobile ? '12px 24px' : '15px 30px',
                  borderRadius: '50px',
                  fontSize: isMobile ? '14px' : '16px',
                  fontWeight: '600',
                  background: 'transparent',
                  color: 'var(--light)',
                  border: '2px solid var(--light)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  width: isMobile ? '100%' : 'auto',
                  maxWidth: isMobile ? '300px' : 'none',
                  justifyContent: 'center'
                }}
                onMouseOver={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'var(--light)';
                    e.target.style.color = 'var(--dark)';
                    e.target.style.transform = 'translateY(-3px)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isMobile) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'var(--light)';
                    e.target.style.transform = 'translateY(0)';
                  }
                }}
                onTouchStart={(e) => {
                  if (isMobile) {
                    e.target.style.transform = 'scale(0.98)';
                    e.target.style.background = 'var(--light)';
                    e.target.style.color = 'var(--dark)';
                  }
                }}
                onTouchEnd={(e) => {
                  if (isMobile) {
                    e.target.style.transform = 'scale(1)';
                    setTimeout(() => {
                      e.target.style.background = 'transparent';
                      e.target.style.color = 'var(--light)';
                    }, 150);
                  }
                }}
              >
                <i className="fas fa-code"></i> View Projects
              </button>
            </div>
          </div>
          <div className="hero-image" style={{ 
            flex: 1, 
            display: 'flex', 
            justifyContent: 'center',
            maxWidth: isMobile ? '300px' : '450px',
            margin: isMobile ? '0 auto' : '0'
          }}>
            <img 
              src="/avatar.jpg" 
              alt="Lydia Alem" 
              className="floating"
              style={{
                width: '100%',
                height: isMobile ? '300px' : '450px',
                objectFit: 'cover',
                borderRadius: '50%',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.5s ease',
                border: isMobile ? '3px solid rgba(255, 255, 255, 0.2)' : '5px solid rgba(255, 255, 255, 0.2)',
                animation: isMobile ? 'none' : 'float 6s ease-in-out infinite'
              }}
              onMouseOver={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(-10px)';
                }
              }}
              onMouseOut={(e) => {
                if (!isMobile) {
                  e.target.style.transform = 'translateY(0)';
                }
              }}
            />
          </div>
        </div>
        
        {/* Mobile scroll indicator */}
        {isMobile && (
          <div style={{
            position: 'absolute',
            bottom: '20px',
            left: '0',
            right: '0',
            display: 'flex',
            justifyContent: 'center',
            animation: 'bounce 2s infinite'
          }}>
            <button
              onClick={() => scrollToSection('about')}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--light)',
                fontSize: '24px',
                cursor: 'pointer',
                opacity: '0.7'
              }}
            >
              <i className="fas fa-chevron-down"></i>
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @media (max-width: 768px) {
          .hero-content {
            flex-direction: column-reverse !important;
          }
          .hero-text {
            text-align: center !important;
          }
          .cta-buttons {
            flex-direction: column !important;
          }
          .hero-image {
            margin-bottom: 20px !important;
          }
        }
        
        @media (max-width: 480px) {
          .name {
            font-size: 36px !important;
          }
          .title-animation {
            font-size: 20px !important;
          }
          .description {
            font-size: 15px !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .name {
            font-size: 56px !important;
          }
          .hero-image {
            max-width: 400px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;