import React from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  image: string;
  imageDirection?: "start" | "end" | "center";
  className?: string;
  flexDirection?: "row" | "col";
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageDirection = "center",
  className = "",
  flexDirection = "row",
}) => {
  // Determine gradient direction based on flex direction
  const gradientDirection =
    flexDirection === "col"
      ? "bg-gradient-to-b from-[#EFFBFE] to-[#CAF0F8]"
      : "bg-gradient-to-r from-[#EFFBFE] to-[#CAF0F8]";

  // Determine flex direction classes
  const flexClass = flexDirection === "col" ? "flex-col" : "flex-row";

  // Determine image alignment based on flex direction and imageDirection prop
  // If flexDirection is "col", align horizontally (justify-start/center/end)
  // If flexDirection is "row", align vertically (items-start/center/end)
  const getImageContainerClasses = () => {
    if (flexDirection === "col") {
      // Horizontal alignment for column layout
      // Image container touches top and bottom, alignment is left/center/right
      const justifyClass =
        imageDirection === "start"
          ? "justify-start"
          : imageDirection === "end"
          ? "justify-end"
          : "justify-center";
      return `w-full flex ${justifyClass} items-stretch`;
    } else {
      // Vertical alignment for row layout
      // Image container touches left and right, alignment is top/center/bottom
      const itemsClass =
        imageDirection === "start"
          ? "items-start"
          : imageDirection === "end"
          ? "items-end"
          : "items-center";
      return `h-full flex ${itemsClass} justify-stretch`;
    }
  };

  // Image wrapper styling - ensures image touches appropriate edges
  const getImageWrapperStyle = () => {
    if (flexDirection === "col") {
      // In column layout, image touches top/bottom edges
      // Width adapts to alignment (start/end/center), height fills container
      return {
        width: "100%",
        height: "100%",
      };
    } else {
      // In row layout, image touches left/right edges
      // Height adapts to alignment (start/end/center), width fills container
      return {
        width: "100%",
        height: "100%",
      };
    }
  };

  const baseStyles = `flex ${flexClass} border border-[#D3D5D8] rounded-2xl overflow-hidden`;

  return (
    <div
      className={`${baseStyles} ${gradientDirection} ${className}`}
      style={{ minHeight: 0 }}
    >
      {/* Content section with title and description */}
      <div className="flex flex-col justify-center items-start p-6 flex-1">
        <h3 className="text-[#18063C] font-bold text-2xl mb-2">{title}</h3>
        <p className="text-[#425061] font-medium text-base">{description}</p>
      </div>

      {/* Image section - touches edges, no padding */}
      <div
        className={getImageContainerClasses()}
        style={{
          width: flexDirection === "row" ? "auto" : "100%",
          height: flexDirection === "col" ? "auto" : "100%",
          flexShrink: 0,
          flex: flexDirection === "col" ? "1 1 auto" : "0 0 auto",
          minHeight: flexDirection === "col" ? "200px" : "auto",
        }}
      >
        <div className="relative" style={getImageWrapperStyle()}>
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            className="w-full h-full object-cover"
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
