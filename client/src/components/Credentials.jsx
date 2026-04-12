import { FiExternalLink, FiAward, FiBookOpen, FiBriefcase, FiActivity } from 'react-icons/fi';
import { TIMELINE_DATA, CERTIFICATIONS_DATA } from '../constants/Constants';

const timelineData = TIMELINE_DATA.map(item => ({
  ...item,
  icon: item.type === "Education" ? FiBookOpen : FiBriefcase
}));

const certificationsData = CERTIFICATIONS_DATA;

function SectionHeading({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <Icon className="text-accent shrink-0" size={22} />
      <h2 className="font-display text-2xl font-bold text-heading">{title}</h2>
      <div className="h-px bg-body/20 flex-grow ml-2" />
    </div>
  );
}

function CertCard({ name, organization, logo, url }) {
  return (
    <div className="flex flex-col justify-between p-5 rounded-xl bg-primary border border-body/10 hover:border-accent/40 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      <div>
        <div className="text-3xl mb-4 select-none">{logo}</div>
        <h3 className="font-display font-bold text-heading text-sm leading-snug mb-1">{name}</h3>
        <p className="font-mono text-xs text-accent">{organization}</p>
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex justify-center items-center gap-2 text-xs font-mono font-medium text-body hover:text-accent transition-colors border-t border-body/10 pt-4"
      >
        View Certificate
      </a>
    </div>
  );
}

function SineWaveTimeline() {
  const n = timelineData.length;

  // Dynamically generate the Triangular SVG Path based on data length
  // We use a fixed 1000px internal coordinate system and let SVG scale it
  let trianglePath = `M 0 100 `;
  for (let i = 0; i < n; i++) {
    const x = (i + 0.5) * (1000 / n);
    const y = i % 2 === 0 ? 20 : 180;
    trianglePath += `L ${x} ${y} `;
  }
  trianglePath += `L 1000 100`;

  return (
    <div className="w-full overflow-x-auto pb-6 custom-scrollbar scroll-smooth">
      {/* The min-width dynamically scales based on the number of items.
        It allows compression to show the full timeline up to a certain point,
        but prevents the cards from completely overlapping if you add 10+ items.
      */}
      <div
        className="relative h-[450px] flex items-center mt-4 mb-8"
        style={{ minWidth: `max(100%, ${n * 180}px)` }}
      >

        {/* SVG Background Path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 200"
          preserveAspectRatio="none"
        >
          {/* Zero-crossing Axis */}
          <line x1="0" y1="100" x2="1000" y2="100" className="stroke-body/20" strokeWidth="1" strokeDasharray="4 4" />

          {/* Dynamic Triangular Waveform */}
          <path
            d={trianglePath}
            fill="none"
            className="stroke-accent/40"
            strokeWidth="3"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Data Nodes mapped mathematically to crests and troughs */}
        {timelineData.map((item, i) => {
          const isTop = i % 2 === 0;
          const leftPercent = (i + 0.5) * (100 / n); // Divides the 100% width equally

          return (
            <div
              key={i}
              className="absolute flex flex-col group z-10"
              style={{
                left: `${leftPercent}%`,
                top: isTop ? '10%' : 'auto',
                bottom: !isTop ? '10%' : 'auto',
                transform: 'translateX(-50%)',
                width: 'clamp(200px, 22vw, 260px)' // Allows the text boxes to shrink slightly as it compresses
              }}
            >
              {/* Telemetry Point */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-accent transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_15px_rgba(var(--accent),0.6)]`}
                style={{
                  top: isTop ? '0' : 'auto',
                  bottom: !isTop ? '0' : 'auto',
                  marginTop: isTop ? '-8px' : '0',
                  marginBottom: !isTop ? '-8px' : '0'
                }}
              />

              {/* Data Payload Card */}
              <div
                className={`flex flex-col ${isTop ? 'mt-8' : 'mb-8 justify-end'} p-5 bg-primary backdrop-blur-md border border-body/10 rounded-xl group-hover:border-accent/50 group-hover:-translate-y-1 transition-all duration-300 shadow-sm`}
              >
                <div className="flex items-center gap-2 mb-3 border-b border-body/10 pb-2">
                  <item.icon className="text-accent shrink-0" size={14} />
                  <span className="text-[10px] font-mono text-accent uppercase tracking-wider">{item.type}</span>
                  <span className="ml-auto font-mono text-[10px] bg-accent/10 px-2 py-0.5 rounded text-accent whitespace-nowrap overflow-hidden text-ellipsis">
                    {item.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-heading text-sm mb-1 leading-snug">
                  {item.title}
                </h3>
                <div className="font-mono text-xs text-body/70 mb-3">{item.subtitle}</div>
                <p className="text-xs text-body leading-relaxed line-clamp-3">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Credentials() {
  return (
    <section
      id="credentials"
      className="px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden bg-primary/5"
    >
      <div className="relative z-10 mx-auto max-w-6xl w-full">

        {/* Page heading */}
        <div className="flex items-center gap-4 mb-8 animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl font-black text-heading">
            Credentials
          </h1>
          <div className="h-px bg-body/20 flex-grow ml-4" />
        </div>

        {/* Unified Triangular Timeline */}
        <div className="animate-fade-up" style={{ animationDelay: '100ms' }}>
          <SectionHeading icon={FiActivity} title="Journey Signal" />
          <SineWaveTimeline />
        </div>

        {/* Certifications */}
        <div className="animate-fade-up mt-12" style={{ animationDelay: '200ms' }}>
          <SectionHeading icon={FiAward} title="Certifications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificationsData.map((cert, i) => (
              <CertCard key={i} {...cert} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}