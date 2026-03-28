import { portfolioData } from "@/data/portfolioConfig";
import { motion } from "framer-motion";
import { Github, Mail, Phone, ArrowDown } from "lucide-react";
import MediaDisplay from "./MediaDisplay";

const HeroSection = () => {
  const { name, title, email, phone, github, heroMedia, heroColors } = portfolioData;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, hsl(${heroColors.primary} / 0.12) 0%, transparent 50%),
                       radial-gradient(ellipse at 70% 80%, hsl(${heroColors.primary} / 0.06) 0%, transparent 50%)`,
        }}
      />
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container max-w-5xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm font-medium tracking-[0.3em] uppercase text-muted-foreground"
          >
            Portfolio
          </motion.p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight">
            <span className="text-foreground">{name.split(" ")[0]}</span>
            <br />
            <span className="text-gradient">{name.split(" ")[1]}</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-lg">
            {title}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              {email}
            </a>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-surface-hover transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              {phone}
            </a>
          </div>

          <MediaDisplay media={heroMedia} className="mt-8 max-w-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
