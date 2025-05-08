import React from 'react';
import { ProjectCard } from '../ui/ProjectCard';

export const Projects: React.FC = () => {
  const projects = [
    {
      title: 'College.AI',
      description: 'An AI toolkit leveraging GenAI & Gemini API to assist college students with various academic tasks, including paper summarization and concept explanation.',
      tags: ['Python', 'GenAI', 'Gemini API', 'TensorFlow'],
      imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Industrial AI',
      description: 'A surveillance system for industrial safety using computer vision to detect safety violations and potential hazards in real-time.',
      tags: ['Computer Vision', 'OpenCV', 'Python', 'Deep Learning'],
      imageUrl: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'SpecsAway',
      description: 'CNN-based Android app designed to guide users through eye exercises, helping reduce eye strain for people who wear glasses.',
      tags: ['Android', 'CNN', 'Java', 'TensorFlow'],
      imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Plant Disease Detector',
      description: 'CNN & Flask-based real-time diagnosis system to identify diseases in plants from images, helping farmers take timely action.',
      tags: ['CNN', 'Flask', 'Python', 'Image Processing'],
      imageUrl: 'https://images.pexels.com/photos/808510/pexels-photo-808510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Smart Parking Assist',
      description: 'Computer vision-powered parking system that optimizes space utilization and guides drivers to available spots.',
      tags: ['Computer Vision', 'IoT', 'Python', 'Real-time Processing'],
      imageUrl: 'https://images.pexels.com/photos/227731/pexels-photo-227731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    } 
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};