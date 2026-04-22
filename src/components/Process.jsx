import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description: 'Understand challenges and design a strategic AI roadmap.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=400&fit=crop&q=80',
    grayscale: true,
  },
  {
    number: '02',
    title: 'Design & Prototype',
    description: 'Detailed wireframes and interactive prototypes.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=700&h=400&fit=crop&q=80',
    grayscale: false,
  },
  {
    number: '03',
    title: 'Development & Testing',
    description: 'Rigorous testing and continuous collaboration.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&h=400&fit=crop&q=80',
    grayscale: false,
  },
  {
    number: '04',
    title: 'Launch & Growth',
    description: 'Deploy and optimize for continued success.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&h=400&fit=crop&q=80',
    grayscale: false,
  },
]

export default function Process() {
  return (
    <section id="process" style={{ background: '#fff', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '36px', gap: '12px' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 900, color: '#1a1a6e', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '8px' }}>
              Our Process
            </h2>
            <div style={{ width: '40px', height: '4px', background: '#2d2b8f', borderRadius: '2px' }}></div>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '15px' }}>From concept to creation, seamlessly.</p>
        </div>

        {/* Process grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="process-card"
              style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                height: '380px',
                cursor: 'pointer'
              }}
            >
              <img
                src={step.image}
                alt={step.title}
                className="process-card-img"
                style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  filter: step.grayscale ? 'grayscale(100%)' : 'none'
                }}
              />
              {/* Dark overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }}></div>

              {/* Number badge */}
              <div style={{
                position: 'absolute', top: '22px', left: '22px',
                width: '52px', height: '52px',
                background: '#fff',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
              }}>
                <span style={{ color: '#1a1a6e', fontWeight: 800, fontSize: '15px' }}>{step.number}</span>
              </div>

              {/* Bottom text */}
              <div style={{ position: 'absolute', bottom: '28px', left: '28px', right: '28px' }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '24px', marginBottom: '8px' }}>{step.title}</h3>
                <p style={{ color: '#d1d5db', fontSize: '15px', lineHeight: 1.5 }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          .process-card:hover .process-card-img { transform: scale(1.05); }
        `}</style>
      </div>
    </section>
  )
}
