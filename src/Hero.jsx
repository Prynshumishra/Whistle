import heroImg from './assets/AI-Expand-Pranav.png'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-heading">Invisible Aligners for a dream smile</h1>
        <p className="hero-subtext">
          Book a Scan and avail a free
          Orthodontist Consult{' '}
          <span className="hero-highlight">worth ₹1500</span>
        </p>
      </div>
      <div className="hero-image-wrap">
        <img src={heroImg} alt="Happy patient with invisible aligners" className="hero-img" />
      </div>
    </section>
  )
}

export default Hero
