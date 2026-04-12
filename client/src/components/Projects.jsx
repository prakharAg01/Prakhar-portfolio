import { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

import { PROJECTS_DATA } from '../constants/Constants';

const projectsData = PROJECTS_DATA;

const allCategories = ["All", ...new Set(projectsData.flatMap(p => p.categories))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(p => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-24 py-24 relative overflow-hidden bg-primary/5">
      <div className="relative z-10 mx-auto max-w-6xl w-full">

        {/* Heading */}
        <div className="flex items-center gap-4 mb-10 animate-fade-up">
          <h1 className="font-display text-4xl md:text-5xl font-black text-heading">
            Featured Projects
          </h1>
          <div className="h-px bg-body/20 flex-grow ml-4"></div>
        </div>

        {/* Category Filter Badges */}
        <div className="flex flex-wrap gap-2 mb-12 animate-fade-up" style={{ animationDelay: '100ms' }}>
          {allCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3 py-1 text-xs font-mono rounded border transition-all duration-200
                ${activeFilter === cat
                  ? 'text-primary bg-accent border-accent shadow-sm'
                  : 'text-accent bg-accent/10 border-accent/20 hover:bg-accent/20 hover:border-accent/40'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full z-10">
          {filteredProjects.length > 0 ? filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group flex flex-col justify-between p-6 rounded-xl bg-primary shadow-sm border border-body/10 hover:border-accent/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${150 * (index + 1)}ms` }}
            >
              <div>
                <h3 className="font-display text-2xl font-bold text-heading mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-body leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center items-center gap-12 mt-auto border-t border-body/10 pt-5">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono font-medium text-body hover:text-accent transition-colors"
                >
                  <FiGithub size={20} />
                  Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-mono font-medium text-body hover:text-accent transition-colors"
                >
                  <FiExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          )) : (
            <p className="col-span-3 text-center text-body font-mono py-16">
              No projects found for <span className="text-accent">"{activeFilter}"</span>.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
