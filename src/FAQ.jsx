import { useState } from 'react'

const faqs = [
  {
    q: 'What are Aligners?',
    a: 'Aligners are Orthodontic devices that are a transparent, plastic form of dental braces used to adjust teeth to make your smile more beautiful!',
  },
  {
    q: 'How do Aligners work?',
    a: 'Aligners work by applying gentle, continuous pressure on your teeth to gradually shift them into the desired position. Each set of aligners is worn for about 1–2 weeks before moving to the next set.',
  },
  {
    q: 'Can any dentist do irregular teeth treatment?',
    a: 'No, teeth alignment treatment should be done by a qualified Orthodontist. At Whistle, all treatments are supervised by experienced Orthodontists at Clove Dental clinics.',
  },
  {
    q: 'Are there any restriction on eating or drinking?',
    a: 'Since aligners are removable, you can eat and drink whatever you like! Simply remove your aligners before eating, and put them back after brushing your teeth.',
  },
  {
    q: 'How long does the treatment take?',
    a: "Typically, it may take 6–12 months for correcting the 'social six' (front teeth). For more complex cases such as crowded teeth, the treatment time could be 12–24 months or slightly longer. The best person to give advice on this is your Orthodontist.",
  },
]

function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="faq-section">
      <h2 className="faq-heading">
        <span className="faq-heading-purple">Got Questions?</span>{' '}
        We've got answers
      </h2>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div className="faq-item" key={i}>
            <button
              className="faq-question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <span className="faq-icon">{open === i ? '−' : '+'}</span>
            </button>
            {open === i && <p className="faq-answer">{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
