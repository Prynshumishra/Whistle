import DocLed from './assets/DocLed.png'

function DoctorLedSection() {
  return (
    <section className="dl-section">
      <div className="dl-left">
        <div className="dl-text">
          <h2 className="dl-heading">We are Doctor-led, not direct-to-customers</h2>
          <p className="dl-body">
            We don&rsquo;t offer direct-to-customer invisible aligners. We treat you in a Dental
            clinic with an Orthodontist. Aligners are just the beginning;&nbsp; we ensure
            comprehensive treatment in over 450+ clinics nationwide.
          </p>
        </div>
        <a href="#book" className="dl-cta">Get a Callback</a>
      </div>
      <div className="dl-right">
        <img
          src={ DocLed }
          alt="Orthodontist at Clove Dental clinic"
          className="dl-image"
        />
      </div>
    </section>
  )
}

export default DoctorLedSection
