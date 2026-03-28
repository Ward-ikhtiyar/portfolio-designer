import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export interface ShowcaseFeature {
  label: string;
  image?: string;
  videoUrl?: string;
}

interface PhoneShowcaseProps {
  features: ShowcaseFeature[];
  primaryColor: string;
  open: boolean;
  onClose: () => void;
  landscape?: boolean;
}

const PhoneShowcase = ({ features, primaryColor, open, onClose, landscape = false }: PhoneShowcaseProps) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!open || features.length === 0) return null;

  const goTo = (next: number) => {
    setDirection(next > current ? 1 : -1);
    setCurrent(next);
  };

  const prev = () => goTo(current === 0 ? features.length - 1 : current - 1);
  const next = () => goTo(current === features.length - 1 ? 0 : current + 1);

  const feature = features[current];

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative flex flex-col items-center gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-10 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center hover:bg-secondary transition-colors"
        >
          <X className="w-4 h-4 text-foreground" />
        </button>

        {/* Feature label */}
        <motion.p
          key={`label-${current}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-semibold font-display"
          style={{ color: `hsl(${primaryColor})` }}
        >
          {feature.label}
        </motion.p>

        {/* Phone frame */}
        <div className="relative">
          {/* Navigation arrows */}
          {features.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute -left-12 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-secondary transition-colors z-10"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={next}
                className="absolute -right-12 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-card/80 border border-border flex items-center justify-center hover:bg-secondary transition-colors z-10"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </>
          )}

          {/* Phone body */}
          <div
            className={`relative ${landscape ? 'w-[560px] h-[280px] rounded-[30px]' : 'w-[280px] h-[560px] rounded-[40px]'} border-[6px] p-[2px] overflow-hidden shadow-2xl`}
            style={{
              borderColor: `hsl(${primaryColor} / 0.4)`,
              background: `linear-gradient(145deg, hsl(${primaryColor} / 0.15), hsl(var(--card)))`,
            }}
          >
            {/* Notch */}
            {landscape ? (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-24 bg-card rounded-r-2xl z-10" />
            ) : (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-card rounded-b-2xl z-10" />
            )}

            {/* Screen content */}
            <div className={`w-full h-full ${landscape ? 'rounded-[24px]' : 'rounded-[34px]'} overflow-hidden bg-card relative`}>
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute inset-0"
                >
                  {feature.videoUrl ? (
                    <video
                      src={feature.videoUrl}
                      controls
                      autoPlay
                      muted
                      className="w-full h-full object-cover"
                    />
                  ) : feature.image ? (
                    <img
                      src={feature.image}
                      alt={feature.label}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                      No media
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Home indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-foreground/20" />
          </div>
        </div>

        {/* Dots */}
        {features.length > 1 && (
          <div className="flex gap-2">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="w-2.5 h-2.5 rounded-full transition-all"
                style={{
                  backgroundColor: i === current
                    ? `hsl(${primaryColor})`
                    : `hsl(${primaryColor} / 0.25)`,
                  transform: i === current ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        )}

        {/* Counter */}
        <p className="text-xs text-muted-foreground">
          {current + 1} / {features.length}
        </p>
      </div>
    </motion.div>
  );
};

export default PhoneShowcase;
