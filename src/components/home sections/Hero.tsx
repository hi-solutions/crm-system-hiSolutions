"use client";
import { Dictionary } from "@/lib/dictionary";
import React from "react";
import Button from "../Button";
import { Params } from "@/app/[lang]/layout";
import Image from "next/image";
import { useSubscriptionModal } from "@/context/SubscriptionModalContext";

// Import all images
import dots from "../../../public/images/dots.webp";
import vectorLine from "../../../public/images/vector_line.webp";
import phoneAr from "../../../public/images/phone_ar_screen.webp";
import phoneEn from "../../../public/images/phone_en_screen.webp";
import currencyAr from "../../../public/images/currencyAr.webp";
import currencyEn from "../../../public/images/currency_en.webp";
import statisticsAr from "../../../public/images/statistics_ar.webp";
import statisticsEn from "../../../public/images/statistics_en.webp";

interface HeroProps {
  dict?: Dictionary;
  params: Awaited<Params>; // resolves Promise<{ lang: "ar" | "en" }>
}

const Hero = ({ dict, params }: HeroProps) => {
  const { openModal } = useSubscriptionModal();
  const phoneScreens = { ar: phoneAr, en: phoneEn };
  const currencyScreens = { ar: currencyAr, en: currencyEn };
  const statisticsScreens = { ar: statisticsAr, en: statisticsEn };

  const currentPhoneScreen =
    phoneScreens[params.lang as keyof typeof phoneScreens] || phoneEn;
  const currentCurrencyScreen =
    currencyScreens[params.lang as keyof typeof currencyScreens] || currencyEn;
  const currentStatisticsScreen =
    statisticsScreens[params.lang as keyof typeof statisticsScreens] ||
    statisticsEn;

  // Preloading is now handled by Next.js static imports and the priority prop.

  // const phoneScreen =
  //   params.lang === "en"
  //     ? "/images/phone_en_screen.png"
  //     : "/images/phone_ar_screen.png";

  // const currencyScreen =
  //   params.lang === "en"
  //     ? "/images/currency_en.png"
  //     : "/images/currency_ar.png";

  // const statisticsScreen =
  //   params.lang === "en"
  //     ? "/images/statistics_en.png"
  //     : "/images/statistics_ar.png";

  return (
    <section className="px-4 md:px-10 lg:px-16 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center">
        {/* content */}
        <div className="flex flex-col items-start gap-6 max-w-lg relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight">
            {dict?.manage_your}{" "}
            <span className="text-[#00AEEF]">{dict?.real_estate_sales}</span>{" "}
            {dict?.easier_and_smarter}
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl">
            {dict?.hero_descrption}
          </p>
          <Button
            onClick={() => openModal()}
            className="shadow-sm hover:shadow-md text-base px-6 py-3 rounded-3xl"
          >
            {dict?.get_your_copy_now}
          </Button>
          {/* dots */}
          <div className="absolute bottom-0 left-1/4 translate-y-1/2">
            <Image src={dots} alt="Dots" width={150} height={150} />
          </div>
          {/* vector_line.png */}
          <div className="absolute top-0 right-0 translate-x-2/3 ">
            <Image src={vectorLine} alt="Dots" width={150} height={150} />
          </div>
        </div>

        {/* images */}
        <div className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] lg:h-[650px] ">
          <Image
            src={currentPhoneScreen}
            alt="App screens"
            fill
            className="object-contain object-center scale-110 md:scale-125"
            priority
          />

          {/* currency card overlay */}
          <div className="absolute right-0 top-16 sm:top-12 md:top-14 lg:top-16 translate-x-2 sm:translate-x-6 md:translate-x-10">
            <Image
              src={currentCurrencyScreen}
              alt="Currency widget"
              width={260}
              height={160}
              className="w-32 sm:w-48 md:w-56 lg:w-60 h-auto"
            />
          </div>

          {/* statistics card overlay */}
          <div className="absolute bottom-2 left-6 sm:left-10 md:left-14 lg:left-0 lg:-translate-x-1/5">
            <Image
              src={currentStatisticsScreen}
              alt="Statistics widget"
              width={260}
              height={160}
              className="w-32 sm:w-44 md:w-52 lg:w-56 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
