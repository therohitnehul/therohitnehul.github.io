import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-blue-400">Me</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            I'm a final-year AI & ML engineering student from Pune, India with hands-on 
            experience in machine learning, deep learning, and full-stack development. 
            Passionate about building real-world AI applications and solving complex problems.
          </p>
          
          <p className="text-lg text-gray-300 leading-relaxed">
            My journey in technology is driven by a fascination with how artificial intelligence 
            can transform industries and improve lives. I'm constantly exploring new technologies 
            and approaches, and I'm particularly interested in the intersection of AI/ML with 
            practical, real-world applications.
          </p>
        </div>
      </div>
    </section>
  );
};