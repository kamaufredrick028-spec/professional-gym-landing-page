const plans = [
  {
    name: "Starter Plan",
    description: "A simple, affordable entry into fitness.",
    price: 29,
    features: [
      "Gym access during off-peak hours",
      "2 group fitness classes per month",
      "One-time fitness assessment",
      "Access to workout tracking app",
      "Community group support",
      "Month-to-month billing, cancel anytime",
    ],
    popular: false,
  },
  {
    name: "Pro Plan",
    description: "For regular gym-goers aiming to level up",
    price: 53,
    features: [
      "Unlimited 24/7 gym access",
      "8 group fitness classes/month",
      "Personalized workout program",
      "Progress tracking & analytics",
      "Community group support",
      "Month-to-month billing, cancel anytime",
    ],
    popular: true,
  },
  {
    name: "Elite Membership",
    description: "All-in access for serious transformation",
    price: 99,
    features: [
      "Everything in Pro Plan",
      "2 personal training sessions/month",
      "Nutrition planning & coaching",
      "Access to workout tracking app",
      "Community group support",
      "Premium customer support",
    ],
    popular: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing-plan" className="py-20 md:py-28" style={{ backgroundColor: "var(--gym-dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Pre-heading */}
        <div className="flex items-center gap-3 mb-4 justify-center">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--gym-yellow)" }} />
          <span className="text-gym-yellow text-[14px] font-semibold uppercase tracking-wider">Pricing Plan</span>
        </div>

        <h2 className="font-bayon text-[40px] md:text-[56px] leading-[1.05] uppercase mb-4 text-center" style={{ color: "var(--gym-white)" }}>
          Choose Your Plan
        </h2>
        <p className="text-gym-body text-[16px] max-w-[600px] mx-auto mb-12 leading-relaxed text-center">
          Choose a plan that fits your goals, schedule, and lifestyle we've got an option for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-[4px] p-6 md:p-8 flex flex-col relative"
              style={{
                backgroundColor: "var(--gym-dark-card)",
                border: plan.popular ? "1px solid var(--gym-yellow)" : "1px solid var(--gym-dark-border)",
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[12px] font-semibold"
                  style={{ backgroundColor: "var(--gym-yellow)", color: "var(--gym-black)" }}
                >
                  Most Popular
                </div>
              )}
              <h3 className="font-bayon text-[24px] uppercase mb-2" style={{ color: "var(--gym-white)" }}>
                {plan.name}
              </h3>
              <p className="text-gym-body text-[14px] mb-6">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-bayon text-[56px] leading-none" style={{ color: "var(--gym-yellow)" }}>
                  {plan.price}
                </span>
                <span className="text-gym-body text-[16px]">/month</span>
              </div>

              <div className="flex flex-col gap-4 mb-8 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--gym-yellow)" }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gym-black)" strokeWidth="3">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gym-body text-[14px]">{f}</span>
                  </div>
                ))}
              </div>

              <a
                href="#contact-us"
                className="w-full inline-flex items-center justify-center rounded-[4px] py-3 text-[16px] font-semibold transition-colors"
                style={{
                  backgroundColor: plan.popular ? "var(--gym-yellow)" : "transparent",
                  color: plan.popular ? "var(--gym-black)" : "var(--gym-yellow)",
                  border: plan.popular ? "none" : "1px solid var(--gym-yellow)",
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
