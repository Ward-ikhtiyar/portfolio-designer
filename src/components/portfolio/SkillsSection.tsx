import { portfolioData } from "@/data/portfolioConfig";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import MediaDisplay from "./MediaDisplay";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const { skills } = portfolioData;

  return (
    <SectionWrapper id="skills" colors={skills.colors}>
      <SectionTitle title="Skills" primaryColor={skills.colors.primary} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.categories.map((cat, idx) => (
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="p-5 rounded-xl bg-card border border-border"
          >
            <h4
              className="text-sm font-semibold uppercase tracking-wider mb-3"
              style={{ color: `hsl(${skills.colors.primary})` }}
            >
              {cat.label}
            </h4>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <MediaDisplay media={skills.media} className="mt-8" />
    </SectionWrapper>
  );
};

export default SkillsSection;
