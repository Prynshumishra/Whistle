import { useState } from 'react'
import PerfSmile from './assets/perfectsmile.png'
const STEPS = [
  {
    n: 1,
    title: 'Scan',
    desc: 'We use an AI-powered scanner to take a detailed 3D image of your teeth.',
  },
  {
    n: 2,
    title: 'Plan',
    desc: 'Our Orthodontists design your customized smile enhancement plan using highly advanced software',
  },
  {
    n: 3,
    title: 'Fabricate',
    desc: 'We manufacture your custom aligners leveraging 3D printing & laser technology',
  },
  {
    n: 4,
    title: 'Wear',
    desc: 'Your Whistle Aligners and expert Clove Dental Orthodontists monitor your progress across the journey',
  },
]

function StepsSection() {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="steps-section">
      <div className="steps-card">
        <div className="steps-left">
          <h2 className="steps-heading">Get your perfect smile in four simple steps</h2>
          <div className="steps-grid">
            {STEPS.map((step) => (
              <div className="steps-step" key={step.n}>
                <div className="steps-num" aria-hidden="true">{step.n}</div>
                <div>
                  <p className="steps-title">{step.title}</p>
                  <p className="steps-desc">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="steps-right">
          
            <button
              className="steps-thumb"
              onClick={() => setPlaying(true)}
              aria-label="Play Whistle treatment video"
            >
              <img
                src={PerfSmile}
                alt="Whistle Aligners treatment walkthrough"
                className="steps-thumb-img"
              />
              
            </button>
          
        </div>
      </div>
    </section>
  )
}

export default StepsSection
