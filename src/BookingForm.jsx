import { useState } from 'react'

function BookingForm() {
  const [teeth, setTeeth] = useState('')
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [consent, setConsent] = useState(false)

  const isValid = name.trim().length > 0 && mobile.trim().length >= 10 && consent

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className="booking-section">
      <h2 className="booking-question">Do you have Teeth Gaps or Crooked Teeth?</h2>

      <div className="booking-radio-group">
        <label className="radio-label">
          <input
            type="radio"
            name="teeth"
            value="yes"
            checked={teeth === 'yes'}
            onChange={() => setTeeth('yes')}
          />
          Yes
        </label>
        <label className="radio-label">
          <input
            type="radio"
            name="teeth"
            value="no"
            checked={teeth === 'no'}
            onChange={() => setTeeth('no')}
          />
          No
        </label>
      </div>

      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="booking-fields">
          <div className="field-wrap">
            <input
              id="fullName"
              type="text"
              className="booking-input"
              placeholder=" "
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <label htmlFor="fullName" className="floating-label">Full Name*</label>
          </div>

          <div className="field-wrap phone-wrap">
            <span className="phone-prefix">+91</span>
            <input
              id="mobile"
              type="tel"
              className="booking-input phone-input"
              placeholder="Mobile number*"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              required
            />
          </div>
        </div>

        <label className="consent-label">
          <input
            type="checkbox"
            checked={consent}
            onChange={e => setConsent(e.target.checked)}
          />
          <span>
            I hereby consent to receive calls / messages from Whistle and its partners and override DND settings.
          </span>
        </label>

        <button type="submit" className="booking-btn" disabled={!isValid}>Book a Free Scan</button>
      </form>
    </section>
  )
}

export default BookingForm
