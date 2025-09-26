import { getPlanHref } from "../../lib/payments";

const plans = [
  {
    key: "FREE",
    name: "Free",
    price: "$0",
    features: ["Basic access", "Community features"],
    badge: "Popular",
  },
  {
    key: "STARTER",
    name: "Starter",
    price: "$9",
    features: ["Faster renders", "Starter packs"],
    badge: "Value",
  },
  {
    key: "PRO",
    name: "Pro",
    price: "$29",
    features: ["Pro packs", "Priority support"],
    badge: "Pro",
  },
  {
    key: "ELITE",
    name: "Elite",
    price: "$99",
    features: ["All features", "Investor-ready"],
    badge: "Elite",
  },
];

export default function Plans() {
  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold text-iris-200">
          Choose your plan
        </h1>
        <a
          href="/"
          className="btn border border-white/10 text-sand/80 hover:text-iris-100"
        >
          ← Back to Home
        </a>
      </div>
      <div className="grid md:grid-cols-4 gap-6">
        {plans.map((plan) => {
          const href = getPlanHref(plan.key);
          return (
            <div
              key={plan.key}
              className="card p-6 rounded-xl shadow-lg bg-gradient-to-br from-deep-900 via-deep-800 to-deep-900"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="badge bg-iris-200 text-deep-900 px-2 py-1 rounded-full text-xs font-bold">
                  {plan.badge}
                </span>
                <span className="font-bold text-lg">{plan.name}</span>
              </div>
              <div className="text-2xl font-extrabold text-gold-500 mb-2">
                {plan.price}
              </div>
              <ul className="mb-4 text-sand/80 text-sm list-disc pl-4">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-cta w-full"
                >
                  Subscribe
                </a>
              ) : (
                <button
                  className="btn w-full bg-deep-700 text-sand/50 cursor-not-allowed"
                  disabled
                >
                  Coming soon
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="mt-8 text-center text-sand/70 text-xs">
        Free trial available. Cancel anytime.
      </div>
    </section>
  );
}
