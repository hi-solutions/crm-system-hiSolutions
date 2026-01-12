import { getDictionary } from "@/lib/dictionary";
import { Params } from "../layout";
// import { Button } from "@/components/Button";
// import SectionHeader from "@/components/SectionHeader/SectionHeader";
// import Image from "next/image";
import FAQSection from "@/components/FAQ/FAQSection";
import MeetOurTeam from "@/components/about-us-sections/MeetOurTeam";
import HowWeWork from "@/components/about-us-sections/HowWeWork";
import WhatWeDo from "@/components/about-us-sections/WhatWeDo";
import MissionVision from "@/components/about-us-sections/MissionVision";
// import Testimonials from "@/components/about-us-sections/Testimonials";
// import DecoratedElements from "@/components/DecoratedElements/DecoratedElements";
import AboutUsHeading from "@/components/about-us-sections/AboutUsHeading";

export default async function AboutPage({ params }: { params: Params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <div className="min-h-screen bg-white relative overflow-hidden ">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-5"
      >
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500 rounded-full blur-xl"></div>
      </div>
      <div className="relative z-10">
        <AboutUsHeading dict={dict} />

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
        {/* <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10 w-full">
          <Testimonials dict={dict} />
        </section> */}

        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-10 lg:px-16 relative flex flex-col items-center justify-center gap-10 bg-white">
          <div className="min-h-screen bg-white">
            <FAQSection /> {/* FAQSection component */}
          </div>
        </section>
      </div>
    </div>
  );
}
