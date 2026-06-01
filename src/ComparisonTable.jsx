import { useState } from 'react'
import whistleLogo from './assets/Logo.png'

const ROWS = [
  {
    feature: 'Easy to complex cases',
    whistle: { type: 'text', value: 'Yes, mild to complex' },
    other: { type: 'text', value: 'No, only mild to moderate' },
    description: 'Whistle Aligners handle everything from minor spacing issues to complex bite corrections, giving more patients access to clear aligner treatment.',
  },
  {
    feature: 'Clear-cut Pricing',
    whistle: { type: 'check' },
    other: { type: 'cross' },
    description: 'Whistle Aligners has transparent pricing and does not include any hidden costs. All expenses, including consultations and scans, are incorporated into a single fee, offering patients a hassle-free and clear financial experience.',
  },
  {
    feature: 'Aligner Change',
    whistle: { type: 'text', value: 'Every 10 days' },
    other: { type: 'text', value: 'Every 2 weeks' },
    description: 'Faster aligner changes every 10 days means your treatment progresses quicker, getting you to your perfect smile sooner than other brands.',
  },
  {
    feature: 'Clinical Partnership',
    whistle: { type: 'check' },
    other: { type: 'cross' },
    description: 'Every Whistle treatment is supervised by qualified orthodontists at Clove Dental clinics — ensuring clinical oversight at every step of your journey.',
  },
  {
    feature: 'Movement Between Cities',
    whistle: { type: 'check' },
    other: { type: 'cross' },
    description: 'With 450+ Clove Dental clinics nationwide, you can continue your treatment seamlessly even if you move or travel to another city.',
  },
  {
    feature: 'Complimentary Teeth Scaling',
    whistle: { type: 'check' },
    other: { type: 'cross' },
    description: 'Every Whistle plan includes a complimentary teeth scaling session — keeping your oral health in top shape throughout your aligner journey.',
  },
]

function CheckIcon() {
  return (
    <span className="ct-icon ct-check">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M5 10.5l3.5 3.5 6.5-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function CrossIcon() {
  return (
    <span className="ct-icon ct-cross">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M6 6l8 8M14 6l-8 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </span>
  )
}

function Cell({ data }) {
  if (data.type === 'check') return <CheckIcon />
  if (data.type === 'cross') return <CrossIcon />
  return <span className="ct-cell-text">{data.value}</span>
}

function ComparisonTable() {
  const [openRow, setOpenRow] = useState(null)

  const toggle = (feature) =>
    setOpenRow((prev) => (prev === feature ? null : feature))

  return (
    <section className="ct-section">
      <h2 className="ct-heading">What sets Whistle apart?</h2>
      <div className="ct-table-wrap">
        <div className="ct-table">
          <div className="ct-thead">
            <div className="ct-th ct-th-feature">Features</div>
            <div className="ct-th ct-th-whistle">
              <img src={whistleLogo} alt="Whistle and Smile" className="ct-logo" />
            </div>
            <div className="ct-th ct-th-other">Other Brands</div>
          </div>

          {ROWS.map((row) => {
            const isOpen = openRow === row.feature
            return (
              <div className="ct-row-wrap" key={row.feature}>
                <button
                  className={`ct-row${isOpen ? ' ct-row--open' : ''}`}
                  onClick={() => toggle(row.feature)}
                  aria-expanded={isOpen}
                >
                  <div className="ct-td ct-td-feature">
                    <span>{row.feature}</span>
                    <svg
                      className={`ct-chevron${isOpen ? ' ct-chevron--up' : ''}`}
                      width="24" height="24" viewBox="0 0 16 16" fill="none"
                    >
                      <path d="M4 6l4 4 4-4" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="ct-td ct-td-whistle">
                    <Cell data={row.whistle} />
                  </div>
                  <div className="ct-td ct-td-other">
                    <Cell data={row.other} />
                  </div>
                </button>

                {isOpen && (
                  <div className="ct-dropdown">
                    <p className="ct-dropdown-text">{row.description}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ComparisonTable
