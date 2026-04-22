import React from 'react'

export default function About() {
  return (
    <section id="about" style={{ background: '#f0f0f8', padding: '80px 24px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '32px', left: '25%', color: '#8888cc', fontSize: '22px', opacity: 0.6 }}>+</div>
      <div style={{ position: 'absolute', top: '32px', right: '25%', color: '#8888cc', fontSize: '22px', opacity: 0.6 }}>+</div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '48px' }}>
        {/* Image with left purple bar */}
        <div style={{ position: 'relative', flex: '1', minWidth: '300px', display: 'flex', alignItems: 'center' }}>
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0,
            width: '14px',
            background: 'linear-gradient(to bottom, #7c3aed, #3730a3)',
            borderRadius: '8px'
          }}></div>
          <div style={{ marginLeft: '32px', borderRadius: '16px', overflow: 'hidden', width: '100%', maxWidth: '520px' }}>
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop&q=80"
              alt="AI Robot Hand"
              style={{ width: '100%', height: '300px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        {/* Text content */}
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '520px' }}>
          {/* About Us tag */}
          <div style={{
            display: 'inline-block',
            background: '#ddd9f5',
            color: '#1a1a6e',
            fontSize: '12px',
            fontWeight: 700,
            padding: '6px 16px',
            borderRadius: '999px',
            marginBottom: '18px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase'
          }}>
            About Us
          </div>

          <p style={{ color: '#1a1a6e', fontWeight: 700, fontSize: '17px', marginBottom: '10px' }}>
            Engineering Trust.{' '}
            <span style={{ color: '#7c3aed' }}>Delivering Intelligence.</span>
          </p>

          <h2 style={{ fontSize: '38px', fontWeight: 800, color: '#1a1a2e', marginBottom: '16px', lineHeight: 1.2 }}>
            At Cogniq AI
          </h2>

          <p style={{ color: '#4b5563', fontSize: '15.5px', lineHeight: 1.75, marginBottom: '32px' }}>
            we don't just develop features, we build{' '}
            <span style={{ color: '#7c3aed', fontWeight: 600 }}>full-scale</span>{' '}
            AI systems designed for clarity, transparency, and long-term growth. From startups to enterprises, we partner with teams that want to innovate without compromising on{' '}
            <span style={{ color: '#1a1a2e', fontWeight: 700 }}>quality</span>.
          </p>

          <button style={{
            background: 'linear-gradient(135deg, #3730a3 0%, #5b3fd4 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '15px',
            padding: '13px 28px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            Know more about Us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 13L13 3M13 3H7M13 3V9" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
