
import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100 via-gray-50 to-white"
        aria-hidden="true"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <span 
              className={`hero-badge ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.2s' }}
            >
              Welcome to my portfolio
            </span>
            <h1 
              className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.4s' }}
            >
              Creating <span className="text-blue-600">digital</span> experiences that matter
            </h1>
            <p 
              className={`mt-6 text-lg md:text-xl text-gray-600 max-w-2xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.6s' }}
            >
              I'm a passionate developer focused on building beautiful, functional, and user-centered digital experiences. Discover my projects and get in touch.
            </p>
            <div 
              className={`mt-10 flex flex-col sm:flex-row gap-4 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: '0.8s' }}
            >
              <button 
                onClick={scrollToProjects}
                className="px-6 py-3 rounded-lg bg-primary text-white transition-all hover:bg-primary/90 hover:translate-y-[-2px] shadow-sm"
              >
                View My Work
              </button>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-lg border border-gray-200 hover:border-gray-400 transition-all"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div 
            className={`mt-12 lg:mt-0 flex items-center justify-center ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}
            style={{ animationDelay: '1s' }}
          >
            <div className="relative w-full max-w-lg">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
              <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-2000" />
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float animation-delay-4000" />
              <div className="relative w-full h-[400px] rounded-2xl glass-card flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-90" />
                <div className="relative z-10 text-center p-6">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-md">
                    <span className="text-3xl">👋</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Hi, I'm Kamal</h3>
                  <p className="text-gray-600 mb-6">Full Stack Developer</p>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-blue-500" />
                      <span className="text-sm">React</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="text-sm">Express.js</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-purple-500" />
                      <span className="text-sm">TypeScript</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 rounded-full bg-green-600" />
                      <span className="text-sm">MongoDB/Postgresql</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button 
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
};

export default Hero;
