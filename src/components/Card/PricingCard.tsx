import React from "react";
import Button from "../Button";
import { Check, X } from "lucide-react";
import Tag from "../Tag/Tag";
import { Dictionary } from "@/lib/dictionary";

interface Advantage {
  text: string;
  included?: boolean;
}

interface PricingCardProps {
  tagText?: string;
  icon?: React.ReactNode;
  planDescription?: string;
  planPrice?: number | string;
  hasPeriod?: boolean;
  buttonText: string;
  planAdvantages: (string | Advantage)[];
  bestPlan?: boolean;
  bestPlanLabel?: string;
  priceSuffix?: string;
  className?: string;
  dict: Dictionary;
  onButtonClick?: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({
  tagText,
  icon,
  planDescription,
  planPrice,
  hasPeriod,
  buttonText,
  planAdvantages,
  bestPlan = false,
  bestPlanLabel = "Best value",
  dict,
  className = "",
  onButtonClick,
}) => {
  const displayPriceSuffix = !hasPeriod ? "" : dict?.EGP ?? "";
  const baseStyles = bestPlan
    ? "relative bg-white rounded-3xl p-8 shadow-xl border-4 border-[#00AEEF] transform hover:scale-105 transition-all"
    : "bg-gray-50 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all";

  return (
    <div className={`${baseStyles} ${className}`}>
      {bestPlan && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">
          <div>
            <span className="bg-[#00AEEF] text-white px-4 py-2 rounded-xl text-nowrap">
              {bestPlanLabel}
            </span>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        {tagText && <Tag title={tagText} />}
        {icon && (
          <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#00AEEF]">
            {icon}
          </div>
        )}
      </div>

      <p className="text-gray-600 text-base mb-6">{planDescription}</p>

      <div className="mb-8">
        <span className="text-5xl font-bold text-gray-900 ">
          {planPrice?.toLocaleString()}
        </span>
        {displayPriceSuffix && (
          <span className="text-gray-600 text-xl ml-2">{displayPriceSuffix}</span>
        )}
      </div>

      <Button
        onClick={onButtonClick}
        className="w-full mb-8 py-4 rounded-2xl text-lg font-medium"
      >
        {buttonText}
      </Button>

      <ul className="space-y-4">
        {planAdvantages.map((advantage, index) => {
          const isObject = typeof advantage !== "string";
          const text = isObject ? (advantage as Advantage).text : (advantage as string);
          const included = isObject ? (advantage as Advantage).included !== false : true;

          return (
            <li key={index} className={`flex items-center gap-2 ${included ? "text-gray-700" : "text-gray-400"}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 shrink-0 ${included ? "bg-blue-100" : "bg-red-50"}`}>
                {included ? (
                  <Check className="w-4 h-4 text-[#00AEEF]" strokeWidth={3} />
                ) : (
                  <X className="w-4 h-4 text-red-500" strokeWidth={3} />
                )}
              </div>
              <span className="text-base">{text}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PricingCard;
