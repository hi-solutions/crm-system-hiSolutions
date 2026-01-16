"use client";
import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ExpandableCard } from "./ExpandableCard";
import { useDictionary } from "@/hooks/Dickitionary";

const FAQSection = () => {
  const { dictionary, language } = useDictionary();

  const tagTitle = language === "ar" ? "الأسئلة" : "Questions";

  return (
    <section className="w-full flex flex-col items-center gap-6 sm:gap-8 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 mb-8 sm:mb-12 md:mb-16">
      <SectionHeader
        tag={{ title: tagTitle }}
        title={dictionary?.frequently_asked_questions}
        description={dictionary?.faq_description}
      />

      <div className="flex w-full max-w-4xl flex-col gap-10">
        {dictionary?.faqCategories?.map((category, catIndex) => (
          <div key={`category-${catIndex}`} className="w-full">
            <h3 className="text-[#033E8A] text-xl font-bold mb-4 px-2">
              {category.title}
            </h3>
            <div className="flex flex-col gap-4">
              {category.items.map((question, index) => (
                <ExpandableCard
                  key={`${question.question}-${index}`}
                  question={question.question}
                  answer={question.answer}
                  defaultOpen={false}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
