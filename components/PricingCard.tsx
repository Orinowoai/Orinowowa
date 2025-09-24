export default function PricingCard({ plan, price, features, popular }) {
  return (
    <div className={`relative glass rounded-2xl p-8 shadow-gold border-2 ${popular ? 'border-gold' : 'border-bronze'}`}>
      {popular && (
        <span className="absolute top-4 right-4 bg-gold text-charcoal px-3 py-1 rounded-full font-bold text-xs shadow-gold">
          Most Popular
        </span>
      )}
      <h3 className="text-2xl font-luxury text-gold mb-2">{plan}</h3>
      <div className="text-4xl font-bold text-champagne mb-4">{price}</div>
      <ul className="mb-6 space-y-2">
        {features.map((f, i) => (
          <li key={i} className="text-champagne flex items-center">
            <span className="w-2 h-2 bg-gold rounded-full mr-2" /> {f}
          </li>
        ))}
      </ul>
      <button className="w-full py-3 bg-gradient-to-r from-gold to-amber text-charcoal font-bold rounded-xl shadow-gold hover:scale-105 transition">
        Start Free Trial
      </button>
    </div>
  );
}
