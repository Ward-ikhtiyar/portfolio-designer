interface SectionTitleProps {
  title: string;
  primaryColor: string;
}

const SectionTitle = ({ title, primaryColor }: SectionTitleProps) => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-foreground">
        {title}
      </h2>
      <div
        className="mt-3 h-1 w-16 rounded-full"
        style={{ backgroundColor: `hsl(${primaryColor})` }}
      />
    </div>
  );
};

export default SectionTitle;
