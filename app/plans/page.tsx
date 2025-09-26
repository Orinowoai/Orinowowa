import { getPlanHref } from "../../lib/payments";
import Link from "next/link";

const plans = [
  {
    key: "FREE" as const,
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: ["Basic access", "Community features", "5 tracks per month"],
    badge: "Popular",
  },
  {
    key: "STARTER" as const,
    name: "Starter",
    price: "$9",
    description: "For aspiring creators",
    features: ["Faster renders", "Starter packs", "25 tracks per month", "Priority support"],
    badge: "Value",
  },
  {
    key: "PRO" as const,
    name: "Pro",
    price: "$29",
    description: "For serious producers",
    features: ["Pro packs", "Priority support", "Unlimited tracks", "Commercial license"],
    badge: "Pro",
  },
  {
    key: "ELITE" as const,
    name: "Elite",
    price: "$99",
    description: "For industry professionals",
    features: ["All features", "Investor-ready", "Custom samples", "1-on-1 coaching"],
    badge: "Elite",
  },
];

export default function Plans() {
  const paymentsEnabled = process.env.PAYMENTS_ENABLED === 'true';

  if (!paymentsEnabled) {
    return (
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-brand-gold transition-colors mb-8"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Unlock your creative potential with our AI-powered music creation suite
            </p>
          </div>

          {/* Temporarily Unavailable Notice */}
          <div className="bg-gradient-to-r from-brand-rose/10 to-brand-violet/10 border border-brand-rose/30 rounded-3xl p-12 text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-brand-rose/20 rounded-full flex items-center justify-center">
              <span className="text-3xl">🚧</span>
            </div>
            <h2 className="text-2xl font-heading font-bold text-white mb-4">
              Pricing Temporarily Unavailable
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8">
              We&apos;re updating our pricing structure to serve you better. 
              Our payment system will be back online soon with exciting new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-ink font-bold rounded-full transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-semibold rounded-full transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>

          {/* Preview of upcoming plans */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.key}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 relative opacity-75"
              >
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-brand-violet/20 text-brand-violet rounded-full text-xs font-medium">
                    {plan.badge}
                  </span>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{plan.description}</p>
                  <div className="text-3xl font-bold text-brand-gold mb-1">
                    {plan.price}
                    <span className="text-lg text-white/60 font-normal">/mo</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-white/70">
                      <span className="w-4 h-4 rounded-full bg-brand-gold/20 flex items-center justify-center mr-3 flex-shrink-0">
                        <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-3 bg-white/10 text-white/50 rounded-full font-semibold cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl font-heading font-bold text-white">
            Choose your plan
          </h1>
          <Link
            href="/"
            className="px-6 py-3 border border-white/20 hover:bg-white/10 text-white rounded-full transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const href = getPlanHref(plan.key);
            return (
              <div
                key={plan.key}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-brand-violet/20 text-brand-violet rounded-full text-xs font-medium">
                    {plan.badge}
                  </span>
                  <span className="font-bold text-lg text-white">{plan.name}</span>
                </div>
                <div className="text-3xl font-bold text-brand-gold mb-4">
                  {plan.price}
                </div>
                <ul className="mb-6 text-white/70 text-sm space-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 rounded-full bg-brand-gold mr-3"></span>
                      {f}
                    </li>
                  ))}
                </ul>
                {href ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener"
                    className="block w-full py-3 bg-brand-gold hover:bg-brand-gold/90 text-brand-ink font-bold rounded-full text-center transition-colors"
                  >
                    Subscribe
                  </a>
                ) : (
                  <button
                    className="w-full py-3 bg-white/10 text-white/50 rounded-full font-semibold cursor-not-allowed"
                    disabled
                  >
                    Coming soon
                  </button>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center text-white/50 text-sm">
          Free trial available. Cancel anytime. All plans include our luxury AI music suite.
        </div>
      </div>
    </div>
  );
}
