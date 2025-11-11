"use client";

import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import CardBoard from "@/components/Card/CardBoard";
import { Dictionary } from "@/lib/dictionary";
import { IoMdCode } from "react-icons/io";
import { LuLampCeiling } from "react-icons/lu";
import { IoTrendingUpSharp } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { IoChatboxOutline } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";

interface WhatWeDoProps {
  dict: Dictionary;
}

interface WhatWeDoItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const WhatWeDo: React.FC<WhatWeDoProps> = ({ dict }) => {
  const itemsData: WhatWeDoItem[] = [
    {
      icon: (
        <IoMdCode className="text-5xl rounded-full p-2 text-[#005FDA] bg-[#005FDA]/8 " />
      ),
      title: dict?.crm_implementation ?? "",
      description: dict?.crm_implementation_desc ?? "",
    },
    {
      icon: (
        <LuLampCeiling className="text-5xl rounded-full p-2 text-[#1293EC] bg-[#1293EC]/8" />
      ),
      title: dict?.software_development ?? "",
      description: dict?.software_development_desc ?? "",
    },
    {
      icon: (
        <IoTrendingUpSharp className="text-5xl rounded-full p-2 text-[#5BC17F] bg-[#5BC17F]/8" />
      ),
      title: dict?.digital_marketing ?? "",
      description: dict?.digital_marketing_desc ?? "",
    },
    {
      icon: (
        <BsPeople className="text-5xl rounded-full p-2 text-[#FFB101] bg-[#FFB101]/8" />
      ),
      title: dict?.agency_services ?? "",
      description: dict?.agency_services_desc ?? "",
    },
    {
      icon: (
        <IoChatboxOutline className="text-5xl rounded-full p-2 text-[#FF6294] bg-[#FF6294]/8" />
      ),
      title: dict?.consulting_strategy ?? "",
      description: dict?.consulting_strategy_desc ?? "",
    },
    {
      icon: (
        <SiSimpleanalytics className="text-5xl rounded-full p-2 text-[#27A7FE] bg-[#27A7FE]/8" />
      ),
      title: dict?.analytics_insights ?? "",
      description: dict?.analytics_insights_desc ?? "",
    },
  ];
  const [items] = useState<WhatWeDoItem[]>(itemsData);

  return (
    <>
      <SectionHeader
        tag={{ title: dict?.what_we_do_tag }}
        description={dict?.what_we_do_description}
      />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {items.map((item, index) => (
          <CardBoard
            key={index}
            icon={item.icon}
            title={item.title}
            description={item.description}
            cardStyle="rounded-2xl border shadow-md py-8 px-8 max-w-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-out"
            titleAndIconDirection="col"
          />
        ))}
      </div>
    </>
  );
};

export default WhatWeDo;
