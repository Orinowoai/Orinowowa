import BackHome from "../../components/BackHome";

const faqs = [
  {
    q: "How do I get support?",
    a: "Email support@orinowo.com and we’ll reply within 24h.",
  },
  {
    q: "Can I partner with Orinowo?",
    a: "Yes! Email partners@orinowo.com for collabs and sponsorships.",
  },
  {
    q: "Is my data private?",
    a: "We use best-in-class security and never share your tracks.",
  },
];

export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-14">
      <div className="card p-8 mb-8">
        <h1 className="text-3xl font-bold text-primary mb-2">Contact</h1>
        <form
          action="mailto:support@orinowo.com"
          method="POST"
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="card px-4 py-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="card px-4 py-2"
          />
          <textarea
            name="message"
            placeholder="Message"
            required
            className="card px-4 py-2"
            rows={4}
          />
          <button type="submit" className="btn btn-primary" aria-label="Send">
            Send
          </button>
        </form>
      </div>
      <div className="card p-6">
        <h2 className="text-lg font-semibold text-secondary mb-2">FAQ</h2>
        <ul>
          {faqs.map((faq) => (
            <li key={faq.q} className="mb-3">
              <details>
                <summary className="cursor-pointer font-semibold text-accent">
                  {faq.q}
                </summary>
                <div className="mt-1 text-text/80">{faq.a}</div>
              </details>
            </li>
          ))}
        </ul>
      </div>
      <BackHome className="mt-10" />
    </section>
  );
}
