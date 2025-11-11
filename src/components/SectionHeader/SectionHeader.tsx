import React from "react";
import Tag from "../Tag/Tag";

interface SectionHeaderProps {
  tag?: {
    title: string;
    className?: string;
  };
  title?: string;
  description?: string;
  linkText?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  tag,
  title,
  description,
  linkText,
  className = "",
}) => {
  const containerStyles =
    "flex flex-col items-center gap-4 md:gap-5 lg:gap-6 px-4 sm:px-6";
  const titleDescriptionWrapperStyles =
    "flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 text-center";

  return (
    <div className={`${containerStyles} ${className}`}>
      {tag && <Tag title={tag.title} className={tag.className || ""} />}
      <div className={titleDescriptionWrapperStyles}>
        <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-semibold text-[#18063C] leading-tight text-center">
          {title}
        </h2>
        {description && (
          <p className="text-base sm:text-md md:text-lg lg:text-xl font-medium text-[#425061] leading-relaxed max-w-3xl text-center">
            {description}
          </p>
        )}
      </div>
      {linkText && (
        <a
          className="text-sm md:text-base font-medium text-[#0057FF] hover:underline transition-colors"
          href="#"
        >
          {linkText}
        </a>
      )}
    </div>
  );
};

export default SectionHeader;
