"use client";
import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { ExpandableCard } from "./ExpandableCard";
import { useDictionary } from "@/hooks/Dickitionary";

const FAQSection = () => {
  const { dictionary } = useDictionary();

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
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <SectionHeader
        tag={{ title: "Questions" }}
        title="Frequently Asked Questions"
        description="Everything you need to know about Anron Icons. Can’t find the answer you’re
looking for? Feel free to Contact us"
      />
      <p className="text-[#425061] text-base font-medium">General Questions</p>

      {/* expandable cards for general questions */}
      <div className="flex flex-col gap-4 w-full max-w-3xl ">
        {generalQuestions.map((question) => (
          <ExpandableCard
            key={question.question}
            question={question.question}
            answer={question.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
