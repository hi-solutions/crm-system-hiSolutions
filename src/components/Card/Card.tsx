import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  imageDirection?: "start" | "end" | "center";
  className?: string;
  flexDirection?: "row" | "col";
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  className = "",
  flexDirection = "row",
}) => {
  const isRow = flexDirection === "row";

  // Gradient direction
  const gradientDirection = isRow
    ? "bg-gradient-to-b from-[#EFFBFE] to-[#CAF0F8] md:bg-gradient-to-r"
    : "bg-gradient-to-b from-[#EFFBFE] to-[#CAF0F8]";

  // Flex layout: Row becomes col on mobile (default), md:flex-row. Col stays flex-col.
  // We use flex-col as base for both to support mobile.
  // For isRow=true, we add md:flex-row.
  const flexClass = isRow ? "flex-col md:flex-row" : "flex-col";

  // Base styles
  const baseStyles = `flex ${flexClass} border border-[#D3D5D8] rounded-2xl overflow-hidden`;

  return (
    <div
      className={`${baseStyles} ${gradientDirection} ${className}`}
      // Ensure minHeight so flex children don't collapse if empty, though content prevents that usually
    >
      {/* Content section */}
      <div className="flex flex-col justify-center items-start p-6 flex-1 w-full md:w-auto">
        <h3 className="text-[#18063C] font-bold text-2xl mb-2">{title}</h3>
        <p className="text-[#425061] font-medium text-base">{description}</p>
      </div>

      {/* Image section */}
      <div
        className={`relative w-full flex justify-center items-center ${
          isRow ? "md:w-1/2" : "flex-1"
        }`}
      >
        {/*
           Container for the image.
           1. In column mode (mobile or flex-col), we need a fixed height or aspect ratio so it doesn't collapse.
           2. In row mode (desktop), it should fill the height of the card.
        */}
        <div
          className={`relative w-full ${
            // Mobile/Col: fixed height to prevent disappearance
            // Desktop Row: h-full to fill the flex container
            isRow ? "h-[250px] md:h-full" : "h-[300px] w-full"
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
