import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  className = "",
}) => {
  return (
    <div
      className={`bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow ${className}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-[#0F172A] font-semibold text-lg mb-2">{title}</h3>
      <p className="text-[#475569] text-sm leading-6">{description}</p>
    </div>
  );
};

export default FeatureCard;
