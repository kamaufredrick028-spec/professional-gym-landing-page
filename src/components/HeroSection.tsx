export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "var(--gym-dark)" }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://framerusercontent.com/images/X3DA1GydQgm47ULJZer9fdCc74.webp?scale-down-to=2048&width=5760&height=3712"
          alt="Hero background"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(18,18,18,0.3) 0%, rgba(18,18,18,0.9) 100%)" }} />
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-20">
        {/* Social proof badge */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex -space-x-2">
            {[
              "https://framerusercontent.com/images/3j73pH2i5v3ktWlDV4ye1stnXU.png?width=88&height=88",
              "https://framerusercontent.com/images/84xLTZdQKnJi90ZN1bYLk9ERIg.png?width=88&height=88",
              "https://framerusercontent.com/images/OZqQlhsk3eyUhm5nKgufNBszjV0.png?width=88&height=88",
              "https://framerusercontent.com/images/RqgIu3Q4XdGeRAvebVNA8zHsy8.png?width=88&height=88",
            ].map((src, i) => (
              <img key={i} src={src} alt="" className="w-[36px] h-[36px] rounded-full border-2" style={{ borderColor: "var(--gym-dark)" }} />
            ))}
          </div>
          <div className="flex items-center gap-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--gym-yellow)">
              <path d="M8 0l2.47 5.01L16 5.82l-4 3.9.94 5.5L8 12.68 3.06 15.22l.94-5.5-4-3.9 5.53-.81z" />
            </svg>
            <span className="text-gym-body text-[14px]">4.8/5 Verified reviews</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-bayon text-[72px] md:text-[96px] lg:text-[120px] leading-[0.9] uppercase tracking-tight mb-6" style={{ color: "var(--gym-white)" }}>
          Transform Your<br />Mind & Muscle.
        </h1>

        {/* Experience badge */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2 px-4 py-2 rounded-[4px]" style={{ backgroundColor: "var(--gym-yellow)", color: "var(--gym-black)" }}>
            <span className="text-[14px] font-semibold">Our Experience</span>
          </div>
          <span className="font-bayon text-[48px] leading-none" style={{ color: "var(--gym-yellow)" }}>(12+)</span>
        </div>

        <p className="text-gym-body text-[14px] mb-2">16K+ Membership enjoy our facilities</p>

        <p className="text-gym-body text-[16px] max-w-[500px] mb-8 leading-relaxed">
          Build confidence, strength, and discipline with science-backed training, expert coaching, and a community that never lets you quit.
        </p>

        <a
          href="#contact-us"
          className="inline-flex items-center gap-2 rounded-[4px] px-8 py-4 text-[16px] font-semibold"
          style={{ backgroundColor: "var(--gym-yellow)", color: "var(--gym-black)" }}
        >
          Join Fitnix Now
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
