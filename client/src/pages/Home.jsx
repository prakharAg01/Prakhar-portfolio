import MainLayout from "../components/layout/mainlayout";
import { useTypewriter } from "../hooks/useTypewriter";

const ROLES = [
  "Full-Stack Developer",
  "UI/UX Enthusiast",
  "Computer and Communications Engineer",
  "Embedded Systems & IoT Learner",
  "Exploring Signal Processing",
];


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
            Computer and Communications Engineering student exploring the architecture of VLSI and FPGA systems and Digital Signal Processing. I am currently developing my expertise in Full-Stack development to build efficient, scalable solutions that bridge the gap from silicon to IoT ecosystems.
          </p>
          <button className="mt-10 px-8 py-4 font-mono text-sm text-accent bg-transparent border border-accent rounded hover:bg-accent hover:text-primary transition-colors duration-300 animate-fade-up" style={{ animationDelay: '500ms' }}>
            Download CV
          </button>
        </div>
      </section>
    </MainLayout>
  );
}