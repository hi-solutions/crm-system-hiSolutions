"use client";

import React from "react";
import { Check, AlertCircle } from "lucide-react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorText?: string;
  isValid?: boolean;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, errorText, isValid, ...props }, ref) => {
    let borderColorClass = "border-[#D3D5D8] focus:border-[#005FDA]";

    if (errorText) {
      borderColorClass = "border-red-500 focus:border-red-500";
    } else if (isValid) {
      borderColorClass = "border-green-500 focus:border-green-500";
    }

    return (
      <div className="w-full flex flex-col gap-1">
        <div className="relative">
          <textarea
            ref={ref}
            className={`w-full px-4 py-3 rounded-xl border ${borderColorClass} outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 min-h-[120px] resize-y ${className}`}
            {...props}
          />
          {isValid && !errorText && (
            <div className="absolute right-3 top-4 text-green-500">
              <Check className="w-5 h-5" />
            </div>
          )}
          {errorText && (
            <div className="absolute right-3 top-4 text-red-500">
              <AlertCircle className="w-5 h-5" />
            </div>
          )}
        </div>
        {errorText && (
          <span className="text-sm text-red-500 ml-1">{errorText}</span>
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
