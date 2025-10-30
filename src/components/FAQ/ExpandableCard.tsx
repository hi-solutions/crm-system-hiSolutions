"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface ExpandableCardProps {
  question: string;
  answer: string;
}

export const ExpandableCard = ({ question, answer }: ExpandableCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`w-full max-w-3xl px-2 sm:px-4 md:px-0 ${
        isOpen ? "border-l border-r border-b border-[#033E8A] rounded-b-xl" : ""
      }`}
    >
      <div
        className="flex flex-row justify-between items-center rounded-xl border border-[#033E8A] px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-3 bg-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p>{question}</p>
        <div className="relative w-6 h-6">
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            }`}
          >
            <Plus size={24} />
          </div>
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`}
          >
            <Minus size={24} />
          </div>
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 mt-2" : "max-h-0"
        }`}
      >
        <div className="text-base font-medium text-[#425061] px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-3">
          {answer}
        </div>
      </div>
    </div>
  );
};
