import smilersGif from './assets/smilers.gif'

function TestimonialsSection() {

  return (
    <section className="ts-section">
      <h2 className="ts-heading">Happy Smilers!</h2>

      <div className="ts-marquee-wrap">
        <div className="ts-marquee-track">
          <img src={smilersGif} alt="Happy Smilers" className="ts-gif" />
          <img src={smilersGif} alt="Happy Smilers" className=" ts-gif-clone" />
        </div>
      </div>

    </section>
  )
}

export default TestimonialsSection
