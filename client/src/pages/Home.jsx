import MainLayout from "../components/layout/mainlayout";
import { useTypewriter } from "../hooks/useTypewriter";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Credentials from "../components/Credentials";
import Contact from "../components/Contact";
import { ROLES } from "../constants/Constants";

const API = import.meta.env.VITE_API_BASE_URL || '';

async function downloadCV() {
  const res = await fetch(`${API}/api/download/resume/pdf`);
  if (!res.ok) return;
  const blob = await res.blob();
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Prakhar_Agrawal_Resume.pdf';
  a.click();
  URL.revokeObjectURL(a.href);
}

// Import the icons
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Home() {
  const displayedRole = useTypewriter(ROLES);

  return (
    <MainLayout>
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 lg:px-40 relative overflow-hidden">
        <div className="hero-grid-bg absolute inset-0 pointer-events-none z-0" />
        <div className="relative z-10 mx-auto max-w-4xl text-center py-20 flex flex-col items-center">
          <p className="font-mono text-accent text-sm md:text-base mb-5 animate-fade-up" style={{ animationDelay: '100ms' }}>
            Hi, my name is
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-black text-heading leading-tight tracking-tight animate-fade-up" style={{ animationDelay: '200ms' }}>
            Prakhar Agrawal
          </h1>
          <div className="font-mono text-accent text-base mt-6 flex items-center h-8 animate-fade-up" style={{ animationDelay: '350ms' }}>
            <span>{displayedRole}</span>
            <span className="ml-1 inline-block w-[2px] h-[1.1em] bg-accent animate-blink rounded align-middle" />
          </div>
          <p className="max-w-xl text-sm md:text-base leading-relaxed text-body mt-6 animate-fade-up" style={{ animationDelay: '400ms' }}>
            Computer and Communications Engineering student building robust full-stack applications and exploring the depths of Signal Processing & IoT.
          </p>

          <div className="flex gap-4">
            <button onClick={downloadCV} className="mt-10 px-8 py-4 font-mono font-bold text-sm text-primary bg-accent border border-accent rounded hover:bg-accent/80 hover:text-primary transition-colors duration-300 animate-fade-up" style={{ animationDelay: '500ms' }}>
              Download CV
            </button>
            <a
              href="#contact"
              className="mt-10 px-8 py-4 font-mono text-sm text-accent bg-transparent border border-accent rounded hover:bg-accent/80 hover:text-primary transition-colors duration-300 animate-fade-up inline-block text-center"
              style={{ animationDelay: '500ms' }}
            >
              Let's Talk
            </a>
          </div>

          {/* Social Icons Section */}
          <div className="flex items-center gap-6 mt-8 animate-fade-up" style={{ animationDelay: '600ms' }}>
            <a
              href="https://github.com/prakharAg01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/prakhar-agrawal-1135352aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={24} />
            </a>
            <a
              href="mailto:prakhar1234ag@gmail.com"
              className="text-body hover:text-accent transition-colors duration-300"
              aria-label="Email"
            >
              <FiMail size={28} />
            </a>
          </div>

        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Credentials />
      <Contact />
    </MainLayout>
  );
}