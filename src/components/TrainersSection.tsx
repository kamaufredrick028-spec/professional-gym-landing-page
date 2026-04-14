const trainers = [
  {
    name: "Blake Hudson",
    role: "Strength & Conditioning Coach",
    bio: "Blake is a Certified Personal Trainer (ACE-CPT) and Strength Coach with over 8 years of experience helping clients build lean muscle and boost athletic performance.",
    image: "https://framerusercontent.com/images/8HdOk6JpVrG6nExz6251vgzkc.png?width=678&height=1000",
  },
  {
    name: "Alex Harrington",
    role: "Holistic Fitness & Mobility Coach",
    bio: "Alex specializes in improving flexibility, posture, and overall body balance. With 6+ years of experience, he designs programs that reduce injuries and enhance functional strength.",
    image: "https://framerusercontent.com/images/xpx7U8HZOPOHfKQTBR8GxQOMoo.png?width=678&height=1000",
  },
  {
    name: "Nicholas Phillips",
    role: "Fat Loss & HIIT Expert",
    bio: "Nicholas is a certified HIIT coach known for his intense, result-driven fat-loss training. He's helped hundreds burn fat, boost endurance, and stay motivated with science-backed routines.",
    image: "https://framerusercontent.com/images/yDlCtjul72NrUEDcN8ppnW1lfbM.png?width=678&height=1000",
  },
  {
    name: "Louis Chavez",
    role: "Transformation Coach",
    bio: "Louis guides full-body transformations with custom meal plans, habit coaching, and personal accountability. His programs are tailored for long-term results, not just quick fixes.",
    image: "https://framerusercontent.com/images/IRvbf4nUQmhu7j7FMSWfCedZsIw.png?width=600&height=844",
  },
];

export default function TrainersSection() {
  return (
    <section id="our-trainers" className="py-20 md:py-28" style={{ backgroundColor: "var(--gym-dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Pre-heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--gym-yellow)" }} />
          <span className="text-gym-yellow text-[14px] font-semibold uppercase tracking-wider">Our Trainers</span>
        </div>

        <h2 className="font-bayon text-[40px] md:text-[56px] leading-[1.05] uppercase mb-4" style={{ color: "var(--gym-white)" }}>
          Our Expert Trainers
        </h2>
        <p className="text-gym-body text-[16px] max-w-[600px] mb-12 leading-relaxed">
          Our certified fitness professionals are more than just trainers — transformation specialists.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((t) => (
            <div
              key={t.name}
              className="rounded-[4px] overflow-hidden group"
              style={{ backgroundColor: "var(--gym-dark-card)", border: "1px solid var(--gym-dark-border)" }}
            >
              <div className="relative h-[320px] overflow-hidden">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5">
                <h4 className="font-bayon text-[20px] uppercase mb-1" style={{ color: "var(--gym-white)" }}>{t.name}</h4>
                <p className="text-[13px] mb-3" style={{ color: "var(--gym-yellow)" }}>{t.role}</p>
                <p className="text-gym-body text-[13px] leading-relaxed">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
