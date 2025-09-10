import React from 'react';


function Job2() {
  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '4rem 2rem',
      minHeight: '100vh'
    }}>
      
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '5rem'
      }}>
        <h3 style={{
          color: '#6b7280',
          fontSize: '1.1rem',
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          Companies we helped grow
        </h3>
        
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem'
        }}>
          <div style={{ color: '#9ca3af', fontSize: '2rem', fontWeight: 'bold',fontStyle:'oblique' }}>
            vodafone
          </div>
          <div style={{ color: '#9ca3af', fontSize: '2rem', fontWeight: 'bold',fontStyle:'oblique' }}>
            intel
          </div>
          <div style={{ color: '#9ca3af', fontSize: '2rem', fontWeight: 'bold', letterSpacing: '0.2em',fontStyle:'oblique'  }}>
            TESLA
          </div>
          <div style={{ color:'#9ca3af',    fontSize: '2rem',   fontWeight: 'bold',fontStyle:'oblique' }}>
            AMD
          </div>
          <div style={{ color: '#9ca3af', fontSize: '2rem', fontWeight: 'bold', fontStyle:'oblique' }}>
            Talkit
          </div>
        </div>
      </section>

      
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937'
          }}>
            Explore by <span style={{ color: '#2563eb' }}>category</span>
          </h2>
          <a href="#" style={{
            color: '#2563eb',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500'
          }}>
            Show all jobs →
          </a>
        </div>

        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#e0f2fe',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '24px', color: '#2563eb' }}>✏️</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Design
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
              235 jobs available →
            </p>
          </div>

          
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#e0f2fe',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '24px', color: '#2563eb' }}>📊</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Sales
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
              980 jobs available →
            </p>
          </div>

          
          <div style={{
            backgroundColor: '#2563eb',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s',
            color: 'white'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: 'rgba(255,255,255,0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '24px', color: '#2563eb' }}>📢</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Marketing
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
              140 jobs available →
            </p>
          </div>

          
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#e0f2fe',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '24px', color: '#2563eb' }}>💰</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Finance
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
              325 jobs available →
            </p>
          </div>

          
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#e0f2fe',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '24px', color: '#2563eb' }}>💻</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Technology
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
              436 jobs available →
            </p>
          </div>

          
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#e0f2fe',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '24px', color: '#2563eb' }}>⚙️</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Engineering
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
              542 jobs available →
            </p>
          </div>

          
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#e0f2fe',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '24px', color: '#2563eb' }}>💼</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Business
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
              211 jobs available →
            </p>
          </div>

          
          <div style={{
            backgroundColor: 'white',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            cursor: 'pointer',
            transition: 'transform 0.2s'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              backgroundColor: '#e0f2fe',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem'
            }}>
              <span style={{ fontSize: '24px', color: '#2563eb' }}>👥</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>
              Human Resources
            </h3>
            <p style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
              346 jobs available →
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default Job2;