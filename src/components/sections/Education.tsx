import React from 'react';
import { GraduationCapIcon } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Education</span>
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <GraduationCapIcon className="text-blue-400 mr-2" size={24} />
              <h3 className="text-xl font-semibold">B.E. in AI & ML</h3>
            </div>
            
            <p className="text-gray-300 mb-2">PES Modern College of Engineering, Pune</p>
            <p className="text-gray-400 mb-4">2021–2025</p>
            
            <p className="text-gray-300">
              Pursuing a specialized degree in Artificial Intelligence and Machine Learning, 
              with coursework covering deep learning, computer vision, natural language processing, 
              and software engineering principles.
            </p>
          </div>
          
          <div className="bg-gray-900 rounded-lg p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <GraduationCapIcon className="text-blue-400 mr-2" size={24} />
              <h3 className="text-xl font-semibold">Higher Secondary Certificate (HSC)</h3>
            </div>
            
            <p className="text-gray-300 mb-2">PVG's Muktangan Junior College</p>
            <p className="text-gray-400 mb-4">2021</p>
            
            <p className="text-gray-300">
              Completed HSC with focus on Science and Mathematics, establishing a strong foundation 
              for further technical education in the field of computer science and engineering.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};