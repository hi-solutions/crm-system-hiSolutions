"use client";
import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Dictionary } from "@/lib/dictionary";
import Image from "next/image";
import HeaderImage from "../../../public/images/header_section_bg.webp";
interface PrisingHeadingProps {
  dict: Dictionary;
}

const PrisingHeading = ({ dict }: PrisingHeadingProps) => {
  return (
    <section className="min-h-[300px] sm:min-h-[350px] md:min-h-[400px] py-12 md:py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10 overflow-hidden">
      {/* <DecoratedElements /> */}
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HeaderImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        {/* White Overlay */}
        <div
          className="absolute inset-0 bg-white/80"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 w-full">
        <SectionHeader
          tag={{ title: dict?.prices }}
          title={dict?.flexible_pricing_plans}
          description={dict?.choose_the_right_plan}
        />
      </div>
    </section>
  );
};

export default PrisingHeading;
