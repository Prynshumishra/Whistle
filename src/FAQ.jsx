import { useState, useEffect } from 'react'

function FAQ() {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [open, setOpen] = useState(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load FAQs. Please try again later.')
        return res.json()
      })
      .then(data => setFaqs(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <section className="faq-section">
      <h2 className="faq-heading">
        <span className="faq-heading-purple">Got Questions?</span>{' '}
        We've got answers
      </h2>

      {loading && <p className="faq-status">Loading FAQs…</p>}
      {error && <p className="faq-status faq-error">{error}</p>}

      {!loading && !error && (
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div className="faq-item" key={item.id}>
              <button
                className="faq-question"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span>{item.title}</span>
                <span className="faq-icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <p className="faq-answer">{item.body}</p>}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default FAQ
