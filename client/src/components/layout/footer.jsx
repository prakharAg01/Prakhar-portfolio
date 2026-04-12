import React from 'react';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-primary py-8 border-t border-body/10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/prakharAg01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body hover:text-accent transition-colors duration-300"
            aria-label="GitHub"
          >
            <FiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-body hover:text-accent transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={20} />
          </a>
          <a
            href="mailto:prakhar.agrawal@email.com"
            className="text-body hover:text-accent transition-colors duration-300"
            aria-label="Email"
          >
            <FiMail size={20} />
          </a>
        </div>

        {/* Copyright & Tech Stack */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-xs font-mono text-body/60">
            Prakhar Agrawal's Portfolio
          </p>
          <p className="text-xs font-mono text-body/60 flex items-center gap-1.5">
            Built with <FiHeart className="text-accent text-[10px] animate-pulse" /> using React & Tailwind
          </p>
        </div>

      </div>
    </footer>
  );
}