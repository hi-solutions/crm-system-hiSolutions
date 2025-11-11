import { getDictionary } from "@/lib/dictionary";
import { Params } from "../layout";
import { Button } from "@/components/Button";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
// import Image from "next/image";
import FAQSection from "@/components/FAQ/FAQSection";
import MeetOurTeam from "@/components/about-us-sections/MeetOurTeam";
import HowWeWork from "@/components/about-us-sections/HowWeWork";
import WhatWeDo from "@/components/about-us-sections/WhatWeDo";
import MissionVision from "@/components/about-us-sections/MissionVision";
import Testimonials from "@/components/about-us-sections/Testimonials";

export default async function AboutPage({ params }: { params: Params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white ">
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
        <SectionHeader
          tag={{ title: dict?.who_we_are_tag }}
          title={dict?.who_we_are_title}
          description={dict?.who_we_are_description}
        />
        <div className="flex flex-row gap-4 justify-center items-center">
          <Button className="shadow-sm hover:shadow-md text-base">
            {dict?.start_now_free}
          </Button>
          <Button className="shadow-sm hover:shadow-md text-base border-2 border-[#005FDA] text-[#005FDA] bg-white">
            {dict?.learn_more}
          </Button>
        </div>
      </section>

      {/* our misson / our vision section  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        <MissionVision dict={dict} />
      </section>

      {/* what we do section  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10 w-full">
        <WhatWeDo dict={dict} />
      </section>

      {/* HOW WE WORK SECTION  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10 w-full">
        <HowWeWork dict={dict} />
      </section>

      {/* meet our team section  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10 w-full">
        <MeetOurTeam dict={dict} />
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10 w-full">
        <Testimonials dict={dict} />
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 relative flex flex-col items-center justify-center gap-10 bg-white">
        <div className="min-h-screen bg-white">
          <FAQSection /> {/* FAQSection component */}
        </div>
      </section>
    </div>
  );
}
