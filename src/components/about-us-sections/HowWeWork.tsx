"use client";

import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { Dictionary } from "@/lib/dictionary";
import {
  IoRocketSharp,
  IoHeadset,
  IoPencilSharp,
  IoCode,
} from "react-icons/io5";
import { FiTarget } from "react-icons/fi";
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
      icon: <FiTarget />,
      title: dict?.discovery_title ?? "",
      description: dict?.discovery_description ?? "",
    },
    {
      icon: <IoPencilSharp />,
      title: dict?.design_title ?? "",
      description: dict?.design_description ?? "",
    },
    {
      icon: <IoCode />,
      title: dict?.implementation_title ?? "",
      description: dict?.implementation_description ?? "",
    },
    {
      icon: <IoHeadset />,
      title: dict?.support_title ?? "",
      description: dict?.support_description ?? "",
    },
    {
      icon: <IoRocketSharp />,
      title: dict?.growth_title ?? "",
      description: dict?.growth_description ?? "",
    },
  ];
  const [items] = useState<HowWeWorkItem[]>(itemsData);

  return (
    <div className="flex flex-col gap-15">
      <SectionHeader
        tag={{ title: dict?.how_we_work_tag }}
        description={dict?.how_we_work_description}
      />
      <div className="w-full md:border-t-3 border-blue-100 flex flex-col sm:flex-row md:justify-around justify-center items-center gap-8 sm:flex-wrap">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-6 lg:max-w-[210px] lg:-mt-10 mb-4 hover:-translate-y-2 transition-all duration-300 ease-out max-w-[210px]"
          >
            <div className=" border-8 border-blue-100 rounded-full flex items-center justify-center ">
              <div className="p-3 border-4 border-[#005FDA] rounded-full text-[#005FDA] bg-white text-3xl flex items-center justify-center hover:bg-[#005FDA] hover:text-white hover:border-blue-100 transition-all duration-300">
                {item.icon}
              </div>
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
    </div>
  );
};

export default HowWeWork;
