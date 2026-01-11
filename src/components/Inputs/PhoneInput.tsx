"use client";

import React, { useState } from "react";
import { useDictionary } from "@/hooks/Dickitionary";
import * as ReactCountryFlag from "country-flag-icons/react/3x2";
import { Check, AlertCircle, ChevronDown } from "lucide-react";

interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  value: string;
  onChange: (value: string) => void;
  errorText?: string;
  isValid?: boolean;
}

const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ className, value, onChange, errorText, isValid, ...props }, ref) => {
    const { dictionary } = useDictionary();
    const [country, setCountry] = useState("EG"); // Default to Egypt
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const countries = [
      { code: "EG", name: dictionary.country_egypt, dialCode: "+20" },
      { code: "SA", name: dictionary.country_saudi_arabia, dialCode: "+966" },
      { code: "AE", name: dictionary.country_uae, dialCode: "+971" },
      { code: "US", name: dictionary.country_united_states, dialCode: "+1" },
      { code: "KW", name: dictionary.country_kuwait, dialCode: "+965" },
      { code: "QA", name: dictionary.country_qatar, dialCode: "+974" },
      { code: "BH", name: dictionary.country_bahrain, dialCode: "+973" },
      { code: "OM", name: dictionary.country_oman, dialCode: "+968" },
    ];

    const selectedCountry =
      countries.find((c) => c.code === country) || countries[0];

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = e.target.value;
      // Allow only numbers
      if (/^\d*$/.test(val)) {
        onChange(val);
      }
    };

    let borderColorClass = "border-[#D3D5D8] focus-within:border-[#005FDA]";

    if (errorText) {
      borderColorClass = "border-red-500 focus-within:border-red-500";
    } else if (isValid) {
      borderColorClass = "border-green-500 focus-within:border-green-500";
    }

    // Flag component
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const FlagComponent =
      (ReactCountryFlag as any)[selectedCountry.code] || ReactCountryFlag.US;

    return (
      <div className={`w-full flex flex-col gap-1 ${className || ""}`}>
        <div
          className={`relative flex items-center w-full rounded-xl border ${borderColorClass} transition-all duration-200 bg-white`}
        >
          {/* Country Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-2 pl-4 pr-2 py-3 border-r border-gray-200 hover:bg-gray-50 rounded-l-xl transition-colors"
            >
              <div className="w-6 h-4 overflow-hidden rounded-sm shadow-sm">
                <FlagComponent title={selectedCountry.name} />
              </div>
              <span className="text-sm font-medium text-gray-700 w-8 text-left">
                {selectedCountry.dialCode}
              </span>
              <ChevronDown
                className={`w-3 h-3 text-gray-500 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 max-h-60 overflow-y-auto bg-white rounded-lg shadow-xl border border-gray-100 z-50 py-1">
                {countries.map((c) => {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  const CountryFlag =
                    (ReactCountryFlag as any)[c.code] || ReactCountryFlag.US;
                  return (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => {
                        setCountry(c.code);
                        setIsDropdownOpen(false);
                      }}
                      className="flex items-center gap-3 w-full px-4 py-2 hover:bg-blue-50 transition-colors text-left"
                    >
                      <div className="w-6 h-4 overflow-hidden rounded-sm border border-gray-100">
                        <CountryFlag title={c.name} />
                      </div>
                      <span className="flex-1 text-sm text-gray-700">
                        {c.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {c.dialCode}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Input */}
          <input
            ref={ref}
            className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-800 placeholder-gray-400"
            value={value}
            onChange={handlePhoneChange}
            type="tel"
            {...props}
          />

          {/* Icons */}
          <div className="pr-3 flex items-center pointer-events-none">
            {isValid && !errorText && (
              <Check className="w-5 h-5 text-green-500" />
            )}
            {errorText && <AlertCircle className="w-5 h-5 text-red-500" />}
          </div>
        </div>

        {/* Error Text */}
        {errorText && (
          <span className="text-sm text-red-500 ml-1">{errorText}</span>
        )}
      </div>
    );
  }
);

PhoneInput.displayName = "PhoneInput";

export default PhoneInput;
