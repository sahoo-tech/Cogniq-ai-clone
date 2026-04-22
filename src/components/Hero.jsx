import React from 'react'

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      background: '#f5f5f8',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      paddingTop: '120px',
      paddingBottom: '80px'
    }}>
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(to right, #d0d0e8 1px, transparent 1px), linear-gradient(to bottom, #d0d0e8 1px, transparent 1px)`,
          backgroundSize: '200px 200px',
          opacity: 0.35
        }}></div>
      </div>

      {/* Left floating icon */}
      <div style={{
        position: 'absolute', left: '48px', top: '33%',
        width: '56px', height: '56px', background: '#fff', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)', zIndex: 10
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="#1a1a6e" strokeWidth="1.5" fill="none"/>
          <line x1="12" y1="3" x2="12" y2="7" stroke="#1a1a6e" strokeWidth="1.5"/>
          <line x1="12" y1="17" x2="12" y2="21" stroke="#1a1a6e" strokeWidth="1.5"/>
          <line x1="3" y1="12" x2="7" y2="12" stroke="#1a1a6e" strokeWidth="1.5"/>
          <line x1="17" y1="12" x2="21" y2="12" stroke="#1a1a6e" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="3" fill="#1a1a6e"/>
        </svg>
      </div>

      {/* Right top floating icon */}
      <div style={{
        position: 'absolute', right: '40px', top: '25%',
        width: '56px', height: '56px', background: '#e8eaf8', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10
      }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="11" stroke="#4AAED9" strokeWidth="1.5" fill="none"/>
          <path d="M8 14 L14 8 L20 14 L14 20 Z" stroke="#4AAED9" strokeWidth="1.5" fill="none"/>
          <circle cx="14" cy="14" r="3" fill="#4AAED9"/>
        </svg>
      </div>

      {/* Bottom right floating icon */}
      <div style={{
        position: 'absolute', right: '48px', bottom: '112px',
        width: '48px', height: '48px', background: '#f0f0ff', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10
      }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M11 2L13 9H20L14.5 13.5L16.5 20.5L11 16L5.5 20.5L7.5 13.5L2 9H9Z" stroke="#4F46E5" strokeWidth="1.5" fill="none"/>
          <circle cx="20" cy="4" r="2" fill="#4F46E5"/>
        </svg>
      </div>

      {/* Plus decorators */}
      <div style={{ position: 'absolute', top: '25%', left: '33%', color: '#8888cc', fontSize: '22px', opacity: 0.6, zIndex: 10 }}>+</div>
      <div style={{ position: 'absolute', top: '33%', right: '33%', color: '#8888cc', fontSize: '22px', opacity: 0.6, zIndex: 10 }}>+</div>
      <div style={{ position: 'absolute', bottom: '33%', left: '25%', color: '#8888cc', fontSize: '22px', opacity: 0.6, zIndex: 10 }}>+</div>
      <div style={{ position: 'absolute', bottom: '25%', right: '25%', color: '#8888cc', fontSize: '22px', opacity: 0.6, zIndex: 10 }}>+</div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 20, textAlign: 'center', maxWidth: '860px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{
          fontSize: '62px',
          fontWeight: 800,
          lineHeight: 1.12,
          color: '#1a1a2e',
          marginBottom: '22px',
          letterSpacing: '-1px'
        }}>
          Building{' '}
          <span style={{ color: '#7c3aed' }}>Intelligent</span>
          {', '}scalable AI
          <br />
          solutions for the{' '}
          <span style={{ color: '#7c3aed' }}>Next</span>
          <br />
          Generation
        </h1>

        <p style={{
          color: '#6b7280',
          fontSize: '17px',
          lineHeight: 1.7,
          marginBottom: '40px',
          maxWidth: '520px',
          margin: '0 auto 40px'
        }}>
          Your premier AI &amp; Software engineering partner - transforming ideas into
          <br />reliable, high-performance products.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
          {/* Outlined button */}
          <button style={{
            border: '1.5px solid #4F46E5',
            color: '#4F46E5',
            background: 'transparent',
            fontWeight: 500,
            fontSize: '15px',
            padding: '12px 32px',
            borderRadius: '8px',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={e => { e.currentTarget.style.background='#4F46E5'; e.currentTarget.style.color='#fff'; }}
          onMouseOut={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='#4F46E5'; }}
          >
            Explore our services
          </button>

          {/* Filled gradient button */}
          <button style={{
            background: 'linear-gradient(135deg, #3730a3 0%, #6d28d9 100%)',
            color: '#fff',
            fontWeight: 600,
            fontSize: '15px',
            padding: '12px 32px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer'
          }}>
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  )
}
