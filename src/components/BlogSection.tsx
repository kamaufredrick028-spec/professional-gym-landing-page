const blogs = [
  {
    category: "Workout",
    date: "February 25, 2025",
    title: "Best Recovery Techniques After an Intense Workout",
    image: "https://framerusercontent.com/images/MsINMDyfuvdfb05RPA1mP6wvr54.png?scale-down-to=512&width=726&height=564",
  },
  {
    category: "Excersice",
    date: "February 25, 2025",
    title: "How to Stay Consistent with Your Fitness Routine",
    image: "https://framerusercontent.com/images/bgmINw7PuyYm8tZ1jLN3C5pTo.png?scale-down-to=512&width=727&height=564",
  },
  {
    category: "Weight Loss",
    date: "February 25, 2025",
    title: "Strength vs. Cardio: Which Should You Prioritize?",
    image: "https://framerusercontent.com/images/qSLV58YXq6WKykjdX6dsUJ9bU.png?scale-down-to=512&width=726&height=564",
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: "var(--gym-dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Pre-heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--gym-yellow)" }} />
          <span className="text-gym-yellow text-[14px] font-semibold uppercase tracking-wider">Latest Articles</span>
        </div>

        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-bayon text-[40px] md:text-[56px] leading-[1.05] uppercase mb-4" style={{ color: "var(--gym-white)" }}>
              Expert Fitness Insights
            </h2>
            <p className="text-gym-body text-[16px] max-w-[600px] leading-relaxed">
              Our blog delivers expert advice, workout tips, nutrition insights, and real stories to help you level up your fitness journey.
            </p>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 rounded-[4px] px-6 py-3 text-[14px] font-semibold border whitespace-nowrap"
            style={{ borderColor: "var(--gym-yellow)", color: "var(--gym-yellow)" }}
          >
            View all Blogs
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="rounded-[4px] overflow-hidden cursor-pointer group"
              style={{ backgroundColor: "var(--gym-dark-card)", border: "1px solid var(--gym-dark-border)" }}
            >
              <div className="relative h-[200px] overflow-hidden">
                <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[12px] uppercase font-semibold px-2 py-0.5 rounded-[2px]" style={{ backgroundColor: "var(--gym-yellow)", color: "var(--gym-black)" }}>
                    {blog.category}
                  </span>
                  <span className="text-gym-body text-[13px]">{blog.date}</span>
                </div>
                <h4 className="font-bayon text-[20px] uppercase leading-tight" style={{ color: "var(--gym-white)" }}>
                  {blog.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
