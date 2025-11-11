"use client";

import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Dictionary } from "@/lib/dictionary";
import { IoChatboxOutline } from "react-icons/io5";

interface HowWeWorkProps {
  dict: Dictionary;
}

interface HowWeWorkItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HowWeWork: React.FC<HowWeWorkProps> = ({ dict }) => {
  const itemsData: HowWeWorkItem[] = [
    {
      icon: <IoChatboxOutline />,
      title: dict?.consulting_strategy ?? "",
      description: dict?.consulting_strategy_desc ?? "",
    },
    {
      icon: <IoChatboxOutline />,
      title: dict?.consulting_strategy ?? "",
      description: dict?.consulting_strategy_desc ?? "",
    },
    {
      icon: <IoChatboxOutline />,
      title: dict?.consulting_strategy ?? "",
      description: dict?.consulting_strategy_desc ?? "",
    },
    {
      icon: <IoChatboxOutline />,
      title: dict?.consulting_strategy ?? "",
      description: dict?.consulting_strategy_desc ?? "",
    },
    {
      icon: <IoChatboxOutline />,
      title: dict?.consulting_strategy ?? "",
      description: dict?.consulting_strategy_desc ?? "",
    },
    {
      icon: <IoChatboxOutline />,
      title: dict?.consulting_strategy ?? "",
      description: dict?.consulting_strategy_desc ?? "",
    },
  ];
  const [items] = useState<HowWeWorkItem[]>(itemsData);

  return (
    <>
      <SectionHeader
        tag={{ title: dict?.how_we_work_tag }}
        description={dict?.how_we_work_description}
      />
      <div className="w-full md:border-t-3 border-blue-100 flex flex-col sm:flex-row md:justify-around justify-center items-center gap-6 sm:flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-6 lg:max-w-[210px] lg:-mt-8 mb-4"
          >
            <div className="p-3 border-4 border-[#005FDA] rounded-full text-[#005FDA] bg-white text-3xl flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-[#18063C] text-center">
              {item.title}
            </h3>
            <p className="font-medium text-sm text-[#425061] text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HowWeWork;
