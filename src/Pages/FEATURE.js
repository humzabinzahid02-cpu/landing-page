import React from 'react';

function FEATURE() {
  let featuredJobs = [
    {
      id: 1,
      title: "Email Marketing",
      company: "Revolut",
      location: "Madrid, Spain",
      type: "Full Time",
      description: "Revolut is looking for Email Marketing to help them ads...",
      logo: "R",
      logoColor: "#000",
      skills: ["Marketing", "Remote"]
    },



    {
      id: 2,
      title: "Brand Designer",
      company: "Dropbox",
      location: "San Francisco, US",
      type: "Full Time", 
      description: "Dropbox is looking for Brand Designer to help the team i...",
      logo: "📦",
      logoColor: "#0061ff",
      skills: ["Design", "Figma"]
    },


    {
      id: 3,
      title: "Email Marketing",
      company: "Pitch",
      location: "Berlin, Germany", 
      type: "Full Time",
      description: "Pitch is looking for Customer Manager to join marketing t...",
      logo: "⚫",
      logoColor: "#000",
      skills: ["Marketing", "Remote"]
    },



    {
      id: 4,
      title: "Visual Designer",
      company: "Blinkist",
      location: "Granada, Spain",
      type: "Full Time",
      description: "Blinkist is looking for Visual Designer to help team dev...",
      logo: "✅",
      logoColor: "#2ecc71",
      skills: ["Design", "UI/UX"]
    },


    {
      id: 5,
      title: "Product Designer",
      company: "ClassDojo",
      location: "Manchester, UK",
      type: "Full Time",
      description: "ClassDojo is looking for Product Designer to help us bui...",
      logo: "🔗",
      logoColor: "#3498db",
      skills: ["Product", "Design"]
    },
    {
    
      id: 6,
      title: "Lead Designer",
      company: "Canva",
      location: "Lisbon, Portugal",
      type: "Full Time",
      description: "Canva is looking for Lead Designer to help the team cr...",
      logo: "🎨",
      logoColor: "#00c4cc",
      skills: ["Design", "Leadership"]
    },

    {
      id: 7,
      title: "Brand Strategist",
      company: "Abstract",
      location: "New York, US",
      type: "Full Time",
      description: "Abstract is looking for Brand Strategist to develop bra...",
      logo: "⚪",
      logoColor: "#6c5ce7",
      skills: ["Strategy", "Branding"]
    },

    {
      id: 8,
      title: "Data Analyst",
      company: "Twitter",
      location: "San Diego, US",
      type: "Full Time",
      description: "Twitter is looking for Data Analyst to help team analy...",
      logo: "🐦",
      logoColor: "#1da1f2",
      skills: ["Data", "Analytics"]
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
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '0.5rem'
          }}>
            Featured <span style={{ color: '#2563eb' }}>jobs</span>
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem'
        }}>
          {featuredJobs.map((job) => (
            <div key={job.id} style={{
              backgroundColor: 'white',
              padding: '1.5rem',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
              border: '1px solid #e5e7eb',
              position: 'relative'
            }}>
              
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1rem'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: job.logoColor === '#000' ? '#f3f4f6' : `${job.logoColor}20`,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: job.logoColor
                }}>
                  {job.logo}
                </div>
                <span style={{
                  backgroundColor: '#dbeafe',
                  color: '#1e40af',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  fontSize: '0.75rem',
                  fontWeight: '500'
                }}>
                  {job.type}
                </span>
              </div>

              
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.25rem'
              }}>
                {job.title}
              </h3>

             
              <p style={{
                color: '#6b7280',
                fontSize: '0.9rem',
                marginBottom: '0.75rem'
              }}>
                {job.company} • {job.location}
              </p>

              
              <p style={{
                color: '#9ca3af',
                fontSize: '0.85rem',
                lineHeight: '1.4',
                marginBottom: '1rem'
              }}>
                {job.description}
              </p>

              
              <div style={{
                display: 'flex',
                gap: '0.5rem',
                flexWrap: 'wrap'
              }}>
                {job.skills.map((skill, index) => (
                  <span key={index} style={{
                    backgroundColor: index === 0 ? '#fef3c7' : '#e0f2fe',
                    color: index === 0 ? '#92400e' : '#1e40af',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.7rem',
                    fontWeight: '500'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>

              
              <style>{`
                div:hover {
                  transform: translateY(-2px);
                  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                }
              `}</style>
            </div>
          ))}
        </div>

        
        <div style={{
          textAlign: 'center',
          marginTop: '3rem'
        }}>
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.75rem 2rem',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}>
            View all featured jobs →
          </button>
        </div>
      </section>
    </div>
  );
}

export default FEATURE;