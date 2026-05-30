
const items = [
  { plain: 'Our inaugural launch benefit' },
  { bold: 'Free teeth scan', plain: ' worth ₹500' },
  { bold: 'Free orthodontic consultation', plain: ' worth ₹1500' },
]

function TickerSet({ hidden }) {
  return (
    <div className="ticker-set" aria-hidden={hidden}>
      {items.map((item, j) => (
        <span className="ticker-item" key={j}>
          
          {item.bold && <strong className="ticker-bold">{item.bold}</strong>}
          {item.plain && <span>{item.plain}</span>}
        </span>
      ))}
    </div>
  )
}

function TickerBanner() {
  return (
    <div className="ticker-wrapper" aria-label="Promotional offers">
      <div className="ticker-track">
        <TickerSet hidden={false} />
        <TickerSet hidden={true} />
        <TickerSet hidden={true} />
        <TickerSet hidden={true} />
      </div>
    </div>
  )
}

export default TickerBanner
