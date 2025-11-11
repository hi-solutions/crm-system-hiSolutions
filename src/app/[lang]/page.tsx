import { getDictionary } from "@/lib/dictionary";
import { FaCheck } from "react-icons/fa";
import { Params } from "./layout"; // Import the Params type from layout.tsx
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Card from "@/components/Card/Card";
import PricingSection from "@/components/home sections/Pricing";
import FAQSection from "@/components/FAQ/FAQSection";
import Hero from "@/components/home sections/Hero";
import Testimonials from "@/components/home sections/Testimonials";
import TrustedBy from "@/components/home sections/TrustedBy";

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
    <div className="min-h-screen bg-white  overflow-hidden">
      {/* Hero Section */}
      <Hero dict={dict} params={{ lang }} />
      {/* Trusted by Section */}
      <TrustedBy dict={dict} lang={lang} />

      {/* manage real state Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
        <div className="flex justify-center items-center">
          <SectionHeader
            title="Everything you need to manage real estate sales in one place..."
            description="Powerful and easy tools that help you achieve sales quickly and accurately"
          />
        </div>
        <div className="flex justify-center items-center w-full max-w-4xl mx-auto">
          <Image
            src="/images/manageMockup.png"
            alt="Manage Real State"
            width={1200}
            height={600}
            className="w-full h-auto object-contain transform translate-x-4 md:translate-x-12"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
          />
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div
          className="bg-center bg-no-repeat flex justify-center min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]"
          style={{
            backgroundImage: "url('/images/social_media_list.png')",
            backgroundSize: "clamp(300px, 90vw, 1200px) auto",
            width: "100%",
          }}
        >
          <div className="flex justify-center items-end py-30 px-4 md:px-10 lg:px-16">
            <SectionHeader
              tag={{ title: "Integrations" }}
              title="Will it work with my other tools?"
              description="Referral programs, push notifications, social sharing, payment gateways, A/B testing, desktop editors, mobile apps, comments, notifications. Yes."
              linkText="Explore the integrations library →"
            />
          </div>
        </div>
      </section>

      {/* one system Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
        <div className="flex justify-center items-center">
          <SectionHeader
            tag={{ title: "One system" }}
            title="One system that serves all departments of your company"
            description="Carefully designed to meet the needs of each team in your real estate company"
            linkText="Learn more about our Inbox"
          />
        </div>
        <div className="flex justify-center items-center w-full max-w-4xl mx-auto">
          <Image
            src="/images/dashboard_screen.png"
            alt="Manage Real State"
            width={1200}
            height={600}
            className="w-full h-auto object-contain "
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 896px"
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

      {/* multiple divs section that shows the different features of the system */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
        {/* upper part  */}
        <div className="flex md:flex-row flex-col items-stretch gap-5 w-full">
          {/* the single card  */}
          <div className="w-full lg:w-1/2 flex">
            <Card
              title="Ticketing"
              description="Easily collaborate with colleagues to quickly solve complex problems,
as well as allow customers to track progress in real time."
              image="/images/details_screen.png"
              flexDirection="col"
              className="additional-classes h-full w-full hover:shadow-md hover:scale-105 transition-all duration-300"
            />
          </div>
          {/* the two cards  */}
          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            <Card
              title="Configurable"
              description="Change language, turn on dark mode, save custom views, and more."
              image="/images/chat_screen.png"
              flexDirection="row"
              className="additional-classes flex-1 hover:shadow-md hover:scale-105 transition-all duration-300"
            />
            <Card
              title="Omnichannel"
              description="See all your support conversations in one place."
              image="/images/social_screen.png"
              flexDirection="row"
              className="additional-classes flex-1 hover:shadow-md hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>
        {/* lower part - 3 horizontal cards */}
        <div className="flex md:flex-row flex-col items-stretch gap-5 w-full">
          <Card
            title="Ticketing"
            description="Easily collaborate with colleagues to quickly solve complex problems,
as well as allow customers to track progress in real time."
            image="/images/details_screen.png"
            flexDirection="col"
            className="additional-classes h-full w-full hover:shadow-md hover:scale-105 transition-all duration-300"
          />
          <Card
            title="Ticketing"
            description="Easily collaborate with colleagues to quickly solve complex problems,
as well as allow customers to track progress in real time."
            image="/images/details_screen.png"
            flexDirection="col"
            className="additional-classes h-full w-full hover:shadow-md hover:scale-105 transition-all duration-300"
          />
          <Card
            title="Ticketing"
            description="Easily collaborate with colleagues to quickly solve complex problems,
as well as allow customers to track progress in real time."
            image="/images/details_screen.png"
            flexDirection="col"
            className="additional-classes h-full w-full hover:shadow-md hover:scale-105 transition-all duration-300"
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials dict={dict} />

      {/* Pricing Section */}
      <section className="py-20 px-4 md:px-10 lg:px-16 relative flex flex-col items-center justify-center gap-10 bg-white">
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
