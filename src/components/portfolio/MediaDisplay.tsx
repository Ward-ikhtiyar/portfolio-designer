import { type SectionMedia } from "@/data/portfolioConfig";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface MediaDisplayProps {
  media: SectionMedia;
  className?: string;
}

const MediaDisplay = ({ media, className = "" }: MediaDisplayProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  if (!media.enabled || media.type === "none") return null;

  if (media.type === "video" && media.videoUrl) {
    return (
      <div className={`relative rounded-lg overflow-hidden border border-border ${className}`}>
        <video
          src={media.videoUrl}
          controls
          className="w-full aspect-video object-cover"
          poster=""
        />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          </div>
        </div>
      </div>
    );
  }

  if (media.type === "images" && media.images && media.images.length > 0) {
    return (
      <div className={`relative rounded-lg overflow-hidden border border-border ${className}`}>
        <img
          src={media.images[currentImage]}
          alt={`Screenshot ${currentImage + 1}`}
          className="w-full aspect-video object-cover"
        />
        {media.images.length > 1 && (
          <>
            <button
              onClick={() => setCurrentImage((p) => (p === 0 ? media.images!.length - 1 : p - 1))}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-foreground" />
            </button>
            <button
              onClick={() => setCurrentImage((p) => (p === media.images!.length - 1 ? 0 : p + 1))}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-foreground" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {media.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImage(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentImage ? "bg-primary" : "bg-foreground/30"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  return null;
};

export default MediaDisplay;
