import React from 'react';

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#1e293b',
      padding: '4rem 2rem 2rem',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '1rem'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#3b82f6',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '0.75rem'
              }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>J</span>
              </div>
              <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>JobHuntly</span>
            </div>
            <p style={{
              color: '#94a3b8',
              lineHeight: '1.6',
              fontSize: '0.9rem'
            }}>
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              About
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'].map((item, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a href="#" style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s'
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          <div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Resources
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Help Docs', 'Guide', 'Updates', 'Contact Us'].map((item, index) => (
                <li key={index} style={{ marginBottom: '0.75rem' }}>
                  <a href="#" style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    transition: 'color 0.2s'
                  }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          
          <div>
            <h3 style={{
              fontSize: '1.1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: 'white'
            }}>
              Get job notifications
            </h3>
            <p style={{
              color: '#94a3b8',
              fontSize: '0.9rem',
              marginBottom: '1.5rem'
            }}>
              The latest job news, articles, sent to your inbox weekly.
            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              <input
                type="email"
                placeholder="Email Address"
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: 'white',
                  fontSize: '0.9rem'
                }}
              />
              <button style={{
                backgroundColor: '#3b82f6',
                color: 'white',
                padding: '0.75rem 1.5rem',
                borderRadius: '6px',
                border: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                cursor: 'pointer'
              }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        
        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{
            color: '#64748b',
            fontSize: '0.9rem',
            margin: 0
          }}>
            2021 © JobHuntly. All rights reserved.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem'
          }}>
            {['📘', '📷', '🌐', '📺', '🐦'].map((icon, index) => (
              <div key={index} style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#334155',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}>
                <span style={{ fontSize: '18px' }}>{icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;