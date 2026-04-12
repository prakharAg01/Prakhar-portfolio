import { SKILLS_DATA } from '../constants/Constants';

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden bg-primary/5">
      <div className="relative z-10 mx-auto max-w-6xl w-full">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8 animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl font-black text-heading">
            Technical Skills
          </h1>
          <div className="h-px bg-body/20 flex-grow ml-4" />
        </div>

        {/* Categories */}
        {SKILLS_DATA.map((cat, catIndex) => (
          <div key={cat.category} className="mb-16 last:mb-0">
            <h2 className="text-2xl font-bold mb-8 text-center text-heading animate-fade-up" style={{ animationDelay: '100ms' }}>
              {cat.category}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {cat.skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="animate-fade-up"
                  style={{ animationDelay: `${200 + index * 50}ms` }}
                >
                  <div className="group h-full p-6 rounded-2xl bg-card border border-body/10 hover:border-accent/40 shadow-sm transition-all duration-300 hover:-translate-y-2">
                    
                    {/* Info (Icon Container Removed) */}
                    <div className="flex items-center mb-6">
                      <div>
                        <h3 className="text-lg font-bold text-heading group-hover:text-accent transition-colors mb-1">
                          {skill.name}
                        </h3>
                        <span className="text-[10px] uppercase tracking-wider font-mono text-body/60 px-2 py-0.5 rounded-full bg-body/5">
                          {cat.category.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Proficiency Info */}
                    <div className="mb-3 flex justify-between items-center text-xs">
                      <span className="font-medium text-body/70">Proficiency</span>
                      <span className="font-bold text-accent">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2.5 bg-body/10 rounded-full overflow-hidden mb-4">
                      <div 
                        className={`h-full rounded-full bg-linear-to-r bg-accent/75 transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}