import React from "react";

interface TagProps {
  title: string;
  className?: string;
}

const Tag: React.FC<TagProps> = ({ title, className = "" }) => {
  const baseStyles =
    "text-(--Primary) text-base font-medium bg-[rgba(35,96,220,0.12)] px-3 py-2 rounded-md";

  return <div className={`${baseStyles} ${className}`}>{title}</div>;
};

export default Tag;
