import { getDictionary } from "@/lib/dictionary";
import { FaCheck } from "react-icons/fa";
import { Params } from "./layout"; // Import the Params type from layout.tsx
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import PricingSection from "@/components/home sections/Pricing";
import FAQSection from "@/components/FAQ/FAQSection";
import Hero from "@/components/home sections/Hero";
// import Testimonials from "@/components/home sections/Testimonials";
import FeaturesShowcase from "@/components/home sections/FeaturesShowcase";
// import TrustedBy from "@/components/home sections/TrustedBy";
import oneSystemScreen from "../../../public/images/new_screens/one_system_screen.webp";
import screenPhoneMockup from "../../../public/images/new_screens/new_screen_phone_mockup.webp";
import socialMediaList from "../../../public/images/social_media_list.webp";

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;

  await getDictionary(lang);

  const dict = await getDictionary(lang);

  const benefitsTexts = [
    dict.faster_solutions_for_clients,
    dict.prevent_team_burnout,
    dict.reduce_your_costs,
  ];
  return (
    <div className="min-h-screen bg-white relative overflow-hidden ">
      {/* Hero Section */}
      <Hero dict={dict} params={{ lang }} />
      {/* Trusted by Section */}
      {/* <TrustedBy dict={dict} lang={lang} /> */}

      {/* manage real state Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
        <div className="flex justify-center items-center">
          <SectionHeader
            title={dict.everything_you_need}
            description={dict.powerful_easy_tools}
          />
        </div>
        <div className="flex justify-center items-center w-full max-w-4xl mx-auto">
          <Image
            // src="/images/screen_phone_mockup.png"
            src={screenPhoneMockup}
            alt="Manage Real State"
            width={1200}
            height={600}
            className="w-full h-auto object-contain transform translate-x-4 md:translate-x-12"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
            quality={85}
            placeholder="blur"
          />
        </div>
      </section>

      {/* Integrations Section */}
      <section className=" bg-white">
        <div className="bg-center bg-no-repeat flex justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px] relative ">
          <div className="absolute md:top-[30%] top-[10%]">
            <Image
              src={socialMediaList}
              alt="Social Media List"
              width={1500}
              height={600}
              className="w-full h-auto object-cover border"
              sizes="(max-width: 1000px) 100vw, (max-width: 1200px) 90vw, 896px"
            />
          </div>
          <div className="flex justify-center items-end py-40 px-4 md:px-10 lg:px-16">
            <SectionHeader
              tag={{ title: dict.integrations }}
              title={dict.integrations_title}
              description={dict.integrations_description}
              // linkText={dict.integrations_link_text}
            />
          </div>
        </div>
      </section>

      {/* one system Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
        <div className="flex justify-center items-center">
          <SectionHeader
            tag={{ title: dict.one_system }}
            title={dict.one_system_title}
            description={dict.one_system_description}
            // linkText={dict.one_system_link_text}
          />
        </div>
        <div className="flex justify-center items-center w-full max-w-4xl mx-auto">
          <Image
            // src="/images/one_system_screen.png"
            src={oneSystemScreen}
            alt="Manage Real State"
            width={1200}
            height={600}
            className="w-full h-auto object-contain "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
            quality={85}
            placeholder="blur" // Smooth loading experience
          />
        </div>
        <ul className="flex flex-wrap items-center gap-4 justify-center mt-8 list-none">
          {benefitsTexts.map((text, index) => (
            <li key={index} className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#005FDA" }}
              >
                <FaCheck className="text-white text-xs" />
              </div>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Features Showcase Section */}
      <FeaturesShowcase dict={dict} />

      {/* Testimonials Section */}
      {/* <Testimonials dict={dict} /> */}

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 relative flex flex-col items-center justify-center gap-10  bg-gradient-to-b from-gray-50 to-white">
        <div className="min-h-screen bg-white">
          <PricingSection dict={dict} />
        </div>
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
