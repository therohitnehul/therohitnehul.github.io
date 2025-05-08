import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tags, 
  imageUrl 
}) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg border border-gray-800 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        
        <p className="text-gray-400 mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-blue-900/30 text-blue-300 rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};