import { portfolioData } from "@/data/portfolioConfig";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import MediaDisplay from "./MediaDisplay";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const { experience } = portfolioData;

  return (
    <SectionWrapper id="experience"colors={experience[0].colors}>
      {/* Single title */}
      <SectionTitle title="Experience" primaryColor={experience[0]?.colors.primary} />

      <div className="space-y-12 mt-8">
        {experience.map((exp, idx) => (
          <div key={idx} className="space-y-6">
            {/* Role and company */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `hsl(${exp.colors.primary} / 0.15)` }}
              >
                <Briefcase
                  className="w-5 h-5"
                  style={{ color: `hsl(${exp.colors.primary})` }}
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.company} — {exp.period}
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-6">
              {exp.projects.map((project, pIdx) => (
                <motion.div
                  key={pIdx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: pIdx * 0.15, duration: 0.5 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h4
                    className="text-lg font-semibold mb-4"
                    style={{ color: `hsl(${exp.colors.primary})` }}
                  >
                    {project.name}
                  </h4>
                  <ul className="space-y-2">
                    {project.bullets.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: `hsl(${exp.colors.primary})` }}
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Media */}
            <MediaDisplay media={exp.media} className="mt-6" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;