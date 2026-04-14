export default function Footer() {
  return (
    <footer className="pt-16 pb-8" style={{ backgroundColor: "var(--gym-black)" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* Top section */}
        <div className="flex items-center justify-between mb-12">
          <h3 className="font-bayon text-[24px] md:text-[32px] uppercase max-w-[400px] leading-tight" style={{ color: "var(--gym-white)" }}>
            We believe fitness is more than just sets building confidence
          </h3>
          <div className="hidden md:flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: "1px solid var(--gym-dark-border)" }}>
              <img src="https://framerusercontent.com/images/5oxdwqOA9TvD20K3x4ARuj5dhM.svg" alt="Social" className="w-4 h-4 invert" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: "1px solid var(--gym-dark-border)" }}>
              <img src="https://framerusercontent.com/images/7GNVn6G6HijInF677ukfRhWi0.svg" alt="Social" className="w-4 h-4 invert" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: "1px solid var(--gym-dark-border)" }}>
              <img src="https://framerusercontent.com/images/BwJ8TsPdxch7itorI85rre4q8.svg" alt="Social" className="w-4 h-4 invert" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ border: "1px solid var(--gym-dark-border)" }}>
              <img src="https://framerusercontent.com/images/IuqU3qa8xHU2fMzKvwBoBhWT4F4.svg" alt="Social" className="w-4 h-4 invert" />
            </a>
          </div>
        </div>

        <div className="border-t mb-12" style={{ borderColor: "var(--gym-dark-border)" }} />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <img
              src="https://framerusercontent.com/images/MkxKHDQ4C1RXR1nYtbINkBNPUM.svg"
              alt="Fitnix Logo"
              className="h-[34px] w-auto mb-4"
            />
          </div>

          {/* Quick Link */}
          <div>
            <h4 className="font-semibold text-[14px] uppercase mb-4" style={{ color: "var(--gym-white)" }}>Quick Link</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" className="text-gym-body text-[14px] hover:text-gym-yellow">About Us</a>
              <a href="#service-section" className="text-gym-body text-[14px] hover:text-gym-yellow">Program</a>
              <a href="#pricing-plan" className="text-gym-body text-[14px] hover:text-gym-yellow">Pricing</a>
              <a href="#" className="text-gym-body text-[14px] hover:text-gym-yellow">Blogs</a>
            </div>
          </div>

          {/* Utility */}
          <div>
            <h4 className="font-semibold text-[14px] uppercase mb-4" style={{ color: "var(--gym-white)" }}>Utility</h4>
            <div className="flex flex-col gap-3">
              <a href="#" className="text-gym-body text-[14px] hover:text-gym-yellow">404</a>
              <a href="#" className="text-gym-body text-[14px] hover:text-gym-yellow">Privacy policy</a>
              <a href="#" className="text-gym-body text-[14px] hover:text-gym-yellow">Terms & conditions</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-[14px] uppercase mb-4" style={{ color: "var(--gym-white)" }}>Contact</h4>
            <div className="flex flex-col gap-3">
              <span className="text-gym-body text-[14px]">+12 (307) 535-0133</span>
              <span className="text-gym-body text-[14px]">contact@fitnix.com</span>
              <span className="text-gym-body text-[14px]">6391 Elgin St. Celina, Delaware 10299</span>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 text-center" style={{ borderColor: "var(--gym-dark-border)" }}>
          <p className="text-gym-body text-[13px]">
            © 2024 All Right Reserved by <a href="#" className="text-gym-yellow">Grabui</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
