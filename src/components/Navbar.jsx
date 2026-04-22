import React, { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, background: '#fff', borderBottom: '1px solid #f0f0f5' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="10" height="10" rx="2" stroke="#4F46E5" strokeWidth="2" fill="none"/>
            <rect x="18" y="4" width="10" height="10" rx="2" stroke="#4F46E5" strokeWidth="2" fill="none"/>
            <rect x="4" y="18" width="10" height="10" rx="2" stroke="#4F46E5" strokeWidth="2" fill="none"/>
            <rect x="18" y="18" width="10" height="10" rx="2" stroke="#4F46E5" strokeWidth="2" fill="none"/>
            <circle cx="16" cy="16" r="2.5" fill="#4F46E5"/>
            <line x1="14" y1="9" x2="18" y2="9" stroke="#4F46E5" strokeWidth="1.5"/>
            <line x1="9" y1="14" x2="9" y2="18" stroke="#4F46E5" strokeWidth="1.5"/>
            <line x1="23" y1="14" x2="23" y2="18" stroke="#4F46E5" strokeWidth="1.5"/>
            <line x1="14" y1="23" x2="18" y2="23" stroke="#4F46E5" strokeWidth="1.5"/>
          </svg>
          <span style={{ color: '#1a1a6e', fontWeight: 700, fontSize: '20px', letterSpacing: '-0.3px' }}>Cogniq AI</span>
        </div>

        {/* Desktop Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
          <a href="#" style={{ color: '#4F46E5', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: '#4a4a6a', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }} onMouseOver={e => e.target.style.color='#4F46E5'} onMouseOut={e => e.target.style.color='#4a4a6a'}>About Us</a>
          <a href="#services" style={{ color: '#4a4a6a', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }} onMouseOver={e => e.target.style.color='#4F46E5'} onMouseOut={e => e.target.style.color='#4a4a6a'}>Services</a>
          <a href="#process" style={{ color: '#4a4a6a', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }} onMouseOver={e => e.target.style.color='#4F46E5'} onMouseOut={e => e.target.style.color='#4a4a6a'}>Our Lab</a>
          <a href="#" style={{ color: '#4a4a6a', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }} onMouseOver={e => e.target.style.color='#4F46E5'} onMouseOut={e => e.target.style.color='#4a4a6a'}>Blogs</a>
        </div>

        {/* Contact Us Button */}
        <div className="desktop-nav">
          <button style={{
            background: 'linear-gradient(135deg, #3730a3 0%, #4F46E5 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '15px',
            padding: '10px 22px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            letterSpacing: '0.1px'
          }}>
            Contact Us
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          style={{ display: 'none', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div style={{ width: '20px', height: '2px', background: '#333', marginBottom: '4px' }}></div>
          <div style={{ width: '20px', height: '2px', background: '#333', marginBottom: '4px' }}></div>
          <div style={{ width: '20px', height: '2px', background: '#333' }}></div>
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #f0f0f5', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <a href="#" style={{ color: '#4F46E5', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>Home</a>
          <a href="#about" style={{ color: '#4a4a6a', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>About Us</a>
          <a href="#services" style={{ color: '#4a4a6a', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>Services</a>
          <a href="#process" style={{ color: '#4a4a6a', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>Our Lab</a>
          <a href="#" style={{ color: '#4a4a6a', fontWeight: 500, fontSize: '15px', textDecoration: 'none' }}>Blogs</a>
          <button style={{
            background: 'linear-gradient(135deg, #3730a3 0%, #4F46E5 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '15px',
            padding: '10px 22px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}>
            Contact Us
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
