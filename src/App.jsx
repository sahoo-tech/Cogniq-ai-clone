import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'
import useScrollReveal from './hooks/useScrollReveal'

export default function App() {
  useScrollReveal()

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      <Navbar />

      {/* Hero fades in via the global #root animation */}
      <Hero />

      <div className="reveal"><About /></div>
      <div className="reveal stagger-1"><Services /></div>
      <div className="reveal stagger-2"><WhyChooseUs /></div>
      <div className="reveal stagger-3"><Process /></div>
      <div className="reveal stagger-4"><CTABanner /></div>
      <div className="reveal"><Footer /></div>
    </div>
  )
}
