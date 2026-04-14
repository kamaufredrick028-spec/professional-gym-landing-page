const transformations = [
  {
    name: "Courtney Henry",
    age: 52,
    weeks: "33 weeks",
    before: { weight: "99kg", fat: "35%" },
    after: { weight: "77kg", fat: "20%" },
    image: "https://framerusercontent.com/images/fVTouajSdBoOEmO3KbAvZ0F3AB4.png?scale-down-to=1024&width=924&height=1430",
  },
  {
    name: "Leslie Alexander",
    age: 25,
    weeks: "36 weeks",
    before: { weight: "85kg", fat: "35%" },
    after: { weight: "74kg", fat: "15%" },
    image: "https://framerusercontent.com/images/B3gwO3mz52hASSAFvBIjAqg81CQ.webp?scale-down-to=1024&width=1448&height=2032",
  },
  {
    name: "Darlene Robertson",
    age: 36,
    weeks: "34 weeks",
    before: { weight: "98kg", fat: "33%" },
    after: { weight: "78kg", fat: "18%" },
    image: "https://framerusercontent.com/images/xTnejWg7uPPkE1Dz8aRyt2rNCa0.webp?scale-down-to=1024&width=1017&height=1500",
  },
];

export default function TransformationSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--gym-dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Pre-heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--gym-yellow)" }} />
          <span className="text-gym-yellow text-[14px] font-semibold uppercase tracking-wider">Before & After</span>
        </div>

        <h2 className="font-bayon text-[40px] md:text-[56px] leading-[1.05] uppercase mb-4" style={{ color: "var(--gym-white)" }}>
          Let's See Our Students Have Transformed
        </h2>
        <p className="text-gym-body text-[16px] max-w-[600px] mb-12 leading-relaxed">
          We build confidence, habits, and mindset. These are the real stories of people who started just like you — and now live stronger.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((t) => (
            <div
              key={t.name}
              className="rounded-[4px] overflow-hidden"
              style={{ backgroundColor: "var(--gym-dark-card)", border: "1px solid var(--gym-dark-border)" }}
            >
              {/* Image */}
              <div className="relative h-[300px] overflow-hidden">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-bayon text-[20px] uppercase" style={{ color: "var(--gym-white)" }}>{t.name}</h4>
                    <span className="text-gym-body text-[13px]">Age: {t.age}</span>
                  </div>
                  <span className="text-gym-body text-[13px]">{t.weeks}</span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[12px] uppercase font-semibold px-2 py-0.5 rounded-[2px]" style={{ backgroundColor: "var(--gym-yellow-30)", color: "var(--gym-yellow)" }}>Before</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bayon text-[28px]" style={{ color: "var(--gym-white)" }}>{t.before.weight}</span>
                      <span className="text-gym-body text-[13px]">{t.before.fat}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[12px] uppercase font-semibold px-2 py-0.5 rounded-[2px]" style={{ backgroundColor: "var(--gym-yellow)", color: "var(--gym-black)" }}>After</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="font-bayon text-[28px]" style={{ color: "var(--gym-yellow)" }}>{t.after.weight}</span>
                      <span className="text-gym-body text-[13px]">{t.after.fat}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
