
import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 2,
    title: "Weather Application",
    description: "A weather forecast application with location search, 7-day forecast, and interactive maps.",
    tags: ["React", "OpenWeather API", "Mapbox", "CSS"],
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/weather-app",
  },
  {
    id: 3,
    title: "Task Management System",
    description: "A Kanban-style task management application with drag-and-drop functionality and user authentication.",
    tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/task-management",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing projects and skills with smooth animations.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&auto=format&fit=crop&w=1480&q=80",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/portfolio",
  },
];

const Projects = () => {
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scale-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observerRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observerRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="projects" className="section-container bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="hero-badge">My Work</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
        <p className="text-gray-600">
          Explore a collection of my recent projects, showcasing my skills and expertise in web development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            ref={(el) => (observerRefs.current[index] = el)}
            className="project-card opacity-0"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-card-image"
              />
              <div className="absolute top-0 right-0 p-3 flex space-x-2">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full shadow-sm hover:bg-white transition-colors"
                    aria-label="GitHub repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full shadow-sm hover:bg-white transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={`${project.id}-${tag}`}
                    className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a 
          href="https://github.com/Kamal-lochanDash" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 text-white transition-all hover:bg-gray-800"
        >
          <Github className="w-5 h-5" />
          <span>View More on GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
