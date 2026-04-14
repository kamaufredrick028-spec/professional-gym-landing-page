export default function ContactSection() {
  return (
    <section id="contact-us" className="py-20 md:py-28" style={{ backgroundColor: "var(--gym-dark)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "var(--gym-yellow)" }} />
              <span className="text-gym-yellow text-[14px] font-semibold uppercase tracking-wider">Contact</span>
            </div>
            <h2 className="font-bayon text-[40px] md:text-[48px] leading-[1.05] uppercase mb-4" style={{ color: "var(--gym-white)" }}>
              Let's schedule your first session
            </h2>
            <p className="text-gym-body text-[16px] leading-relaxed mb-8">
              Got questions or ready to begin your fitness journey with Fitnix? Take the first step toward a stronger, healthier you.
            </p>
            <div className="rounded-[4px] overflow-hidden">
              <img
                src="https://framerusercontent.com/images/2nUlEGdjaqeqeJyb9HZvg4VXQ.png?scale-down-to=1024&width=2880&height=2648"
                alt="Contact"
                className="w-full h-auto object-cover rounded-[4px]"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>

          {/* Right - Form */}
          <div className="rounded-[4px] p-6 md:p-8" style={{ backgroundColor: "var(--gym-dark-card)", border: "1px solid var(--gym-dark-border)" }}>
            <form className="flex flex-col gap-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-[4px] text-[14px] outline-none"
                  style={{
                    backgroundColor: "var(--gym-dark-surface)",
                    border: "1px solid var(--gym-dark-border)",
                    color: "var(--gym-white)",
                  }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-[4px] text-[14px] outline-none"
                  style={{
                    backgroundColor: "var(--gym-dark-surface)",
                    border: "1px solid var(--gym-dark-border)",
                    color: "var(--gym-white)",
                  }}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-[4px] text-[14px] outline-none"
                  style={{
                    backgroundColor: "var(--gym-dark-surface)",
                    border: "1px solid var(--gym-dark-border)",
                    color: "var(--gym-white)",
                  }}
                />
              </div>
              <select
                className="w-full px-4 py-3 rounded-[4px] text-[14px] outline-none appearance-none"
                style={{
                  backgroundColor: "var(--gym-dark-surface)",
                  border: "1px solid var(--gym-dark-border)",
                  color: "var(--gym-body)",
                }}
                defaultValue=""
              >
                <option value="" disabled>Select Programs --</option>
                <option value="Transformation Programs">Transformation Programs</option>
                <option value="Personal Training">Personal Training</option>
                <option value="Group Classes">Group Classes</option>
                <option value="Nutrition Coaching">Nutrition Coaching</option>
                <option value="Online Coaching">Online Coaching</option>
              </select>
              <textarea
                placeholder="Massage (Optional)"
                rows={4}
                className="w-full px-4 py-3 rounded-[4px] text-[14px] outline-none resize-none"
                style={{
                  backgroundColor: "var(--gym-dark-surface)",
                  border: "1px solid var(--gym-dark-border)",
                  color: "var(--gym-white)",
                }}
              />
              <button
                type="submit"
                className="w-full py-3 rounded-[4px] text-[16px] font-semibold transition-colors"
                style={{ backgroundColor: "var(--gym-yellow)", color: "var(--gym-black)" }}
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
