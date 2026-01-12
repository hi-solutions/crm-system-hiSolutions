"use client";

import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
// import DecoratedElements from "../DecoratedElements/DecoratedElements";
import Button from "../Button";
import { Dictionary } from "@/lib/dictionary";
import { useSubscriptionModal } from "@/context/SubscriptionModalContext";
import HeaderImage from "../../../public/images/header_section_bg.webp";
import Image from "next/image";
interface AboutUsHeadingProps {
  dict: Dictionary;
}

const AboutUsHeading = ({ dict }: AboutUsHeadingProps) => {
  const { openModal } = useSubscriptionModal();
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
          tag={{ title: dict?.who_we_are_tag }}
          title={dict?.who_we_are_title}
          description={dict?.who_we_are_description}
        />

        <div className="flex flex-row gap-4 justify-center items-center">
          <Button
            className="shadow-sm hover:shadow-md text-base"
            onClick={() => openModal()}
          >
            {dict?.start_now_free}
          </Button>
          {/* <Button
          className="shadow-sm hover:shadow-md text-base border-2 border-[#005FDA] group hover:text-white bg-white"
          textClassName="text-[#005FDA] group-hover:text-white"
        >
          {dict?.learn_more}
        </Button> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeading;
