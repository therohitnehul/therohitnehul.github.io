import React from 'react';
import { SkillCategory } from '../ui/SkillCategory';

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'SQL', 'JavaScript', 'TypeScript']
    },
    {
      title: 'Machine Learning',
      skills: ['TensorFlow', 'Keras', 'scikit-learn', 'PyTorch', 'Data Analysis']
    },
    {
      title: 'Computer Vision & NLP',
      skills: ['OpenCV', 'CNN', 'NLP', 'YOLO', 'Image Processing']
    },
    {
      title: 'DevOps & Tools',
      skills: ['Git', 'Jupyter', 'Docker', 'VSCode', 'Linux']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};