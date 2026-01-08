import React from "react";
import Button from "../Button";
import { Check } from "lucide-react";
import Tag from "../Tag/Tag";

interface PricingCardProps {
  tagText?: string;
  icon?: React.ReactNode;
  planDescription: string;
  planPrice?: number;
  buttonText: string;
  planAdvantages: string[];
  bestPlan?: boolean;
  bestPlanLabel?: string;
  priceSuffix?: string;
  className?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tagText,
  icon,
  planDescription,
  planPrice,
  buttonText,
  planAdvantages,
  bestPlan = false,
  bestPlanLabel = "Best value",
  priceSuffix = "E£",
  className = "",
}) => {
  const baseStyles = bestPlan
    ? "relative bg-white rounded-3xl p-8 shadow-xl border-4 border-blue-600 transform hover:scale-105 transition-all"
    : "bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all";

  return (
    <div className={`${baseStyles} ${className}`}>
      {bestPlan && (
        // <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        //   <Tag title="Best value" className="shadow-lg" /> {/* tag component */}
        // </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
          <div>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-xl">
              {bestPlanLabel}
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        {tagText && <Tag title={tagText} />} {/* tag component */}
        {icon && (
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
            {icon}
          </div>
        )}
      </div>

      <p className="text-gray-600 text-base mb-6">{planDescription}</p>

      <div className="mb-8">
        <span className="text-5xl font-bold text-gray-900 ">
          {planPrice?.toLocaleString()}
        </span>
        {priceSuffix && (
          <span className="text-gray-600 text-xl ml-2">{priceSuffix}</span>
        )}
      </div>

      <Button className="w-full mb-8 py-4 rounded-2xl text-lg font-medium">
        {buttonText}
      </Button>

      <ul className="space-y-4">
        {planAdvantages.map((advantage, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-3 shrink-0">
              <Check className="w-4 h-4 text-blue-600" strokeWidth={3} />{" "}
              {/* check icon */}
            </div>
            <span className="text-base">{advantage}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
