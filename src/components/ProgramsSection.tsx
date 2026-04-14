import { useState } from "react";

const programs = [
  { name: "Transformation Programs", active: true },
  { name: "Personal Training", active: false },
  { name: "Group Classes", active: false },
  { name: "Nutrition Coaching", active: false },
  { name: "Online Coaching", active: false },
];

const features = [
  "Goal-oriented training plans",
  "Before & After progress tracking",
  "24/7 chat with trainer support",
];

export default function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState(0);

  return (
    <section id="service-section" className="py-20 md:py-28" style={{ backgroundColor: "var(--gym-dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Pre-heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--gym-yellow)" }} />
          <span className="text-gym-yellow text-[14px] font-semibold uppercase tracking-wider">Our Programs</span>
        </div>

        <h2 className="font-bayon text-[40px] md:text-[56px] leading-[1.05] uppercase mb-4" style={{ color: "var(--gym-white)" }}>
          Programs That Deliver Real Results
        </h2>
        <p className="text-gym-body text-[16px] max-w-[600px] mb-12 leading-relaxed">
          Personalized, trackable programs built to push limits and redefine what your body can do.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left - Image + Features */}
          <div className="rounded-[4px] overflow-hidden p-6 md:p-10" style={{ backgroundColor: "var(--gym-dark-card)" }}>
            <div className="relative rounded-[4px] overflow-hidden mb-8">
              <img
                src="https://framerusercontent.com/images/aB9Wk6x9SCAi9wa9VrMdOYsOFI.webp?scale-down-to=1024"
                alt="Transformation Programs"
                className="w-full h-auto object-cover"
              />
            </div>
            <h3 className="font-bayon text-[28px] uppercase mb-3" style={{ color: "var(--gym-white)" }}>
              {programs[activeProgram].name}
            </h3>
            <p className="text-gym-body text-[14px] mb-6 leading-relaxed">
              Fitnix offers structured, time-bound programs backed by expert trainers, nutrition guidance, and weekly accountability.
            </p>
            <div className="flex flex-col gap-3">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--gym-yellow)" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--gym-black)" strokeWidth="3">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gym-body text-[14px]">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Program list */}
          <div className="flex flex-col gap-0">
            {programs.map((program, i) => (
              <button
                key={program.name}
                onClick={() => setActiveProgram(i)}
                className="flex items-center justify-between py-6 border-b text-left transition-colors"
                style={{
                  borderColor: "var(--gym-dark-border)",
                  color: activeProgram === i ? "var(--gym-yellow)" : "var(--gym-white)",
                }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-gym-body text-[14px] w-6">0{i + 1}</span>
                  <span className="font-bayon text-[24px] md:text-[32px] uppercase">{program.name}</span>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
