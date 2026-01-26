"use client";

import React, { useState } from "react";
import { Check, AlertCircle, Eye, EyeOff } from "lucide-react";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorText?: string;
  isValid?: boolean;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ className, errorText, isValid, type, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === "password";

    // Determine visual state
    // Default: border-[#D3D5D8]
    // Active/Focus: border-[#005FDA] (handled by focus: class)
    // Error: border-red-500
    // Success: border-green-500

    let borderColorClass = "border-[#D3D5D8] focus:border-[#005FDA]";

    if (errorText) {
      borderColorClass = "border-red-500 focus:border-red-500";
    } else if (isValid) {
      borderColorClass = "border-green-500 focus:border-green-500";
    }

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

    const { dir } = props;

    // Adjust padding and icon position based on formatting direction
    // If direction is explicitly LTR, icons go to Right, text starts Left.
    // If direction is explicitly RTL, icons go to Left, text starts Right.
    // Default (undefined) behavior relies on CSS/Tailwind defaults (usually LTR or inherited).

    const isRtl = dir === 'rtl';

    return (
      <div className="w-full flex flex-col gap-1">
        <div className="relative">
          <input
            ref={ref}
            type={isPassword ? (showPassword ? "text" : "password") : type}
            className={`w-full py-3 rounded-xl border ${borderColorClass} outline-none transition-all duration-200 text-gray-800 placeholder-gray-400 ${className} ${isRtl ? 'pl-12 pr-4' : 'pr-12 pl-4'
              }`}
            {...props}
          />

          <div className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-2 ${isRtl ? 'left-3' : 'right-3'
            }`}>
            {/* Validation Icons */}
            {isValid && !errorText && (
              <div className="text-green-500">
                <Check className="w-5 h-5" />
              </div>
            )}
            {errorText && (
              <div className="text-red-500">
                <AlertCircle className="w-5 h-5" />
              </div>
            )}

            {/* Password Toggle */}
            {isPassword && (
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="text-gray-400 hover:text-gray-600 outline-none"
                tabIndex={-1}
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            )}
          </div>
        </div>
        {errorText && (
          <span className="text-sm text-red-500 ml-1">{errorText}</span>
        )}
      </div>
    );
  }
);

CustomInput.displayName = "CustomInput";

export default CustomInput;
