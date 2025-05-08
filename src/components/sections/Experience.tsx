import React from 'react';
import { BriefcaseIcon } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="text-blue-400">Experience</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-blue-500 pl-8 pb-8">
            <div className="absolute -left-[10px] top-0 w-5 h-5 rounded-full bg-blue-500"></div>
            
            <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="text-blue-400 mr-2" size={20} />
                <h3 className="text-xl font-semibold">Software Engineer Intern</h3>
              </div>
              
              <p className="text-gray-400 mb-4">Cybernetics Software Pvt Ltd | Summer 2023</p>
              
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Developed SpecsAway app using Convolutional Neural Networks to detect eye movements and guide eye exercises</li>
                <li>Improved app performance by 40% through code optimization and efficient model design</li>
                <li>Collaborated with a cross-functional team to refine user experience and interface design</li>
                <li>Implemented robust testing protocols to ensure reliability across different Android devices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};