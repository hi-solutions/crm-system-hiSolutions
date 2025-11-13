"use client";

import React, { useState } from "react";
import CardBoard from "@/components/Card/CardBoard";
import { FiTarget } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Dictionary } from "@/lib/dictionary";

interface MissionVisionCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  cardStyle?: string;
}

interface MissionVisionProps {
  dict: Dictionary;
}

const MissionVision: React.FC<MissionVisionProps> = ({ dict }) => {
  const cardsData: MissionVisionCard[] = [
    {
      icon: (
        <FiTarget className="text-[#005FDA] text-5xl rounded-full p-2 bg-[rgba(92,162,255,0.69)]" />
      ),
      title: dict?.our_mission_title ?? "",
      description: dict?.our_mission_description ?? "",
    },
    {
      icon: (
        <MdOutlineRemoveRedEye className="text-[#5BC17F] text-5xl rounded-full bg-[rgba(91,193,127,0.1)] p-2" />
      ),
      title: dict?.our_vision_title ?? "",
      description: dict?.our_vision_description ?? "",
    },
  ];
  const [cards] = useState<MissionVisionCard[]>(cardsData);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
      {cards.map((card, index) => (
        <CardBoard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          cardStyle={
            card.cardStyle ??
            "rounded-2xl border shadow-md py-12 px-12 max-w-xl rounded-2xl border shadow-md py-12 px-12 max-w-xl hover:shadow-lg hover:-translate-y-2 transition-all duration-300 ease-out"
          }
        />
      ))}
    </div>
  );
};

export default MissionVision;
