import React from "react";

interface CardBoardProps {
  icon?: React.ReactNode;
  title?: string;
  titleStyle?: string;
  description?: string;
  descriptionStyle?: string;
  cardStyle?: string;
  titleAndIconDirection?: "row" | "col";
}

const CardBoard: React.FC<CardBoardProps> = ({
  icon,
  title,
  description,
  cardStyle,
  titleStyle = "text-[#18063C] text-base font-bold",
  descriptionStyle = "text-[#425061] text-lg font-medium",
  titleAndIconDirection = "row",
}) => {
  return (
    <div
      className={`flex flex-col justify-center items-center gap-4 ${cardStyle}`}
    >
      {titleAndIconDirection === "row" ? (
        <div className="w-full flex flex-row items-center justify-start gap-4">
          {icon}
          <h3 className={`${titleStyle}`}>{title}</h3>
        </div>
      ) : (
        <div className="w-full flex flex-col items-start justify-start gap-4">
          <div className="flex flex-col items-start justify-start gap-4">
            {icon}
            <h3 className={`${titleStyle}`}>{title}</h3>
          </div>
        </div>
      )}
      {description && <p className={`${descriptionStyle}`}>{description}</p>}
    </div>
  );
};

export default CardBoard;
