"use client";
import { Dictionary } from "@/lib/dictionary";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import { Params } from "@/app/[lang]/layout";
import Image from "next/image";
import { useSubscriptionModal } from "@/context/SubscriptionModalContext";

interface HeroProps {
  dict?: Dictionary;
  params: Awaited<Params>; // resolves Promise<{ lang: "ar" | "en" }>
}

const Hero = ({ dict, params }: HeroProps) => {
  const { openModal } = useSubscriptionModal();
  const [phoneScreen, setPhoneScreen] = useState<string>(
    `/images/phone_${params.lang}_screen.png`
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [phoneScreenLoading, setPhoneScreenLoading] = useState(true);

  const [currencyScreen, setCurrencyScreen] = useState<string>(
    `/images/currency_${params.lang}.png`
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [currencyScreenLoading, setCurrencyScreenLoading] = useState(true);

  const [statisticsScreen, setStatisticsScreen] = useState<string>(
    `/images/statistics_${params.lang}.png`
  );
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [statisticsScreenLoading, setStatisticsScreenLoading] = useState(true);

  useEffect(() => {
    // When lang changes, preload new phone screen image
    const newPhoneScreenSrc = `/images/phone_${params.lang}_screen.png`;
    setPhoneScreenLoading(true);
    const phoneImg = new window.Image();
    phoneImg.onload = () => {
      setPhoneScreen(newPhoneScreenSrc);
      setPhoneScreenLoading(false);
    };
    phoneImg.src = newPhoneScreenSrc;
  }, [params.lang]);

  useEffect(() => {
    // When lang changes, preload new currency screen image
    const newCurrencyScreenSrc = `/images/currency_${params.lang}.png`;
    setCurrencyScreenLoading(true);
    const currencyImg = new window.Image();
    currencyImg.onload = () => {
      setCurrencyScreen(newCurrencyScreenSrc);
      setCurrencyScreenLoading(false);
    };
    currencyImg.src = newCurrencyScreenSrc;
  }, [params.lang]);

  useEffect(() => {
    // When lang changes, preload new statistics screen image
    const newStatisticsScreenSrc = `/images/statistics_${params.lang}.png`;
    setStatisticsScreenLoading(true);
    const statisticsImg = new window.Image();
    statisticsImg.onload = () => {
      setStatisticsScreen(newStatisticsScreenSrc);
      setStatisticsScreenLoading(false);
    };
    statisticsImg.src = newStatisticsScreenSrc;
  }, [params.lang]);

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
            <span className="text-blue-600">{dict?.real_estate_sales}</span>{" "}
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
            <Image src="/images/dots.png" alt="Dots" width={150} height={150} />
          </div>
          {/* vector_line.png */}
          <div className="absolute top-0 right-0 translate-x-2/3 ">
            <Image
              src="/images/vector_line.png"
              alt="Dots"
              width={150}
              height={150}
            />
          </div>
        </div>

        {/* images */}
        <div className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] lg:h-[650px] ">
          {/* main phones */}
          <Image
            src={phoneScreen}
            alt="App screens"
            fill
            className="object-contain object-center scale-110 md:scale-125"
            priority
          />

          {/* currency card overlay */}
          <div className="absolute right-0 top-16 sm:top-12 md:top-14 lg:top-16 translate-x-2 sm:translate-x-6">
            <Image
              src={currencyScreen}
              alt="Currency widget"
              width={260}
              height={160}
              className="w-48 sm:w-56 md:w-60 h-auto"
            />
          </div>

          {/* statistics card overlay */}
          <div className="absolute bottom-2 left-6 sm:left-10 md:left-14 lg:left-0 lg:-translate-x-1/5">
            <Image
              src={statisticsScreen}
              alt="Statistics widget"
              width={260}
              height={160}
              className="w-44 sm:w-52 md:w-45 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
