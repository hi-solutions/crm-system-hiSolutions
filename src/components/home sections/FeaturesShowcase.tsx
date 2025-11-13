import React from "react";
import { Dictionary } from "@/lib/dictionary";
import Card from "@/components/Card/Card";

interface FeaturesShowcaseProps {
  dict: Dictionary;
}

const FeaturesShowcase: React.FC<FeaturesShowcaseProps> = ({ dict }) => {
  const primaryCard = {
    title: dict.ticketing_title,
    description: dict.ticketing_description,
    image: "/images/details_screen.png",
    flexDirection: "col" as const,
    className:
      "additional-classes h-full w-full hover:shadow-md hover:scale-105 transition-all duration-300",
  };

  const supportingCards = [
    {
      key: "configurable",
      title: dict.configurable_title,
      description: dict.configurable_description,
      image: "/images/chat_screen.png",
      flexDirection: "row" as const,
      className:
        "additional-classes flex-1 hover:shadow-md hover:scale-105 transition-all duration-300",
    },
    {
      key: "omnichannel",
      title: dict.omnichannel_title,
      description: dict.omnichannel_description,
      image: "/images/social_screen.png",
      flexDirection: "row" as const,
      className:
        "additional-classes flex-1 hover:shadow-md hover:scale-105 transition-all duration-300",
    },
  ];

  const lowerCards = [
    {
      key: "multiplayer",
      title: dict.multiplayer_title,
      description: dict.multiplayer_description,
      image: "/images/multi_screen.png",
    },
    {
      key: "lightning-fast",
      title: dict.lightining_fast_title,
      description: dict.lightining_fast_description,
      image: "/images/fast_screen.png",
    },
    {
      key: "team-management",
      title: dict.team_management_title,
      description: dict.team_management_description,
      image: "/images/team_management_screen.png",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center gap-10 bg-gray-50 py-20 px-4 md:px-10 lg:px-16">
      <div className="flex w-full flex-col items-stretch gap-5 md:flex-row">
        <div className="flex w-full lg:w-1/2">
          <Card {...primaryCard} />
        </div>
        <div className="flex w-full flex-col gap-6 lg:w-1/2">
          {supportingCards.map((card) => (
            <Card
              key={card.key}
              title={card.title}
              description={card.description}
              image={card.image}
              flexDirection={card.flexDirection}
              className={card.className}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col items-stretch gap-5 md:flex-row">
        {lowerCards.map((card) => (
          <Card
            key={card.key}
            title={card.title}
            description={card.description}
            image={card.image}
            flexDirection="col"
            className="additional-classes h-full w-full hover:shadow-md hover:scale-105 transition-all duration-300"
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesShowcase;
