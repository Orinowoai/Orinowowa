import { getPlanHref, type PlanKey } from "../../lib/payments";

const plans: Array<{
  key: PlanKey;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  badge?: string;
  popular?: boolean;
}> = [
  {
    key: "FREE",
    name: "Free",
    price: "£0",
    period: "/month",
    description: "Perfect for getting started with AI music creation",
    features: [
      "5 track generations per month",
      "Basic AI models",
      "Community access",
      "Standard audio quality",
      "Email support"
    ],
    badge: "Start Here"
  },
  {
    key: "STARTER",
    name: "Starter",
    price: "£4.99",
    period: "/month",
    description: "For aspiring creators ready to level up",
    features: [
      "50 track generations per month",
      "Enhanced AI models",
      "Priority community access",
      "High-quality audio exports",
      "Starter sound packs included",
      "Priority email support"
    ],
    badge: "Great Value"
  },
  {
    key: "PRO",
    name: "Pro",
    price: "£19.99",
    period: "/month",
    description: "Professional tools for serious music creators",
    features: [
      "Unlimited track generations",
      "Premium AI models",
      "Advanced editing tools",
      "Professional audio quality",
      "All sound packs included",
      "Leaderboard advantages",
      "Live chat support",
      "Commercial licensing"
    ],
    badge: "Most Popular",
    popular: true
  },
  {
    key: "ELITE",
    name: "Elite",
    price: "£49.99",
    period: "/month",
    description: "Ultimate luxury experience for industry professionals",
    features: [
      "Everything in Pro",
      "Exclusive luxury AI models",
      "Personal account manager",
      "Studio-grade audio mastering",
      "Custom sound pack creation",
      "Leaderboard crown privileges",
      "24/7 priority support",
      "Advanced analytics dashboard",
      "Early access to new features"
    ],
    badge: "Luxury"
  },
];

export default function Plans() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-luxuryGold to-gold-300 mb-6 glow">
          Choose Your Plan
        </h1>
        <p className="text-xl text-sand/80 max-w-3xl mx-auto mb-8">
          Unlock the full potential of luxury AI music creation. Start free, upgrade anytime.
        </p>
        <a
          href="/"
          className="btn btn-secondary"
        >
          ← Back to Home
        </a>
      </div>

      {/* Pricing Cards */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
        {plans.map((plan) => {
          const href = getPlanHref(plan.key);
          const isPopular = plan.popular;
          
          return (
            <div
              key={plan.key}
              className={`card p-8 relative transition-all duration-300 hover:shadow-gold ${
                isPopular ? "ring-2 ring-luxuryGold scale-105" : ""
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold ${
                  isPopular 
                    ? "bg-gradient-to-r from-gold-400 to-luxuryGold text-deep-900" 
                    : "bg-deep-700 text-luxuryGold border border-luxuryGold/30"
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-iris-100 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-3">
                  <span className="text-4xl font-extrabold text-luxuryGold">
                    {plan.price}
                  </span>
                  <span className="text-sand/60">{plan.period}</span>
                </div>
                <p className="text-sand/70 text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-luxuryGold font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span className="text-sand/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn w-full ${
                    plan.key === "FREE" 
                      ? "btn-secondary" 
                      : isPopular 
                        ? "btn-cta" 
                        : "btn-gold"
                  }`}
                  aria-label={`Subscribe to ${plan.name} plan`}
                >
                  {plan.key === "FREE" ? "Start Free" : "Subscribe Now"}
                </a>
              ) : (
                <button
                  className="btn w-full bg-deep-700 text-sand/50 cursor-not-allowed"
                  disabled
                  aria-label="Coming soon"
                >
                  Coming Soon
                </button>
              )}

              {/* Urgency callout for paid plans */}
              {plan.key !== "FREE" && href && (
                <p className="text-center text-xs text-sand/60 mt-3">
                  Cancel anytime • 7-day money-back guarantee
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Additional Info */}
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="card p-6">
          <div className="text-3xl mb-3">🎯</div>
          <h3 className="font-semibold text-luxuryGold mb-2">Free Trial</h3>
          <p className="text-sm text-sand/70">
            Start with our free plan and upgrade when you're ready to unlock more features.
          </p>
        </div>
        <div className="card p-6">
          <div className="text-3xl mb-3">⚡</div>
          <h3 className="font-semibold text-luxuryGold mb-2">Instant Access</h3>
          <p className="text-sm text-sand/70">
            Get immediate access to all plan features the moment you subscribe.
          </p>
        </div>
        <div className="card p-6">
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="font-semibold text-luxuryGold mb-2">Secure & Safe</h3>
          <p className="text-sm text-sand/70">
            Your payment information is encrypted and secure. Cancel anytime.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-iris-100 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-luxuryGold mb-2">Can I change plans anytime?</h3>
            <p className="text-sm text-sand/70">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-luxuryGold mb-2">What's included in the free plan?</h3>
            <p className="text-sm text-sand/70">
              Our free plan includes 5 AI-generated tracks per month and basic community access.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-luxuryGold mb-2">Do you offer refunds?</h3>
            <p className="text-sm text-sand/70">
              We offer a 7-day money-back guarantee for all paid plans, no questions asked.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-luxuryGold mb-2">Is commercial use allowed?</h3>
            <p className="text-sm text-sand/70">
              Pro and Elite plans include commercial licensing for all generated content.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center">
        <p className="text-sand/70 mb-6">
          Join thousands of creators already using Orinowo to create luxury-grade music.
        </p>
        <a href="/contact" className="btn btn-secondary">
          Have Questions? Contact Us
        </a>
      </div>
    </div>
  );
}
