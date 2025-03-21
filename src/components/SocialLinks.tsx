
import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = '' }: SocialLinksProps) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href="mailto:your.email@example.com"
        className="social-link"
        aria-label="Email"
      >
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialLinks;
