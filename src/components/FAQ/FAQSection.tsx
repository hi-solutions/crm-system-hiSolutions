"use client";
import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ExpandableCard } from "./ExpandableCard";
import { useDictionary } from "@/hooks/Dickitionary";

const FAQSection = () => {
  const { dictionary, language } = useDictionary();

  const generalQuestions = [
    {
      question: dictionary.faq1Question,
      answer: dictionary.faq1Answer,
    },
    {
      question: dictionary.faq2Question,
      answer: dictionary.faq2Answer,
    },
    {
      question: dictionary.faq3Question,
      answer: dictionary.faq3Answer,
    },
    {
      question: dictionary.faq4Question,
      answer: dictionary.faq4Answer,
    },
    {
      question: dictionary.faq5Question,
      answer: dictionary.faq5Answer,
    },
    {
      question: dictionary.faq6Question,
      answer: dictionary.faq6Answer,
    },
    {
      question: dictionary.faq7Question,
      answer: dictionary.faq7Answer,
    },
  ].filter(
    (item) => item.question?.trim().length && item.answer?.trim().length
  );

  const tagTitle = language === "ar" ? "الأسئلة" : "Questions";
  const generalQuestionsLabel =
    language === "ar" ? "الأسئلة العامة" : "General Questions";

  return (
    <section className="w-full flex flex-col items-center gap-6 sm:gap-8 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 mb-8 sm:mb-12 md:mb-16">
      <SectionHeader
        tag={{ title: tagTitle }}
        title={dictionary?.frequently_asked_questions}
        description={dictionary?.faq_description}
      />
      <p className="text-[#033E8A] text-base sm:text-lg font-semibold">
        {generalQuestionsLabel}
      </p>
      <div className="flex w-full max-w-4xl flex-col gap-4">
        {generalQuestions.map((question, index) => (
          <ExpandableCard
            key={`${question.question}-${index}`}
            question={question.question}
            answer={question.answer}
            defaultOpen={false}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
