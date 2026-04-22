import React from 'react'

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9Z" stroke="white" strokeWidth="1.6" fill="none"/>
        <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4Z" stroke="white" strokeWidth="1.4" fill="none"/>
        <path d="M15 9l-3 3-2-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'High-Trust Engineering',
    description: 'Research-backed methods with transparent communication.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.6" fill="none"/>
        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.4" fill="none"/>
        <line x1="12" y1="3" x2="12" y2="9" stroke="white" strokeWidth="1.4"/>
        <line x1="12" y1="15" x2="12" y2="21" stroke="white" strokeWidth="1.4"/>
        <line x1="3" y1="12" x2="9" y2="12" stroke="white" strokeWidth="1.4"/>
        <line x1="15" y1="12" x2="21" y2="12" stroke="white" strokeWidth="1.4"/>
      </svg>
    ),
    title: 'Built for Scale',
    description: 'Your product grows without breaking.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2L3 7v5c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7L12 2Z" stroke="white" strokeWidth="1.6" fill="none"/>
        <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="10" y="13" fill="white" fontSize="6" fontWeight="bold">AI</text>
      </svg>
    ),
    title: 'Gen AI Expertise',
    description: 'Deep experience with LLMs and custom AI.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.6" fill="none"/>
        <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.6" fill="none"/>
        <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.6" fill="none"/>
        <circle cx="17.5" cy="17.5" r="3.5" stroke="white" strokeWidth="1.6" fill="none"/>
        <circle cx="17.5" cy="17.5" r="1" fill="white"/>
      </svg>
    ),
    title: 'User-Centered Design',
    description: 'Every feature is intuitive and purposeful.',
  },
]

export default function WhyChooseUs() {
  return (
    <section style={{ background: '#f0f0f8', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '48px', alignItems: 'flex-start' }}>

        {/* Left heading block */}
        <div style={{ width: '280px', flexShrink: 0 }}>
          <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#1a1a6e', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
            Why Choose Us
          </h2>
          <div style={{ width: '40px', height: '4px', background: '#2d2b8f', borderRadius: '2px', marginBottom: '20px' }}></div>
          <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: 1.65 }}>Passion for precision, commitment to quality.</p>
        </div>

        {/* Right features grid */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: '#fff',
                borderRadius: '16px',
                padding: '28px 24px',
                minHeight: '140px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '18px',
                transition: 'box-shadow 0.2s'
              }}
              onMouseOver={e => e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)'}
              onMouseOut={e => e.currentTarget.style.boxShadow = 'none'}
            >
              {/* Icon box - square rounded */}
              <div style={{
                width: '54px', height: '54px', flexShrink: 0,
                background: '#2d2b8f',
                borderRadius: '12px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {feature.icon}
              </div>
              <div>
                <h3 style={{ color: '#1a1a6e', fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>{feature.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: 1.65 }}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
