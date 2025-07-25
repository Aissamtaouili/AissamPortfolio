import React from "react";
import Banner from "../components/Banner.jsx";
import About from "./About.jsx";
import SkillsGrid from "./SkillsGrid.jsx";
import Technologies from "./Technologies.jsx";
import ParticleAnimation from "./ParticleAnimation.jsx";
import ContactSection from "./ContactSection.jsx";
function Home() {
  return (
    <div className="relative min-h-screen text-zinc-100 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-indigo-900 via-slate-900 to-black opacity-90" />
      <ParticleAnimation />
      <Banner />
      <About />
      <Technologies />
      <SkillsGrid />
      <ContactSection />
    </div>
  );
}

export default Home;
