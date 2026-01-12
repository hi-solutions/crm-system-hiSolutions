import React from "react";
import Image, { StaticImageData } from "next/image";
import Tag from "@/components/Tag/Tag";
import { Dictionary } from "@/lib/dictionary";
import { CheckCircle2 } from "lucide-react";

interface FeatureDetailSectionProps {
  tagText?: string;
  image: string | StaticImageData;
  title: string;
  description: string;
  list: string[];
  imageFirst?: boolean; // for md+ screens; on mobile content is first
  dict: Dictionary;
  className?: string;
}

const FeatureDetailSection: React.FC<FeatureDetailSectionProps> = ({
  tagText,
  image,
  title,
  description,
  list,
  imageFirst = false,
  className = "",
}) => {
  const contentOrderMd = imageFirst ? "md:order-2" : "md:order-1";
  const imageOrderMd = imageFirst ? "md:order-1" : "md:order-2";

  return (
    <section className={`py-14 md:py-20 ${className}`}>
      <div className="px-4 md:px-10 lg:px-16 max-w-7xl mx-auto">
        {tagText && (
          <div className="mb-4 w-full flex justify-center">
            <Tag title={tagText} />
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image (mobile after content) */}
          <div className={`order-2 ${imageOrderMd}`}>
            <div className="relative w-full h-auto p-8 bg-gradient-to-b from-[#EFFBFE] to-[#CAF0F8] rounded-2xl border border-[#D3D5D8] shadow-xl">
              <Image
                src={image}
                alt={title}
                width={1200}
                height={800}
                className="w-full h-auto object-contain drop-shadow-xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority={false}
              />
            </div>
          </div>

          {/* Content */}
          <div className={`order-1 ${contentOrderMd} `}>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F172A] mb-3">
              {title}
            </h2>
            <p className="text-[#475569] text-base md:text-lg leading-7 mb-6">
              {description}
            </p>
            <ul className="space-y-3">
              {list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[#0F172A]">
                  <span className="mt-1 text-blue-600">
                    <CheckCircle2 className="w-5 h-5" />
                  </span>
                  <span className="text-sm md:text-base text-[#334155]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDetailSection;
