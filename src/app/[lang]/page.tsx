import { getDictionary } from "@/lib/dictionary";
import {
  FaLeaf,
  FaHeart,
  FaShieldAlt,
  FaRegLightbulb,
  FaRegStar,
  FaCheck,
} from "react-icons/fa";
import { Params } from "./layout"; // Import the Params type from layout.tsx
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Card from "@/components/Card/Card";

export default async function Home({ params }: { params: Params }) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  const benefitsTexts = [
    "حلول أسرع للعملاء",
    "منع إرهاق الفريق",
    "خفض تكاليفك",
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}

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
              className="additional-classes h-full w-full"
            />
          </div>
          {/* the two cards  */}
          <div className="flex flex-col w-full lg:w-1/2 gap-6">
            <Card
              title="Configurable"
              description="Change language, turn on dark mode, save custom views, and more."
              image="/images/chat_screen.png"
              flexDirection="row"
              className="additional-classes flex-1"
            />
            <Card
              title="Omnichannel"
              description="See all your support conversations in one place."
              image="/images/social_screen.png"
              flexDirection="row"
              className="additional-classes flex-1"
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
            className="additional-classes h-full w-full"
          />
          <Card
            title="Ticketing"
            description="Easily collaborate with colleagues to quickly solve complex problems,
as well as allow customers to track progress in real time."
            image="/images/details_screen.png"
            flexDirection="col"
            className="additional-classes h-full w-full"
          />
          <Card
            title="Ticketing"
            description="Easily collaborate with colleagues to quickly solve complex problems,
as well as allow customers to track progress in real time."
            image="/images/details_screen.png"
            flexDirection="col"
            className="additional-classes h-full w-full"
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto px-4 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Basic</h3>
                <p className="text-gray-600 mb-6">
                  Perfect for getting started
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$9</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    1 Website
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    5GB Storage
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Basic Analytics
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Choose Basic
                </button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-blue-500 relative transform hover:scale-105 transition-all overflow-hidden">
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1">
                POPULAR
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Pro</h3>
                <p className="text-gray-600 mb-6">For growing businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    5 Websites
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    20GB Storage
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Advanced Analytics
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Priority Support
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Choose Pro
                </button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  Enterprise
                </h3>
                <p className="text-gray-600 mb-6">For large organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Unlimited Websites
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    100GB Storage
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Custom Reporting
                  </li>
                  <li className="flex items-center text-gray-600">
                    <svg
                      className="w-5 h-5 mr-2 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Dedicated Support
                  </li>
                </ul>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                  Choose Enterprise
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="mx-auto text-center px-4 md:px-10 lg:px-16">
          <h2 className="text-3xl font-bold mb-6">
            Start Building Your Website Today
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of satisfied customers and create your perfect
            website
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 text-lg font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all">
              Get Started Free
            </button>
            <button className="bg-transparent text-white text-lg font-medium py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all border border-white">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-10 lg:px-16 bg-gray-900 text-white">
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">About Us</h3>
              <p className="text-gray-400">
                We help businesses create beautiful websites without coding
                knowledge.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Contact</h3>
              <p className="text-gray-400">Email: info@acmeinc.com</p>
              <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.609 1.798-1.574 2.457-2.72 2.756C18.505 1.56 15.837.75 12.965.75c-3.122 0-5.86.825-8.193 2.075C1.44 4.875.75 7.5.75 10.38c0 2.88.75 5.625 2.076 8.1C1.44 15.937 3.75 18.6 6.57 19.8c.825.45 1.65.675 2.475.675 2.625 0 1.8-1.5 3.375-3.375 3.375-1.8 0-2.25.75-4.2 2.25-5.4C5.04 15.6 2.25 12.75 2.25 9.75c0-2.625.75-5.25 2.1-7.5 2.1 3 6.75 8.25 12 15.75 13.8 1.5.15 2.625-1.5 4.5-3.375 6.375z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.567 3H4.43C3.545 3 3 3.545 3 4.43v15.136c0 .884.545 1.43 1.43 1.43h15.136c.884 0 1.43-.546 1.43-1.43V4.43C21 3.545 20.455 3 19.567 3zM10.5 16.5c-2.757 0-5.424-1.243-7.23-3.048C1.5 11.325 1.5 8.658 1.5 6 1.5 4.104 1.5 2.25 3.354 2.25 5.25c0 2.667 1.854 4.521 3.708 4.521 2.484 0 4.968-1.854 6.78-3.66 6.78 1.854 0 3.66-1.815 5.475-3.66 5.475 1.854 0 3.66-1.815 5.475-3.66C15.975 12 15.975 9.333 15.975 6 15.975c0-2.667-1.854-4.521-3.66-4.521-2.484 0-4.968 1.854-6.78 3.66-6.78 1.854 0 3.66 1.815 5.475 3.66 5.475 1.854 0 3.66-1.815 5.475-3.66C21 12 21 15.975 21 19.312c0 2.667-1.854 4.521-3.66 4.521z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Acme Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
