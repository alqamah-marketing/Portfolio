import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { WhatIDo } from './sections/WhatIDo';
import { SelectedWork } from './sections/SelectedWork';
import { AboutMe } from './sections/AboutMe';
import { Experience } from './sections/Experience';
import { Expertise } from './sections/Expertise';
import { Faq } from './sections/Faq';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', backgroundColor: 'var(--bg-primary)' }}>
      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        {/* Section 01: Hero */}
        <Hero />

        {/* Section 02: What I Do */}
        <WhatIDo />

        {/* Section 03: Selected Work */}
        <SelectedWork />

        {/* Section 04: About Me */}
        <AboutMe />

        {/* Section 05: Experience */}
        <Experience />

        {/* Section 06: Expertise */}
        <Expertise />

        {/* Section 07: FAQs */}
        <Faq />

        {/* Section 08: Contact */}
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
