import { portfolioData } from "@/data/portfolioConfig";
import SectionWrapper from "./SectionWrapper";
import SectionTitle from "./SectionTitle";
import MediaDisplay from "./MediaDisplay";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const { education } = portfolioData;

  return (
    <SectionWrapper id="education" colors={education.colors}>
      <SectionTitle title="Education" primaryColor={education.colors.primary} />

      <div className="p-6 md:p-8 rounded-xl bg-card border border-border">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `hsl(${education.colors.primary} / 0.15)` }}
          >
            <GraduationCap className="w-6 h-6" style={{ color: `hsl(${education.colors.primary})` }} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">{education.degree}</h3>
            <p className="text-muted-foreground mt-1">{education.university}</p>
            <p
              className="text-sm font-medium mt-2"
              style={{ color: `hsl(${education.colors.primary})` }}
            >
              {education.graduation}
            </p>
            <p className="text-sm text-muted-foreground mt-2">{education.note}</p>
          </div>
        </div>
      </div>

      <MediaDisplay media={education.media} className="mt-6" />
    </SectionWrapper>
  );
};

export default EducationSection;
