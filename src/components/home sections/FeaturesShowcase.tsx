import React from "react";
import { Dictionary } from "@/lib/dictionary";
import Card from "@/components/Card/Card";

// Import all showcase images
import teamManagementScreen from "../../../public/images/new_screens/team_management_screen.webp";
import quickActionScreen from "../../../public/images/new_screens/quick_action_screen.webp";
import socialMediaScreen from "../../../public/images/new_screens/social_media_screen.webp";
import multiUsersScreen from "../../../public/images/new_screens/multi_users_screen.webp";
import commissionsScreen from "../../../public/images/new_screens/commisions_screen.webp";
import smartFiltrationScreen from "../../../public/images/new_screens/smart_filtration_screen.webp";

interface FeaturesShowcaseProps {
  dict: Dictionary;
}

const FeaturesShowcase: React.FC<FeaturesShowcaseProps> = ({ dict }) => {
  // const primaryCard = {
  //   title: dict.ticketing_title,
  //   description: dict.ticketing_description,
  //   image: "/images/details_screen.png",
  //   flexDirection: "col" as const,
  //   className:
  //     "additional-classes h-full w-full hover:shadow-md hover:scale-105 transition-all duration-300",
  // };

  // const supportingCards = [
  //   {
  //     key: "configurable",
  //     title: dict.configurable_title,
  //     description: dict.configurable_description,
  //     image: "/images/chat_screen.png",
  //     flexDirection: "row" as const,
  //     className:
  //       "additional-classes flex-1 hover:shadow-md hover:scale-105 transition-all duration-300",
  //   },
  //   {
  //     key: "omnichannel",
  //     title: dict.omnichannel_title,
  //     description: dict.omnichannel_description,
  //     image: "/images/social_screen.png",
  //     flexDirection: "row" as const,
  //     className:
  //       "additional-classes flex-1 hover:shadow-md hover:scale-105 transition-all duration-300",
  //   },
  // ];

  // const lowerCards = [
  //   {
  //     key: "multiplayer",
  //     title: dict.multiplayer_title,
  //     description: dict.multiplayer_description,
  //     image: "/images/multi_screen.png",
  //   },
  //   {
  //     key: "lightning-fast",
  //     title: dict.lightining_fast_title,
  //     description: dict.lightining_fast_description,
  //     image: "/images/fast_screen.png",
  //   },
  //   {
  //     key: "team-management",
  //     title: dict.team_management_title,
  //     description: dict.team_management_description,
  //     image: "/images/team_management_screen.png",
  //   },
  // ];
  const primaryCard = {
    title: dict.team_management_title,
    description: dict.team_management_description,
    image: teamManagementScreen,
    flexDirection: "col" as const,
    className:
      "additional-classes h-full w-full hover:shadow-md hover:scale-105 transition-all duration-300",
  };

  const supportingCards = [
    {
      key: "quick-actions",
      title: dict.quick_actions,
      description: dict.quick_actions_description,
      image: quickActionScreen,
      flexDirection: "row" as const,
      className:
        "additional-classes flex-1 hover:shadow-md hover:scale-105 transition-all duration-300",
    },
    {
      key: "social-media-integration",
      title: dict.social_media_integration,
      description: dict.social_media_integration_description,
      image: socialMediaScreen,
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
      image: multiUsersScreen,
    },
    {
      key: "social_media_integration",
      title: dict.social_media_integration,
      description: dict.social_media_integration_description,
      image: commissionsScreen,
    },
    {
      key: "smart_filtering",
      title: dict.smart_filtering,
      description: dict.smart_filtering_description,
      image: smartFiltrationScreen,
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

      <div className="flex w-full flex-col items-stretch gap-5 md:flex-row md:justify-center">
        {lowerCards.map((card) => (
          <Card
            key={card.key}
            title={card.title}
            description={card.description}
            image={card.image}
            flexDirection="col"
            className="additional-classes md:w-[413px] md:h-[469px] md:aspect-8/9 hover:shadow-md hover:scale-105 transition-all duration-300 flex-1"
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesShowcase;
