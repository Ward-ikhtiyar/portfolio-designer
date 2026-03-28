import { portfolioData } from "@/data/portfolioConfig";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import MediaDisplay from "./MediaDisplay";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const { projects } = portfolioData;

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
    </SectionWrapper>
  );
};

export default ProjectsSection;
