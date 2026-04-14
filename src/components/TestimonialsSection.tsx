const testimonials = [
  {
    name: "Clayton Adams",
    location: "Utica, Pennsylvania",
    rating: 4.5,
    text: "I noticed how organized and supportive everything was. The onboarding process was smooth, my personal goals were taken seriously, and the custom training plan was built to fit my lifestyle.",
    avatar: "https://framerusercontent.com/images/r6YwSzIwn9KJIlzBXMubD3itVww.png?width=88&height=88",
  },
  {
    name: "Bettie Brooks",
    location: "Shiloh, Hawaii",
    rating: 5,
    text: "I struggled with consistency. Other gyms felt transactional — but here, I found a real system. Within 2 months, I felt stronger, more focused, and more disciplined — not just in fitness, but in life. The atmosphere is professional yet motivating, and the facilities are spotless.",
    avatar: "https://framerusercontent.com/images/qRF82PHc56DiMoGOYzjc6eoRLyI.png?width=88&height=88",
  },
  {
    name: "Bettie Curry",
    location: "San Jose, South Dakota",
    rating: 5,
    text: "I've tried a few gyms before but always ended up quitting after a few weeks. Fitnix changed that. From day one, I felt like I belonged — the trainers listened, understood my goals, and created a plan that felt realistic but challenging.",
    avatar: "https://framerusercontent.com/images/u7ugRBVdgu3BrL5PUv5Xb9yuZuk.png?width=88&height=88",
  },
  {
    name: "Billy Pearson",
    location: "Santa Ana, Illinois",
    rating: 5,
    text: "As someone who's been to multiple gyms, I can confidently say that Fitnix offers a premium, business-level fitness experience. The trainers are certified, the space is clean and modern, and the programs are built around actual progress.",
    avatar: "https://framerusercontent.com/images/3j73pH2i5v3ktWlDV4ye1stnXU.png?width=88&height=88",
  },
  {
    name: "Logan Mendoza",
    location: "Celina, Delaware",
    rating: 5,
    text: "\"I've been training at Fitnix for over 6 months, and what keeps me here is their commitment to progress. Every trainer is goal-oriented — they don't just motivate, they measure.",
    avatar: "https://framerusercontent.com/images/84xLTZdQKnJi90ZN1bYLk9ERIg.png?width=88&height=88",
  },
  {
    name: "Alex Doyle",
    location: "Manchester, Kentucky",
    rating: 5,
    text: "They walk you through your journey, adapt based on your results, and offer both physical and mindset support. As someone balancing university and part-time work, I appreciated their flexible scheduling and communication.",
    avatar: "https://framerusercontent.com/images/OZqQlhsk3eyUhm5nKgufNBszjV0.png?width=88&height=88",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i <= Math.floor(rating) ? "var(--gym-yellow)" : "var(--gym-dark-border)"}>
          <path d="M8 0l2.47 5.01L16 5.82l-4 3.9.94 5.5L8 12.68 3.06 15.22l.94-5.5-4-3.9 5.53-.81z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="our-testimonials" className="py-20 md:py-28" style={{ backgroundColor: "var(--gym-black)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Pre-heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--gym-yellow)" }} />
          <span className="text-gym-yellow text-[14px] font-semibold uppercase tracking-wider">Our Testimonials</span>
        </div>

        <h2 className="font-bayon text-[40px] md:text-[56px] leading-[1.05] uppercase mb-4" style={{ color: "var(--gym-white)" }}>
          Proof of Performance
        </h2>
        <p className="text-gym-body text-[16px] max-w-[600px] mb-12 leading-relaxed">
          We believe fitness is more than just reps and sets — it's about building confidence, resilience, and a better life.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-[4px] p-6"
              style={{ backgroundColor: "var(--gym-dark-card)", border: "1px solid var(--gym-dark-border)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img src={t.avatar} alt={t.name} className="w-[44px] h-[44px] rounded-full" />
                <div>
                  <h4 className="text-[15px] font-semibold" style={{ color: "var(--gym-white)" }}>{t.name}</h4>
                  <p className="text-gym-body text-[13px]">{t.location}</p>
                </div>
              </div>
              <Stars rating={t.rating} />
              <p className="text-gym-body text-[14px] mt-4 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
