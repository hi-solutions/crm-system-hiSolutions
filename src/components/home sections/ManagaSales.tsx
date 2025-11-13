import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

interface ManagaSalesProps {
  title: string;
  description: string;
  linkText?: string;
}

const ManagaSales = ({ title, description, linkText }: ManagaSalesProps) => {
  return (
    <section className="px-4 md:px-10 lg:px-16 relative flex flex-col items-center justify-center ">
      <div>
        <SectionHeader
          title={title}
          description={description}
          linkText={linkText}
        />
      </div>
    </section>
  );
};

export default ManagaSales;
