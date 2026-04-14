export default function NewsletterSection() {
  return (
    <section className="py-16" style={{ backgroundColor: "var(--gym-dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div
          className="rounded-[4px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ backgroundColor: "var(--gym-dark-card)", border: "1px solid var(--gym-dark-border)" }}
        >
          <div className="flex-1">
            <h3 className="font-bayon text-[28px] md:text-[36px] uppercase mb-2" style={{ color: "var(--gym-white)" }}>
              Join our newsletter for advice & offers!
            </h3>
            <p className="text-gym-body text-[14px]">
              Stay updated and informed with our latest classes, events, news, and best offers.
            </p>
          </div>
          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-[4px] text-[14px] outline-none flex-1 md:w-[280px]"
              style={{
                backgroundColor: "var(--gym-dark-surface)",
                border: "1px solid var(--gym-dark-border)",
                color: "var(--gym-white)",
              }}
            />
            <button
              className="px-6 py-3 rounded-[4px] text-[14px] font-semibold whitespace-nowrap"
              style={{ backgroundColor: "var(--gym-yellow)", color: "var(--gym-black)" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
