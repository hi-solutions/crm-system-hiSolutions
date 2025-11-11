"use client";
import { Dictionary } from "@/lib/dictionary";
import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";

interface TestimonialsProps {
  dict?: Dictionary;
}

interface Testimonials {
  name: string;
  title: string;
  description: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ dict }) => {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO",
      description:
        "لقد أحدثت شركة Hi-Solutions تغييرًا جذريًا في تطبيق إدارة علاقات العملاء لدينا. وقد أحدثت خبرتها في كل من التكنولوجيا والتسويق فرقًا كبيرًا",
    },
    {
      name: "Jane Doe",
      title: "CTO",
      description:
        "لقد تجاوزت قدرة الفريق على مزج تطوير البرمجيات مع استراتيجيات التسويق الإبداعية توقعاتنا.",
    },
    {
      name: "Jim Doe",
      title: "CFO",
      description:
        "حترافية ومبتكرة وقائمة على النتائج. إن Hi-Solutions هي شريكنا الموثوق به لجميع احتياجات إدارة علاقات العملاء والتسويق.",
    },
  ];
  //   const [testimonialsData] = useState<Testimonials[]>(testimonials);
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <SectionHeader
        tag={{ title: dict?.testimonials ?? "" }}
        title={dict?.testimonials}
        description={dict?.testimonials_about ?? ""}
      />
      {/* testimonials wrapper */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 w-full">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white shadow-xl p-8 flex flex-col items-start justify-start gap-6 border border-gray-200 rounded-2xl max-w-[352px] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <div className="flex flex-row items-start justify-start ">
              <BiSolidQuoteSingleLeft className="text-4xl text-blue-300" />
              <BiSolidQuoteSingleLeft className="text-4xl text-blue-300" />
            </div>
            <div className="border-b border-gray-200">
              <p>{testimonial.description}</p>
            </div>
            <div className="w-full flex flex-col gap-1 items-end justify-start  ">
              <h3>{testimonial.name}</h3>
              <p>{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
