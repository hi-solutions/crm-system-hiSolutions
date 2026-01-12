"use client";
import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import DecoratedElements from "../DecoratedElements/DecoratedElements";
import { Dictionary } from "@/lib/dictionary";
import Button from "../Button";
import { useSubscriptionModal } from "@/context/SubscriptionModalContext";
import HeaderImage from "../../../public/images/header_section_bg.webp";
import Image from "next/image";

interface OurFeaturesHeadingProps {
  dict: Dictionary;
}

const OurFeaturesHeading = ({ dict }: OurFeaturesHeadingProps) => {
  const { openModal } = useSubscriptionModal();
  return (
    <section className="min-h-[300px] sm:min-h-[350px] md:min-h-[400px] py-12 md:py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10 overflow-hidden">
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

      <div className="relative z-10 flex flex-col items-center justify-center gap-10 w-full">
        <DecoratedElements />

        {/* Content */}

        <SectionHeader
          tag={{ title: dict?.features }}
          title={dict?.powerful_tools_manage}
          description={dict?.integrated_platform_desc}
        />
        <Button
          className="shadow-sm hover:shadow-md text-base"
          onClick={() => openModal()}
        >
          {dict?.start_now_free}
        </Button>
      </div>
    </section>
  );
};

export default OurFeaturesHeading;
