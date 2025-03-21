
import React, { useEffect, useRef } from 'react';
import { Code, Server, Layout, Database, Globe, Award } from 'lucide-react';

const skills = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    description: "Creating responsive, user-friendly interfaces with React, Next.js, and modern CSS frameworks.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    description: "Building robust server-side applications and APIs using Node.js and related technologies.",
    technologies: ["Node.js", "Express", "GraphQL", "REST APIs"]
  },
  {
    title: "Database Management",
    icon: <Database className="w-6 h-6" />,
    description: "Designing and implementing efficient database solutions for various applications.",
    technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"]
  },
  {
    title: "Web Performance",
    icon: <Globe className="w-6 h-6" />,
    description: "Optimizing web applications for speed, accessibility, and search engine visibility.",
    technologies: ["Webpack", "Performance Metrics", "SEO", "Accessibility"]
  },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const title = entry.target.querySelector('h2');
            const paragraph = entry.target.querySelector('p');
            
            if (title) title.classList.add('animate-fade-in');
            if (paragraph) paragraph.classList.add('animate-fade-in');
            
            sectionObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const skillsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            skillsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    skillRefs.current.forEach((ref) => {
      if (ref) skillsObserver.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      
      skillRefs.current.forEach((ref) => {
        if (ref) skillsObserver.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="about" className="section-container">
      <div ref={sectionRef} className="text-center max-w-3xl mx-auto mb-16">
        <span className="hero-badge">About Me</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 opacity-0">
          My Background & Expertise
        </h2>
        <p className="text-gray-600 opacity-0" style={{ animationDelay: '0.2s' }}>
          I'm a passionate web developer with a strong foundation in both frontend and backend technologies. 
          My journey in tech has equipped me with the skills to build elegant, efficient, and user-centered 
          digital experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {skills.map((skill, index) => (
          <div 
            key={index}
            ref={(el) => (skillRefs.current[index] = el)}
            className="p-6 rounded-xl border border-gray-100 shadow-sm bg-white opacity-0"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="p-3 bg-blue-50 rounded-lg inline-flex mb-4">
              {skill.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
            <p className="text-gray-600 mb-4">{skill.description}</p>
            <div className="flex flex-wrap gap-2">
              {skill.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        <div 
          className="w-full md:w-1/2 opacity-0 animate-fade-in-left"
          style={{ animationDelay: '0.4s' }}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-xl border-2 border-blue-500/30" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-xl border-2 border-blue-500/30" />
            <div className="relative rounded-xl overflow-hidden aspect-video bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1472&q=80" 
                alt="Developer working" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div 
          className="w-full md:w-1/2 opacity-0 animate-fade-in-right"
          style={{ animationDelay: '0.6s' }}
        >
          <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
          <p className="text-gray-600 mb-6">
            With several years of experience in web development, I've had the opportunity to work on 
            diverse projects, from e-commerce platforms to real-time applications. My approach combines 
            technical expertise with an eye for design, ensuring that the end product is not only functional 
            but also visually appealing and intuitive to use.
          </p>
          <p className="text-gray-600 mb-6">
            I'm constantly learning and adapting to new technologies, with a current focus on advanced 
            React patterns, serverless architectures, and performance optimization techniques.
          </p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-500" />
              <span className="font-medium">6+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-500" />
              <span className="font-medium">2+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
