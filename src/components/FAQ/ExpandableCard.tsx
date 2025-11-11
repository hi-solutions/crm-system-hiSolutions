"use client";
import React, { useId, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface ExpandableCardProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({
  question,
  answer,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  if (!question || !answer) {
    return null;
  }

  return (
    <div className="w-full rounded-xl border border-[#005FDA1A] bg-white shadow-sm transition-all duration-300 hover:shadow-lg">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-7 sm:py-6"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span className="text-sm font-semibold text-[#0B1D4A] sm:text-base md:text-lg">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-[#005FDA] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={contentId}
        className={`overflow-hidden px-4 text-sm text-[#425061] transition-all duration-300 ease-in-out sm:px-6 md:text-base ${
          isOpen
            ? "max-h-[400px] opacity-100 pb-4 sm:pb-6"
            : "max-h-0 opacity-0 pb-0"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="mt-3 rounded-lg border border-[#005FDA1A] bg-[rgba(0,95,218,0.08)] px-4 py-4 text-start shadow-[0px_4px_12px_rgba(0,95,218,0.12)] sm:mt-4 sm:px-6 sm:py-5">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
export { ExpandableCard };
