import whistleAligner from './assets/whistlealign.png'

function PricingSection() {
  return (
    <section className="pricing-section">

      <div className="pricing-left">
        <h2 className="pricing-heading">Dream smiles<br className="mobile-br" /> achieved secretly</h2>
        <div className="pricing-body">
          <p className="pricing-text">
            Experience the superior quality of our Whistle Aligners crafted with
            3-layer PU material. With 450+ clinics nationwide, enjoy comfortable
            treatment by expert orthodontists at House of Clove
          </p>
          <p className="pricing-text pricing-text--desktop">
            The pricing is different for every case. Cases with higher complexity
            requiring more aligners and additional time and effort
            from our dentists.
          </p>
        </div>
      </div>

      <div className="pricing-card">
        <div className="pricing-card-left">
          <h3 className="pricing-card-title">Whistle Aligners</h3>

          <div className="pricing-price-block">
            <p className="pricing-old-price">₹84,000</p>
            <p className="pricing-new-price">
              starting at <span>₹47,999</span>
            </p>
            <p className="pricing-tax">inc. of all taxes</p>
          </div>

          <div className="pricing-features">
            <div className="pricing-feature">
              <span className="pricing-check" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Offer valid for a limited time
            </div>
            <div className="pricing-feature">
              <span className="pricing-check" aria-hidden="true">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              Easy financing options
            </div>
            
          </div>
        </div>

        <div className="pricing-card-right">
          <img
            src={whistleAligner}
            alt="Whistle Aligner case"
            className="pricing-card-img"
          />
          <a href="#" className="pricing-learn-more">
            Learn more
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="#8F62D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          
        </div>
        
      </div>
      

      <p className="pricing-text pricing-text--mobile">
        The pricing is different for every case. Cases with higher complexity
        requiring more aligners and additional time and effort
        from our dentists.
      </p>

    </section>
  )
}

export default PricingSection
