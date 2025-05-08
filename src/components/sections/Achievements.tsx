import React from 'react';
import { Trophy, Users, Award } from 'lucide-react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      title: 'Semi-finalist, BGSW AutoVisionX Hackathon 2024',
      description: 'Developed an innovative computer vision solution for autonomous systems, reaching the semi-finals among 200+ teams.',
      icon: <Trophy className="text-yellow-400" size={24} />
    },
    {
      title: 'Participant, Techathon 2024 & Coral Quest Challenge',
      description: 'Participated in multiple national-level technical competitions, gaining valuable experience in rapid prototyping and problem-solving.',
      icon: <Award className="text-blue-400" size={24} />
    },
    {
      title: 'Core Member, MARS AI/ML Club',
      description: 'Selected as a core member of the college AI/ML club, organizing workshops and mentoring junior students in machine learning concepts.',
      icon: <Users className="text-green-400" size={24} />
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-blue-400">Achievements</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {achievement.icon}
                <h3 className="text-lg font-semibold ml-2">{achievement.title}</h3>
              </div>
              
              <p className="text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};