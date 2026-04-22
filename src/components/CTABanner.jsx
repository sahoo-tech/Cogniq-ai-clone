import React from 'react'

export default function CTABanner() {
  return (
    <section style={{ background: '#fff', padding: '40px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Main CTA image banner */}
        <div style={{ position: 'relative', borderRadius: '18px', overflow: 'hidden', height: '380px' }}>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&h=500&fit=crop&q=80"
            alt="Team collaboration"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.50)' }}></div>

          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            textAlign: 'center', padding: '24px'
          }}>
            <h2 style={{
              color: '#fff', fontWeight: 700,
              fontSize: 'clamp(26px, 4vw, 44px)',
              marginBottom: '16px', lineHeight: 1.2
            }}>
              Ready to transform Your Workflow?
            </h2>
            <p style={{ color: '#e5e7eb', fontSize: '16px', marginBottom: '28px', maxWidth: '520px', lineHeight: 1.6 }}>
              Let's build a clear, actionable roadmap to solve your biggest operational challenges with AI
            </p>
            <button style={{
              background: 'linear-gradient(135deg, #5b3fd4 0%, #7c3aed 100%)',
              color: '#fff',
              fontWeight: 600,
              fontSize: '16px',
              padding: '14px 36px',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '12px'
            }}>
              Book a Strategy Call
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                <path d="M1 8H19M19 8L12 1M19 8L12 15" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mini banner below */}
        <div style={{
          marginTop: '20px',
          background: '#eeeef8',
          borderRadius: '16px',
          padding: '20px 32px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '52px', height: '52px',
              background: '#5b3fd4',
              borderRadius: '50%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0
            }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8Z" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            </div>
            <div>
              <p style={{ color: '#1a1a6e', fontWeight: 700, fontSize: '15.5px', marginBottom: '2px' }}>Unlock AI Potential</p>
              <p style={{ color: '#6b7280', fontSize: '13.5px' }}>Discover how we can transform your operations</p>
            </div>
          </div>

          <button style={{
            border: '1.5px solid #2d2b8f',
            color: '#2d2b8f',
            background: 'transparent',
            fontWeight: 600,
            fontSize: '14px',
            padding: '11px 24px',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            whiteSpace: 'nowrap',
            transition: 'all 0.2s'
          }}
          onMouseOver={e => { e.currentTarget.style.background='#2d2b8f'; e.currentTarget.style.color='#fff'; }}
          onMouseOut={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#2d2b8f'; }}
          >
            Explore Solutions
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M1 7H17M17 7L11 1M17 7L11 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  )
}
