export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28" style={{ backgroundColor: "var(--gym-dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Pre-heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--gym-yellow)" }} />
          <span className="text-gym-yellow text-[14px] font-semibold uppercase tracking-wider">About Us</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <h2 className="font-bayon text-[40px] md:text-[56px] leading-[1.05] uppercase mb-6" style={{ color: "var(--gym-white)" }}>
              Begin Your Fitness Story with Fitnix
            </h2>
            <p className="text-gym-body text-[16px] leading-relaxed mb-8">
              We're more than just a fitness center — we're a movement built around real transformation. Our mission is simple help people become stronger, healthier, and more confident every single day.
            </p>

            <div className="flex flex-col gap-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--gym-yellow)" }}>
                  <img src="https://framerusercontent.com/images/InhO9HE8nmMrue1hSuKQ0QP76WY.svg?width=41&height=41" alt="" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bayon text-[20px] uppercase mb-1" style={{ color: "var(--gym-white)" }}>Nutrition Guidance</h4>
                  <p className="text-gym-body text-[14px]">We measure progress, not just promises — and we deliver.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "var(--gym-yellow)" }}>
                  <img src="https://framerusercontent.com/images/HPP1PaRtDCdcprJVJkygIKgYtE.svg?width=42&height=43" alt="" className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bayon text-[20px] uppercase mb-1" style={{ color: "var(--gym-white)" }}>Goal-Focused Coaching</h4>
                  <p className="text-gym-body text-[14px]">Backed by experience a deep commitment to your success.</p>
                </div>
              </div>
            </div>

            <a
              href="#our-trainers"
              className="inline-flex items-center gap-2 rounded-[4px] px-6 py-3 text-[16px] font-semibold border"
              style={{ borderColor: "var(--gym-yellow)", color: "var(--gym-yellow)" }}
            >
              Meet Our Trainers
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Right - Image */}
          <div className="relative rounded-[4px] overflow-hidden">
            <img
              src="https://framerusercontent.com/images/w77l7Ptp1US9u7oMba4055lsGNw.png?scale-down-to=1024&width=1940&height=2560"
              alt="About Fitnix"
              className="w-full h-auto object-cover rounded-[4px]"
              style={{ maxHeight: "600px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
