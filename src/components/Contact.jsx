import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact" style={{
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
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
          Get In Touch
        </h2>
        <div className="contact-container" style={{
          display: 'flex',
          gap: '50px'
        }}>
          <div className="contact-info" style={{ flex: 1 }}>
            <h3 style={{
              fontSize: '28px',
              marginBottom: '20px',
              color: 'var(--secondary)'
            }}>
              Contact Information
            </h3>
            <div className="contact-details" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              <div className="contact-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <i className="fas fa-envelope" style={{
                  fontSize: '24px',
                  color: 'var(--primary)'
                }}></i>
                <span>lydiaalem@gmail.com</span>
              </div>
              <div className="contact-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <i className="fas fa-phone" style={{
                  fontSize: '24px',
                  color: 'var(--primary)'
                }}></i>
                <span>0782283233</span>
              </div>
              <div className="contact-item" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}>
                <i className="fas fa-map-marker-alt" style={{
                  fontSize: '24px',
                  color: 'var(--primary)'
                }}></i>
                <span>Constantine, Algeria</span>
              </div>
            </div>
            <div className="social-links" style={{
              display: 'flex',
              justifyContent: 'flex-start',
              gap: '20px',
              marginTop: '30px'
            }}>
              {['github', 'linkedin-in', 'twitter', 'instagram'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  style={{
                    color: 'var(--light)',
                    fontSize: '24px',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.color = 'var(--primary)';
                    e.target.style.transform = 'translateY(-5px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'var(--light)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  <i className={`fab fa-${platform}`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="contact-form" style={{
            flex: 1,
            background: 'var(--glass)',
            padding: '30px',
            borderRadius: '15px',
            backdropFilter: 'blur(5px)'
          }}>
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="subject" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              </div>
              <div className="form-group" style={{ marginBottom: '20px' }}>
                <label htmlFor="message" style={{
                  display: 'block',
                  marginBottom: '8px',
                  fontWeight: '500'
                }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 15px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'var(--light)',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    minHeight: '150px',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => {
                    e.target.style.outline = 'none';
                    e.target.style.borderColor = 'var(--primary)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  fontSize: '16px',
                  fontWeight: '600',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 20px rgba(255, 0, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 15px 30px rgba(255, 0, 255, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = '0 10px 20px rgba(255, 0, 255, 0.3)';
                }}
              >
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;