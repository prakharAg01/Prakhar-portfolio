import { MapPin, Mail, FileText, Download } from 'lucide-react';
import { TECHNICAL_INTERESTS } from '../constants/Constants';

const API = import.meta.env.VITE_API_BASE_URL || '';

async function downloadFile(url, filename) {
  const res = await fetch(url);
  if (!res.ok) return;
  const blob = await res.blob();
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden bg-primary/5">
      <div className="relative z-10 mx-auto max-w-6xl w-full">

        <div className="flex items-center gap-4 mb-12 animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl font-black text-heading">
            About Me
          </h1>
          <div className="h-px bg-body/20 flex-grow ml-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-4 flex flex-col items-center gap-6 animate-fade-up" style={{ animationDelay: '100ms' }}>

            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent/30 shadow-xl ring-4 ring-accent/10">
                <img
                  src="/profile-photo.png"
                  alt="Prakhar Agrawal"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target;
                    target.style.display = 'none';
                    target.parentElement.classList.add('bg-accent/10', 'flex', 'items-center', 'justify-center');
                    target.parentElement.innerHTML = `<span class="text-4xl font-display font-black text-accent">PA</span>`;
                  }}
                />
              </div>
              <span className="absolute bottom-4 right-8 w-4 h-4 bg-green-400 border-2 border-primary rounded-full shadow" title="Available for opportunities" />
            </div>

            <div className="text-center">
              <h2 className="font-display text-xl font-bold text-heading">Prakhar Agrawal</h2>
              <p className="text-sm font-mono text-accent mt-1">Computer & Communication Engineer</p>
            </div>

            <div className="flex flex-row justify-center items-center gap-4 w-full">
              <div className="flex items-center gap-1 text-sm text-body">
                <MapPin size={15} />
                <span>Jaipur, India</span>
              </div>
              <a
                href="mailto:prakhar1234ag@gmail.com"
                className="flex items-center gap-1 text-sm text-body hover:text-accent transition-colors"
              >
                <Mail size={15} />
                <span className="break-all">prakhar1234ag@gmail.com</span>
              </a>
            </div>

            <div className="w-full h-px bg-body/10" />

            <div className="flex gap-3 w-full">
              <button
                onClick={() => downloadFile(`${API}/api/download/resume/pdf`, 'Prakhar_Agrawal_Resume.pdf')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-primary text-sm font-mono rounded-lg hover:opacity-90 transition-all w-full"
              >
                <Download size={15} /> Resume (PDF)
              </button>

              <button
                onClick={() => downloadFile(`${API}/api/download/resume/docx`, 'Prakhar_Agrawal_Resume.docx')}
                className="flex items-center justify-center gap-2 px-4 py-2.5 border border-accent/30 text-accent text-sm font-mono rounded-lg hover:bg-accent/5 transition-all w-full"
              >
                <Download size={15} /> Resume (Word)
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="space-y-5 text-base leading-relaxed text-body">
              <p>
                I'm a Computer and Communications Engineering student focused on building practical tech solutions. I have experience in Python, C, and full-stack development using React Native and Node.js.

              </p>
              <p>
                I'm currently strengthening my skills in data structures and problem-solving while exploring telecom and system design. My goal is to gain real-world experience through impactful projects and internships.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-body/10 shadow-sm w-md">
              <h3 className="font-display font-bold text-heading mb-4 flex items-center gap-2">
                Technical Focus
              </h3>
              <div className="space-y-4">
                {TECHNICAL_INTERESTS.map((item) => (
                  <div key={item.area}>
                    <h4 className="text-xs font-mono text-accent uppercase tracking-wider mb-1">
                      {item.area}
                    </h4>
                    <p className="text-sm text-heading font-medium">{item.skills}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}