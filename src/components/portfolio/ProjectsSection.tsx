import { portfolioData } from "@/data/portfolioConfig";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import MediaDisplay from "./MediaDisplay";
import PhoneShowcase from "./PhoneShowcase";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Smartphone } from "lucide-react";
import { useState } from "react";

const ProjectsSection = () => {
  const { projects } = portfolioData;
  const [showcaseIdx, setShowcaseIdx] = useState<number | null>(null);

  return (
    <SectionWrapper id="projects" colors={{ primary: "36 95% 55%", secondary: "220 18% 10%" }}>
      <SectionTitle title="Projects" primaryColor="36 95% 55%" />

      <div className="space-y-16">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            className="group"
          >
            <div className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-glow transition-colors">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3
                    className="text-xl md:text-2xl font-bold font-display"
                    style={{ color: `hsl(${project.colors.primary})` }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mt-1">{project.description}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {project.showcase && project.showcase.length > 0 && (
                    <button
                      onClick={() => setShowcaseIdx(idx)}
                      className="h-9 px-3 rounded-lg bg-secondary flex items-center gap-2 hover:bg-surface-hover transition-colors text-sm font-medium"
                      style={{ color: `hsl(${project.colors.primary})` }}
                    >
                      <Smartphone className="w-4 h-4" />
                      <span className="hidden sm:inline">Preview</span>
                    </button>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-surface-hover transition-colors"
                    >
                      <Github className="w-4 h-4 text-secondary-foreground" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-surface-hover transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 text-secondary-foreground" />
                    </a>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {project.bullets.map((bullet, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: `hsl(${project.colors.primary})` }}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              {project.techStack && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full font-medium"
                      style={{
                        backgroundColor: `hsl(${project.colors.primary} / 0.12)`,
                        color: `hsl(${project.colors.primary})`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <MediaDisplay media={project.media} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Phone showcase modal */}
      <AnimatePresence>
        {showcaseIdx !== null && projects[showcaseIdx]?.showcase && (
           <PhoneShowcase
            features={projects[showcaseIdx].showcase!}
            primaryColor={projects[showcaseIdx].colors.primary}
            open={true}
            onClose={() => setShowcaseIdx(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default ProjectsSection;
