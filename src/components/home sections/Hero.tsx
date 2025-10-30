import { Dictionary } from "@/lib/dictionary";
import React from "react";
import Button from "../Button";
import Link from "next/link";
import { Params } from "@/app/[lang]/layout";
import Image from "next/image";

interface HeroProps {
  dict?: Dictionary;
  params: Awaited<Params>; // resolves Promise<{ lang: "ar" | "en" }>
}

const Hero = ({ dict, params }: HeroProps) => {
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
          <Link href={`/${params.lang}/contact`}>
            <Button className="shadow-sm hover:shadow-md text-base px-6 py-3 rounded-3xl">
              {dict?.start14DaysTrial}
            </Button>
          </Link>
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
        <div className="relative w-full h-[480px] sm:h-[560px] md:h-[640px] lg:h-[700px]">
          {/* main phones */}
          <Image
            src="/images/mobile_screens.png"
            alt="App screens"
            fill
            className="object-contain object-center scale-110 md:scale-125"
            priority
          />

          {/* currency card overlay */}
          <div className="absolute right-0 top-16 sm:top-12 md:top-14 lg:top-16 translate-x-2 sm:translate-x-6">
            <Image
              src="/images/currency_viewr.png"
              alt="Currency widget"
              width={260}
              height={160}
              className="w-48 sm:w-56 md:w-60 h-auto"
            />
          </div>

          {/* statistics card overlay */}
          <div className="absolute bottom-2 left-6 sm:left-10 md:left-14 lg:left-0 lg:-translate-x-1/5">
            <Image
              src="/images/statistics.png"
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
