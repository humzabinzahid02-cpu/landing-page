import React from 'react';


function Header() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f8f9fa',
      fontFamily: 'Arial, sans-serif' 
    }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{
              width: '40px',
              height: '40px',
              backgroundColor: '#2563eb',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontWeight: 'bold'
            }}>
              J
            </div>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>
              JobHuntly
            </span>
          </div>
          <nav style={{ display: 'flex', gap: '2rem' }}>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Find Jobs</a>
            <a href="#" style={{ color: '#6b7280', textDecoration: 'none' }}>Browse Companies</a>
          </nav>
        </div>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button style={{
            background: 'none',
            border: 'none',
            color: '#6b7280',
            cursor: 'pointer'
          }}>
            Login
          </button>
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600'
          }}>
            Sign Up
          </button>
        </div>
      </header>

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          Discover<br />
          more than<br />
          <span style={{ color: '#2563eb' }}>5000+ Jobs</span>
        </h1>

        
        <div style={{
          width: '200px',
          height: '8px',
          backgroundColor: '#2563eb',
          borderRadius: '4px',
          margin: '1rem 0 2rem 0'
        }}></div>

        <p style={{
          fontSize: '1.2rem',
          color: '#6b7280',
          marginBottom: '3rem',
          lineHeight: '1.6'
        }}>
          Great platform for the job seeker that searching for<br />
          new career heights and passionate about startups.
        </p>

        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '1rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '600px',
          gap: '1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flex: 1
          }}>
            <span style={{ color: '#9ca3af' }}>🔍</span>
            <input
              type="text"
              placeholder="Job title or keyword"
              style={{
                border: 'none',
                outline: 'none',
                fontSize: '1rem',
                flex: 1
              }}
            />
          </div>
          
          <div style={{
            borderLeft: '1px solid #e5e7eb',
            paddingLeft: '1rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flex: 1
          }}>
            <span style={{ color: '#9ca3af' }}>📍</span>
            <select style={{
              border: 'none',
              outline: 'none',
              fontSize: '1rem',
              color: '#6b7280',
              backgroundColor: 'transparent',
              flex: 1
            }}>
              <option>Florence, Italy</option>
              <option>London, UK</option>
              <option>New York, USA</option>
            </select>
          </div>

          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '1rem 2rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem'
          }}>
            Search my job
          </button>
        </div>

      
        <div style={{ marginTop: '2rem' }}>
          <span style={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            Popular : UI Designer, UX Researcher, Android, Admin
          </span>
        </div>
          
      </main>
    
    </div>
    
  );
}

export default Header ;