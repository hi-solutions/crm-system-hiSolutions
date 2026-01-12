"use client";

import React, { useState } from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import Image, { StaticImageData } from "next/image";
import { Dictionary } from "@/lib/dictionary";

// Import team images
import davidImg from "../../../public/images/team/portrait-white-man-isolated.jpg";
import mohammedImg from "../../../public/images/team/portrate.jpg";
import ryanImg from "../../../public/images/team/RyanProfile.jpg";
import saraImg from "../../../public/images/team/sara.png";

interface MeetOurTeamProps {
  dict: Dictionary;
}

interface TeamMember {
  img: string | StaticImageData;
  name: string;
  role: string;
}

const MeetOurTeam: React.FC<MeetOurTeamProps> = ({ dict }) => {
  const teamMembersData: TeamMember[] = [
    {
      img: davidImg,
      name: dict?.david_park ?? "",
      role: dict?.lead_developer ?? "",
    },
    {
      img: mohammedImg,
      name: dict?.mohammed_al ?? "",
      role: dict?.marketing_head ?? "",
    },
    {
      img: ryanImg,
      name: dict?.ryan_gosling ?? "",
      role: dict?.cto ?? "",
    },
    {
      img: saraImg,
      name: dict?.sara_ahmed ?? "",
      role: dict?.ceo ?? "",
    },
  ];
  const [teamMembers] = useState<TeamMember[]>(teamMembersData);

  return (
    <>
      <SectionHeader
        tag={{ title: dict?.meet_our_team_tag }}
        description={dict?.meet_our_team_description}
      />
      {/* team members grid */}
      {/* <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 w-full justify-center items-center "> */}
      <div className="flex flex-wrap md:flex-row flex-col gap-6 w-full justify-center items-center ">
        {teamMembers.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-start rounded-2xl border border-gray-200 shadow-md overflow-hidden max-w-xs h-full grow transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="w-full rounded-t-2xl overflow-hidden ">
              <Image
                src={item.img}
                alt={item.name}
                width={1000}
                height={1000}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="p-6 w-full flex flex-col items-center justify-center gap-2">
              <h3 className="text-lg font-bold text-[#18063C] text-center">
                {item.name}
              </h3>
              <p className="font-medium text-sm text-[#425061] text-center">
                {item.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MeetOurTeam;
