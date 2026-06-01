import gapsBefore from './assets/Gaps Before.png'
import gapsAfter from './assets/Gaps After.png'
import crookedBefore from './assets/Crooked Teeth - Before.png'
import crookedAfter from './assets/crookedafter.jpg'
import openBiteBefore from './assets/openbitebefore.jpg'
import openBiteAfter from './assets/openbiteafter.jpg'
import protrudingBefore from './assets/protudingbefore.jpg'
import protrudingAfter from './assets/protudingafter.jpg'

const RESULTS = [
  { before: gapsBefore, after: gapsAfter, concern: 'Gaps', duration: '8 months' },
  { before: crookedBefore, after: crookedAfter, concern: 'Crooked Teeth', duration: '8 months' },
  { before: openBiteBefore, after: openBiteAfter, concern: 'Open Bite', duration: '8 months' },
  { before: protrudingBefore, after: protrudingAfter, concern: 'Protruding Teeth', duration: '8 months' },
]

function ResultsSection() {
  return (
    <section className="results-section">
      <h2 className="results-heading">Results You&rsquo;ll Love</h2>
      <div className="results-grid">
        {RESULTS.map((item, i) => (
          <div className="results-card" key={i}>
            <div className="results-photos">
              <div className="results-photo-wrap">
                <img src={item.before} alt="Before" className="results-photo" />
                <span className="results-label">Before</span>
              </div>
              <div className="results-photo-wrap">
                <img src={item.after} alt="After" className="results-photo" />
                <span className="results-label">After</span>
              </div>
            </div>
            <div className="results-info">
              <div className="results-row">
                <span className="results-key">Concern</span>
                <span className="results-val">{item.concern}</span>
              </div>
              <div className="results-row">
                <span className="results-key">Treatment Duration</span>
                <span className="results-val">{item.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ResultsSection
