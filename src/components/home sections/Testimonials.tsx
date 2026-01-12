"use client";

import React, { useMemo, useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Dictionary } from "@/lib/dictionary";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import avatarImg from "../../../public/images/image.png";

interface TestimonialsProps {
  dict?: Dictionary;
}

const Testimonials: React.FC<TestimonialsProps> = ({ dict }) => {
  const items = useMemo(
    () => [
      {
        text: "حزمة الأيقونات المفضلة لدي لكل مشروع أبدأ العمل عليه. المرونة والتخصيص الذي توفره لي لم يضاهيه أحد حتى الآن.",
        author: "دينيسلاف جيلكوف",
        title: "Founder",
        company: "UILearn, Figura",
        avatar: avatarImg,
      },
      {
        text: "أفضل تجربة أيقونات استخدمتها، جودة رائعة وتناسق مذهل بين العناصر.",
        author: "أحمد علي",
        title: "Designer",
        company: "Freelance",
        avatar: avatarImg,
      },
      {
        text: "تسّرع عملية التصميم وتمنحني نتائج احترافية بسهولة.",
        author: "Sara M.",
        title: "Product Manager",
        company: "Startup",
        avatar: avatarImg,
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const go = (dir: -1 | 1) =>
    setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
      <div className="flex justify-center items-center">
        <SectionHeader
          tag={{ title: dict?.testimonials || "" }}
          title={dict?.testimonials_title || ""}
          description={dict?.testimonials_description || ""}
        />
      </div>

      <div className="relative w-full max-w-5xl">
        {/* arrows */}
        <button
          aria-label="Previous"
          onClick={() => go(-1)}
          className="flex absolute left-2 sm:-left-6 md:-left-10 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white items-center justify-center shadow-lg"
        >
          ‹
        </button>
        <button
          aria-label="Next"
          onClick={() => go(1)}
          className="flex absolute right-2 sm:-right-6 md:-right-10 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-blue-600 text-white items-center justify-center shadow-lg"
        >
          ›
        </button>

        {/* card */}
        <div className="relative bg-white shadow-xl px-6 md:px-10 py-10 md:py-12 border border-t-6  border-t-blue-600">
          {/* top badge like pricing card */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="bg-blue-600 text-white px-4 py-1.5 rounded-2xl flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className="w-3.5 h-3.5" />
              ))}
            </div>
          </div>

          <p className="text-center text-lg md:text-2xl text-gray-800 leading-9 md:leading-10 max-w-3xl mx-auto">
            {items[index].text}
          </p>

          {/* author */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <Image
              src={items[index].avatar}
              alt={items[index].author}
              width={56}
              height={56}
              className="rounded-full border"
            />
            <div className="text-center">
              <div className="font-semibold text-gray-900">
                {items[index].author}
              </div>
              <div className="text-sm text-gray-500">
                {items[index].title} · {items[index].company}
              </div>
            </div>
          </div>

          {/* dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-blue-600" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
