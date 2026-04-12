import React from 'react';
import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi';
import { SOCIAL_LINKS, FOOTER_NAV } from '../../constants/Constants';

const IconMap = {
  FiGithub: FiGithub,
  FiLinkedin: FiLinkedin,

};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary border-t border-body/10 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Branding & Tagline */}
          <div className="md:col-span-2">
            <h2 className="font-display text-2xl font-black text-heading mb-4">
              Prakhar <span className="text-accent">Agrawal</span>
            </h2>
            <p className="text-body text-sm leading-relaxed max-w-sm">
              Computer and Communications Engineering student building robust full-stack applications and exploring the depths of Signal Processing & IoT.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">Navigation</h3>
            <ul className="space-y-3">
              {FOOTER_NAV.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm text-body hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-accent mb-6">Connect</h3>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = IconMap[social.icon] || FiGithub;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-body/5 flex items-center justify-center text-body hover:text-accent hover:bg-accent/10 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-body/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono text-body/60">
            &copy; {currentYear} Prakhar Agrawal.
          </p>
          <p className="text-xs font-mono text-body/60 flex items-center gap-1">
            Built with <FiHeart className="text-accent text-[10px]" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
