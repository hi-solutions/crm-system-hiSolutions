import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

interface ManagaSalesProps {
  title: string;
  description: string;
  linkText?: string;
}

const ManagaSales: React.FC<ManagaSalesProps> = ({
  title,
  description,
  linkText,
}) => {
  return (
    <section className="px-4 md:px-10 lg:px-16 relative flex flex-col items-center justify-center ">
      <div>
        <SectionHeader
          title="Everything you need to manage real estate sales in one place..."
          description="Powerful and easy tools that help you achieve sales quickly and accurately"
        />
      </div>
    </section>
  );
};

export default ManagaSales;
