import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Achievements } from './components/sections/Achievements';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;