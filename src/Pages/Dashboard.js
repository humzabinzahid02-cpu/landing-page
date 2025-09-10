import React from 'react';

function Dashboard() {
  const positions = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      salary: "$85,000 - $120,000",
      type: "Full-time",
      posted: "2 days ago",
      applicants: 45
    },
    {
      title: "UX Designer",
      company: "DesignStudio",
      location: "New York, NY",
      salary: "$70,000 - $95,000",
      type: "Full-time",
      posted: "1 day ago",
      applicants: 23
    },
    {
      title: "Marketing Manager",
      company: "GrowthCo",
      location: "San Francisco, CA",
      salary: "$90,000 - $130,000",
      type: "Full-time",
      posted: "3 days ago",
      applicants: 67
    },
    {
      title: "Data Analyst",
      company: "DataTech",
      location: "Remote",
      salary: "$65,000 - $85,000",
      type: "Contract",
      posted: "1 week ago",
      applicants: 89
    },
    {
      title: "Sales Representative",
      company: "SalesPro",
      location: "Chicago, IL",
      salary: "$50,000 - $75,000",
      type: "Full-time",
      posted: "4 days ago",
      applicants: 34
    },
    {
      title: "DevOps Engineer",
      company: "CloudSystems",
      location: "Austin, TX",
      salary: "$95,000 - $140,000",
      type: "Full-time",
      posted: "5 days ago",
      applicants: 56
    }
  ];

  return (
    <div style={{
      backgroundColor: '#f8f9fa',
      padding: '4rem 2rem',
      minHeight: '50vh'
    }}>
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
            Latest <span style={{ color: '#2563eb' }}>positions</span>
          </h2>
          <a href="#" style={{
            color: '#2563eb',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500'
          }}>
            View all positions →
          </a>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '1.5rem'
        }}>
          {positions.map((position, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.5rem'
                  }}>
                    {position.title}
                  </h3>
                  <p style={{
                    color: '#6b7280',
                    fontSize: '1rem',
                    marginBottom: '0.25rem'
                  }}>
                    {position.company}
                  </p>
                </div>
                <span style={{
                  backgroundColor: position.type === 'Full-time' ? '#dbeafe' : '#fef3c7',
                  color: position.type === 'Full-time' ? '#1e40af' : '#92400e',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {position.type}
                </span>
              </div>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#6b7280',
                  fontSize: '0.9rem'
                }}>
                  <span style={{ marginRight: '0.5rem' }}>📍</span>
                  {position.location}
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#6b7280',
                  fontSize: '0.9rem'
                }}>
                  <span style={{ marginRight: '0.5rem' }}>💰</span>
                  {position.salary}
                </div>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                borderTop: '1px solid #f3f4f6'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem'
                }}>
                  <span style={{
                    color: '#9ca3af',
                    fontSize: '0.85rem'
                  }}>
                    {position.posted}
                  </span>
                  <span style={{
                    color: '#9ca3af',
                    fontSize: '0.85rem'
                  }}>
                    {position.applicants} applicants
                  </span>
                </div>
                <button style={{
                  backgroundColor: '#2563eb',
                  color: 'white',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  border: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        
        <div style={{
          marginTop: '4rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#2563eb',
              marginBottom: '0.5rem'
            }}>
              2,847
            </div>
            <div style={{
              color: '#6b7280',
              fontSize: '1rem'
            }}>
              Active Positions
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#10b981',
              marginBottom: '0.5rem'
            }}>
              12,456
            </div>
            <div style={{
              color: '#6b7280',
              fontSize: '1rem'
            }}>
              Total Applicent
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#f59e0b',
              marginBottom: '0.5rem'
            }}>
              1,234
            </div>
            <div style={{
              color: '#6b7280',
              fontSize: '1rem'
            }}>
              Companies are Hiring
            </div>
          </div>

          <div style={{
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}>
            <div style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: '#8b5cf6',
              marginBottom: '0.5rem'
            }}>
              89%
            </div>
            <div style={{
              color: '#6b7280',
              fontSize: '1rem'
            }}>
              Success Rate%S
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;