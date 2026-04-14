const features = [
  {
    title: "Youth-Focused Programs",
    icon: "https://framerusercontent.com/images/6blBmydoovlgwLONWMVw84B2x8.svg?width=70&height=70",
  },
  {
    title: "Certified Coaches Who Care",
    icon: "https://framerusercontent.com/images/clBjwcmmnrVGxqCCvReT6ayksgE.svg?width=70&height=70",
  },
  {
    title: "Flexible, No-Pressure Plans",
    icon: "https://framerusercontent.com/images/0PVKECKCp64j5cp1A3MSZVbtJE.svg?width=40&height=40",
  },
  {
    title: "Real Results, Real Fast",
    icon: "https://framerusercontent.com/images/Iz631LCvZvLbZ7a98OO0sIc.svg?width=40&height=40",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--gym-dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Pre-heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--gym-yellow)" }} />
          <span className="text-gym-yellow text-[14px] font-semibold uppercase tracking-wider">Why Choose Us</span>
        </div>

        <h2 className="font-bayon text-[40px] md:text-[56px] leading-[1.05] uppercase mb-4" style={{ color: "var(--gym-white)" }}>
          Why Choose Fitnix?
        </h2>
        <p className="text-gym-body text-[16px] max-w-[700px] mb-12 leading-relaxed">
          We're not just a gym — we're your partner in transformation. At Fitnix, we combine smart training, real support, and a vibe that keeps you coming back. Leveling up, Fitnix is where your transformation begins — and sticks.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col items-center text-center p-6 rounded-[4px]"
              style={{ backgroundColor: "var(--gym-dark-card)", border: "1px solid var(--gym-dark-border)" }}
            >
              <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: "var(--gym-yellow)" }}>
                <img src={f.icon} alt="" className="w-8 h-8" />
              </div>
              <h4 className="font-bayon text-[18px] uppercase" style={{ color: "var(--gym-white)" }}>
                {f.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Stats + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="font-bayon text-[32px] md:text-[40px] uppercase mb-8 leading-[1.1]" style={{ color: "var(--gym-white)" }}>
              Trainers Dedicated to Your True Transformation
            </h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-[4px]" style={{ backgroundColor: "var(--gym-dark-card)", border: "1px solid var(--gym-dark-border)" }}>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-bayon text-[48px]" style={{ color: "var(--gym-yellow)" }}>100</span>
                  <span className="font-bayon text-[24px]" style={{ color: "var(--gym-yellow)" }}>+</span>
                </div>
                <p className="text-gym-body text-[14px]">active members and growing every day</p>
              </div>
              <div className="p-6 rounded-[4px]" style={{ backgroundColor: "var(--gym-dark-card)", border: "1px solid var(--gym-dark-border)" }}>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-bayon text-[48px]" style={{ color: "var(--gym-yellow)" }}>1,940</span>
                </div>
                <p className="text-gym-body text-[14px]">retention rate — people don't just join, they stay</p>
              </div>
            </div>
          </div>
          <div className="rounded-[4px] overflow-hidden">
            <img
              src="https://framerusercontent.com/images/eiHVgtxdCfWee1XdCeDYpEuqnx8.png?scale-down-to=1024&width=1914&height=1056"
              alt="Trainers"
              className="w-full h-auto object-cover rounded-[4px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
