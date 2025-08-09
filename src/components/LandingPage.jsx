// src/components/LandingPage.jsx
import React from "react";
import Hero from "./Hero";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Certifications from "./Certifications";
import Education from "./Education";
import Experience from "./Experience";
import FAQ from "./FAQ";
import PortfolioGallery from "./PortfolioGallery";
import Newsletter from "./Newsletter";
import Team from "./Team";
import Contact from "./Contact";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Home />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Testimonials />
      <Blog />
      <Certifications />
      <Education />
      <Experience />
      <FAQ />
      <PortfolioGallery />
      <Newsletter />
      <Team />
      <Contact />
    </>
  );
}
