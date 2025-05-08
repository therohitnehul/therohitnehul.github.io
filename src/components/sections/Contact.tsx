import React from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get In <span className="text-blue-400">Touch</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a 
                      href="mailto:rohitnehul04@gmail.com" 
                      className="text-gray-200 hover:text-blue-400 transition-colors"
                    >
                      rohitnehul04@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Github className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">GitHub</p>
                    <a 
                      href="https://github.com/rohit04nehul" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-blue-400 transition-colors"
                    >
                      github.com/rohit04nehul
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Linkedin className="text-blue-400 mr-4" size={24} />
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/rohit-nehul" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-200 hover:text-blue-400 transition-colors"
                    >
                      linkedin.com/in/rohit-nehul
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center"
                >
                  Send Message
                  <Send size={16} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};