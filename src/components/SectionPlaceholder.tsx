import React from "react";

interface SectionPlaceholderProps {
  id: string;
  title: string;
  sectionNumber: string;
  isHero?: boolean;
}

export const SectionPlaceholder: React.FC<SectionPlaceholderProps> = ({
  id,
  title,
  sectionNumber,
  isHero = false,
}) => {
  return (
    <section
      id={id}
      className={`relative w-full border-b border-white/5 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 ${
        isHero ? "min-h-screen pt-36" : "min-h-[80vh]"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-4">
        {/* Section Wireframe Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-heading text-gray-400 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
          <span>{sectionNumber} // Blueprint Wireframe</span>
        </div>

        {/* Section Placeholder Title */}
        <h1
          className={`font-heading font-bold tracking-wider text-white uppercase ${
            isHero
              ? "text-4xl sm:text-6xl md:text-7xl"
              : "text-3xl sm:text-5xl md:text-6xl"
          }`}
        >
          {title}
        </h1>

        {/* Height & Status Indicator */}
        <p className="font-body text-base sm:text-lg text-gray-400 leading-relaxed max-w-md pt-2">
          Placeholder section awaiting content design.
        </p>
      </div>

      {/* Wireframe Border Overlay Markers */}
      <div className="absolute top-4 left-4 text-[10px] font-mono text-gray-700 select-none">
        SECTION_ID: {id.toUpperCase()}
      </div>
      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-gray-700 select-none">
        APEX FITNESS BLUEPRINT
      </div>
    </section>
  );
};
