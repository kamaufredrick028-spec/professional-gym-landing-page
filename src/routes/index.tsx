import { createFileRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProgramsSection from "../components/ProgramsSection";
import WhyChooseSection from "../components/WhyChooseSection";
import TransformationSection from "../components/TransformationSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import TrainersSection from "../components/TrainersSection";
import ContactSection from "../components/ContactSection";
import BlogSection from "../components/BlogSection";
import NewsletterSection from "../components/NewsletterSection";
import Footer from "../components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Fitnix – Wellness Website Template" },
      { name: "description", content: "Fitnix is a high-performance fitness website Landing Page Template built for gyms, trainers, and wellness coaches." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--gym-dark)" }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseSection />
      <TransformationSection />
      <PricingSection />
      <TestimonialsSection />
      <TrainersSection />
      <ContactSection />
      <BlogSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}
