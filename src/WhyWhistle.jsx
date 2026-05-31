import { useRef, useEffect, useState } from 'react'
import img1 from './assets/choose1.png'
import img2 from './assets/choose2.png'
import img3 from './assets/choose3.png'
import img4 from './assets/choose4.png'

const cards = [
  {
    img: img1,
    alt: 'Custom-made invisible aligners',
    title: 'Custom-made & invisible',
    desc: 'Tailored for your teeth and smile with a clear, discreet appearance.',
  },
  {
    img: img2,
    alt: 'Doctor and patient planning treatment',
    title: 'Predictable results',
    desc: 'Advanced 3D modeling and AI-technology for precise planning and predictable results.',
  },
  {
    img: img3,
    alt: 'Clove Dental clinic interior',
    title: 'Partnership with Clove Dental',
    desc: 'Led by highly experienced Orthodontists of Clove Dental and Whistle that have corrected over 2 lakh smiles.',
  },
  {
    img: img4,
    alt: 'Happy patient with aligners',
    title: 'Unlimited Aligners*',
    desc: 'Unlimited aligners and doctor consults at no extra cost.',
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

  const displayCards = isMobile ? [...cards, ...cards, ...cards] : cards

  return (
    <section className="why-section">
      <h2 className="why-heading">Why Whistle?</h2>
      <div className="why-grid" ref={trackRef}>
        {displayCards.map((card, i) => (
          <div className="why-card" key={i}>
            <img src={card.img} alt={card.alt} className="why-card-img" />
            <p className="why-card-title">{card.title}</p>
            <p className="why-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyWhistle
