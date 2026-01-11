"use client";

// interface DecoratedElementsProps {
//   children: React.ReactNode;
// }

const DecoratedElements = () => {
  return (
    <div>
      {/* Blurred Ellipses Background */}
      {/* Left Ellipse */}
      <div className="absolute -left-20 md:-left-32 lg:-left-40 top-1/2 -translate-y-1/2 w-48 md:w-80 lg:w-96 h-64 md:h-96 lg:h-[500px] rounded-full bg-[rgba(18,147,236,0.15)] blur-3xl animate-float-slow pointer-events-none" />

      {/* Right Ellipse */}
      <div className="absolute -right-20 md:-right-32 lg:-right-40 top-1/3 w-56 md:w-96 lg:w-[450px] h-72 md:h-96 lg:h-[500px] rounded-full bg-[rgba(18,147,236,0.15)] blur-3xl animate-float-delayed pointer-events-none" />

      {/* Center-Left Ellipse */}
      <div className="absolute left-1/4 md:left-1/3 -bottom-20 md:-bottom-32 w-52 md:w-80 lg:w-96 h-64 md:h-80 lg:h-96 rounded-full bg-[rgba(18,147,236,0.15)] blur-3xl animate-pulse-soft pointer-events-none" />

      {/* Dot Decorations */}
      <div className="absolute top-10 left-8 w-2 h-2 rounded-full bg-[rgba(18,147,236,0.15)] animate-float-slow" />
      <div className="absolute top-1/4 right-12 w-1.5 h-1.5 rounded-full bg-[rgba(18,147,236,0.15)] animate-float-delayed" />
      <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 rounded-full bg-[rgba(18,147,236,0.15)]" />
      <div className="absolute top-3/4 right-1/4 w-2 h-2 rounded-full bg-[rgba(18,147,236,0.15)] animate-pulse-soft" />
      <div className="absolute top-1/3 left-16 w-1.5 h-1.5 rounded-full bg-[rgba(18,147,236,0.15)]" />
      <div className="absolute bottom-1/4 right-20 w-2 h-2 rounded-full bg-[rgba(18,147,236,0.15)] animate-float-slow" />
      <div className="absolute top-2/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[rgba(18,147,236,0.15)]" />
      <div className="absolute bottom-10 right-1/3 w-2.5 h-2.5 rounded-full bg-[rgba(18,147,236,0.15)] animate-float-delayed" />
    </div>
  );
};

export default DecoratedElements;
