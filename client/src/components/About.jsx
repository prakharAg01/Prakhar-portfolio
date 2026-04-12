export default function About() {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden bg-primary/5">
      <div className="relative z-10 mx-auto max-w-6xl w-full">
        <h1 className="font-display text-5xl md:text-6xl font-black text-heading mb-8 animate-fade-up">
          About Me
        </h1>
        <div className="max-w-2xl text-base leading-relaxed text-body animate-fade-up" style={{ animationDelay: '100ms' }}>
          <p className="mb-4">
            I am a Computer and Communications Engineering student.
          </p>
          <p>
            More content coming soon...
          </p>
        </div>
      </div>
    </section>
  );
}
