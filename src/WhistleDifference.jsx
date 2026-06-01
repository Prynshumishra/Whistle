import whistleDiffImg from './assets/whistlediff.png'
import nextgenIcon from './assets/nextgen.svg'
import hasslefreeIcon from './assets/hasslefree.svg'
import transparentPricingIcon from './assets/transparentpricing.svg'

const FEATURES = [
  {
    title: 'Next-Gen',
    description: 'Crafted with top-notch 3D printing, laser tech, and Zendura FLX material.',
    icon: nextgenIcon,
  },
  {
    title: 'Hassle-Free',
    description: 'Predictable, comfortable & lifestyle-friendly for an easy smile transformation.',
    icon: hasslefreeIcon,
  },
  {
    title: 'Transparent Pricing',
    description: "Everything's included – from scans to aligners, doctor consults, and retainers – no hidden costs.",
    icon: transparentPricingIcon,
  },
]

function WhistleDifference() {
  return (
    <section className="wd-section">
      <div className="wd-inner">
        <div className="wd-card">
          <h2 className="wd-heading">The Whistle Difference</h2>
          <div className="wd-features">
            {FEATURES.map((f) => (
              <div className="wd-feature" key={f.title}>
                <div className="wd-icon">
                  <img src={f.icon} alt={f.title} width="48" height="48" />
                </div>
                <div className="wd-feature-text">
                  <p className="wd-feature-title">{f.title}</p>
                  <p className="wd-feature-desc">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="wd-image-wrap">
          <img
            src={whistleDiffImg}
            alt="3D printing dental aligners"
            className="wd-image"
          />
        </div>
      </div>
    </section>
  )
}

export default WhistleDifference
