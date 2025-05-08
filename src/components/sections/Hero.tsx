import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center z-10">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-white">Rohit </span>
            <span className="text-blue-400">Nehul</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            AI/ML Enthusiast | Software Engineer | Researcher
          </p>
          
          <div className="flex justify-center mb-12">
            <a 
              href="mailto:rohitnehul04@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 animate-bounce text-gray-400 hover:text-blue-400 transition-colors"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={32} />
        </button>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
      </div>
    </section>
  );
};