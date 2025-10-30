import React from "react";
import { Dictionary } from "@/lib/dictionary";

interface TrustedByProps {
  dict: Dictionary;
  lang: "ar" | "en";
}

const TrustedBy = ({ dict, lang }: TrustedByProps) => {
  const isRtl = lang === "ar";

  return (
    <section className="py-16 px-4 md:px-10 lg:px-16 bg-white">
      {/* Stats */}
      <div
        className={`mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-8 text-center ${
          isRtl ? "rtl" : "ltr"
        }`}
        dir={isRtl ? "rtl" : "ltr"}
      >
        <div className="space-y-1">
          <div className="text-3xl md:text-4xl font-semibold text-gray-900">
            {dict.stat_users_value}
          </div>
          <div className="text-gray-500">{dict.stat_users_label}</div>
        </div>
        <div className="space-y-1 border-y sm:border-y-0 sm:border-x border-gray-200 py-6 sm:py-0">
          <div className="text-3xl md:text-4xl font-semibold text-gray-900">
            {dict.stat_growth_value}
          </div>
          <div className="text-gray-500">{dict.stat_growth_label}</div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl md:text-4xl font-semibold text-gray-900">
            {dict.stat_reviews_value}
          </div>
          <div className="text-gray-500">{dict.stat_reviews_label}</div>
        </div>
      </div>

      {/* Heading */}
      <div className="mt-12 text-center" dir={isRtl ? "rtl" : "ltr"}>
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
          {dict.trusted_title}
        </h3>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          {dict.trusted_subtitle}
        </p>
      </div>

      {/* Logos row (placeholder brand names) */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-gray-500">
        <span className="text-lg">coinbase</span>
        <span className="text-lg">Dropbox</span>
        <span className="text-lg">Google</span>
        <span className="text-lg">slack</span>
        <span className="text-lg">Square</span>
        <span className="text-lg">zoom</span>
      </div>
    </section>
  );
};

export default TrustedBy;
