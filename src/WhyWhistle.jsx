import { useRef, useEffect, useState } from 'react'

function WhyWhistle() {
  const trackRef = useRef(null)
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 600)
  const [cards, setCards] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=4')
      .then(res => {
        if (!res.ok) throw new Error('Failed to load cards. Please try again later.')
        return res.json()
      })
      .then(data => setCards(data.products))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

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

      {loading && <p className="why-status">Loading…</p>}
      {error && <p className="why-status why-error">{error}</p>}

      {!loading && !error && (
        <div className="why-grid" ref={trackRef}>
          {displayCards.map((card, i) => (
            <div className="why-card" key={i}>
              <img src={card.thumbnail} alt={card.title} className="why-card-img" />
              <p className="why-card-title">{card.title}</p>
              <p className="why-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default WhyWhistle
