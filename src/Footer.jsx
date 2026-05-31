function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-col">
          <p className="footer-heading">Quick Links</p>
          <nav className="footer-links">
            <a href="#" className="footer-link">Home</a>
            <a href="#" className="footer-link">Book a Free Scan</a>
            <a href="#" className="footer-link">How it Works</a>
            <a href="#" className="footer-link">Range of Aligners</a>
            <a href="#" className="footer-link">Aligners vs Braces</a>
            <a href="#" className="footer-link">FAQs</a>
          </nav>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Get in Touch Now!</p>
          <div className="footer-contact">
            <a href="tel:01169328350" className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 122.88 118.72" fill="currentColor" aria-hidden="true">
                <path d="M29.22,56.54c3.57,6.43,7.67,12.6,13.02,18.24C47.58,80.45,54.24,85.6,62.86,90c0.64,0.31,1.25,0.31,1.78,0.1 c0.82-0.31,1.66-0.99,2.48-1.81c0.64-0.64,1.43-1.66,2.26-2.77c3.31-4.36,7.42-9.77,13.21-7.07c0.13,0.06,0.23,0.13,0.35,0.19 l19.33,11.11c0.06,0.03,0.13,0.1,0.19,0.13c2.55,1.75,3.6,4.46,3.63,7.52c0,3.12-1.15,6.63-2.83,9.58 c-2.22,3.91-5.51,6.5-9.29,8.21c-3.6,1.66-7.61,2.55-11.46,3.12c-6.05,0.89-11.71,0.32-17.5-1.46c-5.67-1.75-11.37-4.65-17.6-8.5 l-0.46-0.29c-2.86-1.78-5.95-3.7-8.98-5.95c-11.1-8.38-22.4-20.47-29.76-33.78C2.03,57.15-1.34,45.09,0.5,33.59 c1.02-6.3,3.72-12.03,8.44-15.82c4.11-3.31,9.64-5.13,16.81-4.49c0.82,0.06,1.56,0.54,1.94,1.24l12.39,20.94 c1.81,2.35,2.04,4.68,1.05,7.01c-0.82,1.91-2.48,3.67-4.74,5.31c-0.67,0.57-1.46,1.15-2.29,1.75c-2.77,2.01-5.92,4.33-4.84,7.07 L29.22,56.54z"/>
              </svg>
              011-6932-8350
            </a>
            <a href="mailto:support@whistle.in" className="footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.8"/>
                <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              support@whistle.in
            </a>
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Follow us on</p>
          <div className="footer-socials">
            <a href="#" className="footer-social-btn" aria-label="Instagram">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a href="#" className="footer-social-btn" aria-label="Facebook">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a href="#" className="footer-social-btn" aria-label="X (Twitter)">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col--legal">
          <a href="#" className="footer-legal-link">Privacy Policy</a>
          <a href="#" className="footer-legal-link">Terms of Service</a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
