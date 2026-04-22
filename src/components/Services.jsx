import React from 'react'

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="11" r="5" stroke="white" strokeWidth="1.8" fill="none"/>
        <path d="M6 22c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        <circle cx="20" cy="9" r="2.5" fill="white" opacity="0.6"/>
        <path d="M23 16c1.5.8 2.5 2.4 2.5 4.2" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.6"/>
      </svg>
    ),
    title: 'AI-Powered Customer Service',
    description: 'Automate 80% of routine queries and turn your support center into a revenue driver.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="4" width="20" height="20" rx="3" stroke="white" strokeWidth="1.8" fill="none"/>
        <line x1="4" y1="10" x2="24" y2="10" stroke="white" strokeWidth="1.5"/>
        <line x1="14" y1="4" x2="14" y2="10" stroke="white" strokeWidth="1.5"/>
        <path d="M9 16 L13 20 L19 14" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Automated Scheduling & Operations',
    description: 'Eliminate no-shows and recover thousands in lost revenue with intelligent automation.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="6" width="22" height="16" rx="2" stroke="white" strokeWidth="1.8" fill="none"/>
        <line x1="3" y1="11" x2="25" y2="11" stroke="white" strokeWidth="1.5"/>
        <line x1="10" y1="6" x2="10" y2="22" stroke="white" strokeWidth="1.5"/>
        <line x1="15" y1="14" x2="22" y2="14" stroke="white" strokeWidth="1.3"/>
        <line x1="15" y1="17" x2="20" y2="17" stroke="white" strokeWidth="1.3"/>
      </svg>
    ),
    title: 'Intelligent Inventory Management',
    description: 'Prevent stockouts and make data-driven decisions with predictive forecasting.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 14h4l3-8 4 16 3-8h4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="22" cy="6" r="2" fill="white" opacity="0.7"/>
      </svg>
    ),
    title: 'Micro Tools & Extensions',
    description: 'Lightweight tools powered by AI to boost productivity.',
  },
]

export default function Services() {
  return (
    <section id="services" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#1a1a6e', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
          Our Services
        </h2>
        <div style={{ width: '40px', height: '4px', background: '#2d2b8f', borderRadius: '2px', marginBottom: '14px' }}></div>
        <p style={{ color: '#6b7280', fontSize: '15px', marginBottom: '48px' }}>Solve your biggest challenges with end-to-end AI solutions.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: '#f3f3fa',
                borderRadius: '18px',
                padding: '40px',
                minHeight: '220px',
                transition: 'box-shadow 0.2s'
              }}
              onMouseOver={e => e.currentTarget.style.boxShadow = '0 8px 24px rgba(79,70,229,0.1)'}
              onMouseOut={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <div style={{
                width: '64px', height: '64px',
                background: '#7C3AED',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px'
              }}>
                {service.icon}
              </div>
              <h3 style={{ color: '#4F46E5', fontWeight: 700, fontSize: '18px', marginBottom: '12px' }}>{service.title}</h3>
              <p style={{ color: '#4b5563', fontSize: '15px', lineHeight: 1.7 }}>{service.description}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="#" style={{
            color: '#4F46E5', fontWeight: 600, fontSize: '16px',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            textDecoration: 'none'
          }}>
            View all Services
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path d="M1 8H19M19 8L12 1M19 8L12 15" stroke="#4F46E5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
