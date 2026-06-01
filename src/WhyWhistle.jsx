import { useRef, useEffect, useState } from 'react'

const CARDS = [
  {
    id: 1,
    title: 'Invisible & Comfortable',
    description: 'Clear aligners that are virtually invisible — wear them confidently at work, college, or out with friends.',
    img: 'https://picsum.photos/seed/aligner-1/292/292',
  },
  {
    id: 2,
    title: 'Clinically Proven Results',
    description: 'Backed by orthodontists across 450+ Clove Dental clinics with thousands of successful smile transformations.',
    img: 'https://picsum.photos/seed/aligner-2/292/292',
  },
  {
    id: 3,
    title: 'Free 3D Teeth Scan',
    description: 'Start with a complimentary 3D scan and orthodontist consultation — no commitment, no cost.',
    img: 'https://picsum.photos/seed/aligner-3/292/292',
  },
  {
    id: 4,
    title: 'Flexible Payment Plans',
    description: 'Affordable EMI options starting at just ₹3,999/month so your dream smile fits every budget.',
    img: 'https://picsum.photos/seed/aligner-4/292/292',
  },
]

function WhyWhistle() {
  const trackRef = useRef(null)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 600)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 600)
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (!isMobile) return
    const track = trackRef.current
    if (!track) return

    const setWidth = track.scrollWidth / 3
    if (!setWidth) return
    track.scrollLeft = setWidth

    let timer
    const handleScroll = () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        const sw = track.scrollWidth / 3
        if (track.scrollLeft < sw) {
          track.scrollLeft += sw
        } else if (track.scrollLeft >= sw * 2) {
          track.scrollLeft -= sw
        }
      }, 120)
    }

    track.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      track.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [isMobile])

  const displayCards = isMobile ? [...CARDS, ...CARDS, ...CARDS] : CARDS

  return (
    <section className="why-section">
      <h2 className="why-heading">Why Whistle?</h2>
      <div className="why-grid" ref={trackRef}>
        {displayCards.map((card, i) => (
          <div className="why-card" key={i}>
            <img src={card.img} alt={card.title} className="why-card-img" />
            <p className="why-card-title">{card.title}</p>
            <p className="why-card-desc">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyWhistle
