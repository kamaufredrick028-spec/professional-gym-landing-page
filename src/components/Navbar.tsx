import { useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Program", href: "#service-section" },
  { label: "Pricing", href: "#pricing-plan" },
  { label: "Testimonial", href: "#our-testimonials" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 lg:px-20 py-4" style={{ backgroundColor: "rgba(0,0,0,0)" }}>
      <div className="flex items-center">
        <a href="#hero">
          <img
            src="https://framerusercontent.com/images/MkxKHDQ4C1RXR1nYtbINkBNPUM.svg"
            alt="Fitnix Logo"
            className="h-[34px] w-auto"
          />
        </a>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-gym-body text-[16px] font-normal hover:text-gym-yellow transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <a
          href="#contact-us"
          className="inline-flex items-center justify-center rounded-[4px] px-6 py-3 text-[16px] font-semibold"
          style={{ backgroundColor: "var(--gym-yellow)", color: "var(--gym-black)" }}
        >
          Contact Us
        </a>
      </div>

      {/* Mobile hamburger */}
      <button className="md:hidden text-gym-body" onClick={() => setOpen(!open)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 flex flex-col gap-4 p-6 md:hidden" style={{ backgroundColor: "var(--gym-dark-card)" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gym-body text-[16px]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact-us"
            className="inline-flex items-center justify-center rounded-[4px] px-6 py-3 text-[16px] font-semibold"
            style={{ backgroundColor: "var(--gym-yellow)", color: "var(--gym-black)" }}
          >
            Contact Us
          </a>
        </div>
      )}
    </nav>
  );
}
