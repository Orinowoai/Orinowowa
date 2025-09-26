"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How do I get started with Orinowo?",
    a: "Simply sign up for a free account and start creating. You get 5 AI-generated tracks per month on our free plan, with the option to upgrade for unlimited access."
  },
  {
    q: "What makes Orinowo different from other AI music platforms?",
    a: "Orinowo combines luxury-grade AI technology with social gamification, leaderboards, and investor-ready design. We focus on premium quality and community-driven features."
  },
  {
    q: "Can I use generated music commercially?",
    a: "Yes! Pro and Elite plans include full commercial licensing rights for all generated content. Free and Starter plans are for personal use only."
  },
  {
    q: "How does the leaderboard system work?",
    a: "Earn XP by creating tracks, maintaining daily streaks, participating in the community, and receiving quality bonuses. Top creators get exclusive perks and recognition."
  },
  {
    q: "Do you offer partnership opportunities?",
    a: "Absolutely! We welcome branded content partnerships, music tech collaborations, and affiliate opportunities. Contact partners@orinowo.com for more details."
  },
  {
    q: "Is my data and music secure?",
    a: "We use enterprise-grade security and encryption. Your tracks are private by default, and we never share your content without explicit permission."
  }
];

const contactMethods = [
  {
    title: "General Support",
    email: "support@orinowo.com",
    description: "Technical issues, account help, and general inquiries",
    icon: "🎧"
  },
  {
    title: "Partnerships",
    email: "partners@orinowo.com", 
    description: "Brand collaborations, content partnerships, and affiliates",
    icon: "🤝"
  },
  {
    title: "Press & Media",
    email: "press@orinowo.com",
    description: "Media inquiries, press releases, and interviews",
    icon: "📰"
  },
  {
    title: "Enterprise Sales",
    email: "enterprise@orinowo.com",
    description: "Custom solutions, enterprise licensing, and bulk accounts",
    icon: "🏢"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || "Orinowo Inquiry");
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:support@orinowo.com?subject=${subject}&body=${body}`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-luxuryGold to-gold-300 mb-6 glow">
          Contact Us
        </h1>
        <p className="text-xl text-sand/80 max-w-3xl mx-auto mb-8">
          Get in touch with our team. We're here to help you create luxury-grade music 
          and answer any questions you might have.
        </p>
        <a href="/" className="btn btn-secondary">
          ← Back to Home
        </a>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method, i) => (
          <div key={i} className="card p-6 text-center hover:shadow-gold transition-all duration-300">
            <div className="text-3xl mb-3">{method.icon}</div>
            <h3 className="font-semibold text-luxuryGold mb-2">{method.title}</h3>
            <p className="text-sm text-sand/70 mb-4">{method.description}</p>
            <a
              href={`mailto:${method.email}`}
              className="btn btn-secondary text-sm w-full"
              aria-label={`Email ${method.title}`}
            >
              {method.email}
            </a>
          </div>
        ))}
      </div>

      <div className="max-w-2xl mx-auto">
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-iris-100 mb-6 text-center">
            Send us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-luxuryGold mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-deep-800 border border-deep-700 text-sand placeholder-sand/50 focus:outline-none focus:border-luxuryGold transition-colors"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-luxuryGold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-deep-800 border border-deep-700 text-sand placeholder-sand/50 focus:outline-none focus:border-luxuryGold transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-luxuryGold mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-deep-800 border border-deep-700 text-sand focus:outline-none focus:border-luxuryGold transition-colors"
              >
                <option value="">Select a topic</option>
                <option value="General Support">General Support</option>
                <option value="Technical Issue">Technical Issue</option>
                <option value="Partnership Inquiry">Partnership Inquiry</option>
                <option value="Billing Question">Billing Question</option>
                <option value="Feature Request">Feature Request</option>
                <option value="Press Inquiry">Press Inquiry</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-luxuryGold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-deep-800 border border-deep-700 text-sand placeholder-sand/50 focus:outline-none focus:border-luxuryGold transition-colors resize-vertical"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button
              type="submit"
              className="btn btn-cta w-full text-lg py-4"
              aria-label="Send message"
            >
              Send Message
            </button>
          </form>

          <p className="text-xs text-sand/60 text-center mt-4">
            We typically respond within 24 hours during business days.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-iris-100 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sand/70">
            Find quick answers to common questions about Orinowo.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="card overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-deep-800/30 transition-colors"
                aria-expanded={openFaq === i}
              >
                <span className="font-semibold text-luxuryGold">{faq.q}</span>
                <span className={`text-luxuryGold transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-4">
                  <p className="text-sand/80 leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}