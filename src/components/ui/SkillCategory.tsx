import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

export const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-gray-900 text-gray-300 rounded-lg px-4 py-2 text-sm font-medium border border-gray-700"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};