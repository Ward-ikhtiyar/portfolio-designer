import { type SectionColors } from "@/data/portfolioConfig";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  colors: SectionColors;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, colors, children, className = "" }: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 overflow-hidden ${className}`}
      style={{
        "--section-primary": colors.primary,
        "--section-secondary": colors.secondary,
      } as React.CSSProperties}
    >
      {/* Subtle glow from section primary color */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, hsl(${colors.primary}), transparent 70%)`,
        }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 container max-w-5xl mx-auto px-6"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;
