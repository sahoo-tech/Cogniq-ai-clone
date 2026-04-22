import React from 'react'

export default function Footer() {
  return (
    <footer style={{ background: '#1e1e22', color: '#fff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px 32px' }}>

        {/* Top grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '40px', marginBottom: '48px' }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                <rect x="4" y="4" width="10" height="10" rx="2" stroke="#7c5ff5" strokeWidth="2" fill="none"/>
                <rect x="18" y="4" width="10" height="10" rx="2" stroke="#7c5ff5" strokeWidth="2" fill="none"/>
                <rect x="4" y="18" width="10" height="10" rx="2" stroke="#7c5ff5" strokeWidth="2" fill="none"/>
                <rect x="18" y="18" width="10" height="10" rx="2" stroke="#7c5ff5" strokeWidth="2" fill="none"/>
                <circle cx="16" cy="16" r="2.5" fill="#7c5ff5"/>
                <line x1="14" y1="9" x2="18" y2="9" stroke="#7c5ff5" strokeWidth="1.5"/>
                <line x1="9" y1="14" x2="9" y2="18" stroke="#7c5ff5" strokeWidth="1.5"/>
                <line x1="23" y1="14" x2="23" y2="18" stroke="#7c5ff5" strokeWidth="1.5"/>
                <line x1="14" y1="23" x2="18" y2="23" stroke="#7c5ff5" strokeWidth="1.5"/>
              </svg>
              <span style={{ color: '#7c5ff5', fontWeight: 700, fontSize: '20px' }}>Cogniq AI</span>
            </div>
            <p style={{ color: '#9ca3af', fontSize: '13px', fontStyle: 'italic', marginBottom: '16px' }}>A Cogniq Labs Division</p>
            <p style={{ color: '#d1d5db', fontSize: '13.5px', lineHeight: 1.7, marginBottom: '24px' }}>
              Building intelligent AI apps that transform how you interact with technology.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <a href="#" style={{
                width: '40px', height: '40px', border: '1px solid #4b5563',
                borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', transition: 'border-color 0.2s'
              }}
              onMouseOver={e => e.currentTarget.style.borderColor='#9ca3af'}
              onMouseOut={e => e.currentTarget.style.borderColor='#4b5563'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.6" fill="none"/>
                  <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.6" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="white"/>
                </svg>
              </a>
              <a href="#" style={{
                width: '40px', height: '40px', border: '1px solid #4b5563',
                borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', transition: 'border-color 0.2s'
              }}
              onMouseOver={e => e.currentTarget.style.borderColor='#9ca3af'}
              onMouseOut={e => e.currentTarget.style.borderColor='#4b5563'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.7 5.5 4.7 9 5-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2Z" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" style={{
                width: '40px', height: '40px', border: '1px solid #4b5563',
                borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                textDecoration: 'none', transition: 'border-color 0.2s'
              }}
              onMouseOver={e => e.currentTarget.style.borderColor='#9ca3af'}
              onMouseOut={e => e.currentTarget.style.borderColor='#4b5563'}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" stroke="white" strokeWidth="1.6" fill="none"/>
                  <rect x="2" y="9" width="4" height="12" stroke="white" strokeWidth="1.6" fill="none"/>
                  <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="1.6" fill="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '15px', marginBottom: '20px' }}>Company</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>About us</a></li>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>Careers</a></li>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>Blogs</a></li>
            </ul>
          </div>

          {/* AI Solutions */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '15px', marginBottom: '20px' }}>AI Solutions</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>Custom AI Agents</a></li>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>Voice AI</a></li>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>Customer Support AI</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '15px', marginBottom: '20px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>Workflow Automation</a></li>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>Predictive Analytics</a></li>
              <li>
                <a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }} onMouseOver={e=>e.currentTarget.style.color='#fff'} onMouseOut={e=>e.currentTarget.style.color='#9ca3af'}>
                  All Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '15px', marginBottom: '20px' }}>Products</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>All Products</a></li>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>JobMail AI</a></li>
              <li><a href="#" style={{ color: '#9ca3af', fontSize: '14px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#fff'} onMouseOut={e=>e.target.style.color='#9ca3af'}>PostGenius AI</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #374151', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
          <p style={{ color: '#6b7280', fontSize: '13.5px' }}>© 2026 Cogniq AI. All Rights Reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="#" style={{ color: '#6b7280', fontSize: '13.5px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#d1d5db'} onMouseOut={e=>e.target.style.color='#6b7280'}>Terms of service</a>
            <span style={{ color: '#4b5563' }}>•</span>
            <a href="#" style={{ color: '#6b7280', fontSize: '13.5px', textDecoration: 'none' }} onMouseOver={e=>e.target.style.color='#d1d5db'} onMouseOut={e=>e.target.style.color='#6b7280'}>Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
