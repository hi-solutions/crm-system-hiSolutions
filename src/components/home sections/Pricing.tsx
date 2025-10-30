import React from "react";
import { User, Users, Building2, Gift } from "lucide-react";
import PricingCard from "../Card/PricingCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button";

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 flex flex-col ">
        <div className="flex justify-center items-center mb-10">
          <SectionHeader
            tag={{ title: "Pricing" }}
            title="Simple, Transparent Pricing"
            description="Choose the plan that fits your needs"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <PricingCard
            tagText="Professional"
            icon={<User className="w-6 h-6" />}
            planDescription="For freelancers, indie developers or solopreneurs."
            planPrice="56"
            buttonText="Buy now"
            planAdvantages={[
              "Single user license",
              "Lifetime updates",
              "5,000+ icons",
              "6 unique styles",
              "Live stroke & corners",
              "Powered by variants",
              "IconJar & SVG library",
              "Unlimited projects",
            ]}
          />

          <PricingCard
            tagText="Team"
            icon={<Users className="w-6 h-6" />}
            planDescription="For fast-growing teams, up to 6 library users."
            planPrice="112"
            buttonText="Buy now"
            planAdvantages={[
              "Up to 6 users license",
              "Lifetime updates",
              "5,000+ icons",
              "6 unique styles",
              "Live stroke & corners",
              "Powered by variants",
              "IconJar & SVG library",
              "Unlimited projects",
            ]}
            bestPlan={true}
          />

          <PricingCard
            tagText="Enterprise"
            icon={<Building2 className="w-6 h-6" />}
            planDescription="For large teams, an unlimited number of library users."
            planPrice="224"
            buttonText="Buy now"
            planAdvantages={[
              "Unlimited library users",
              "Lifetime updates",
              "5,000+ icons",
              "6 unique styles",
              "Live stroke & corners",
              "Powered by variants",
              "IconJar & SVG library",
              "Unlimited projects",
            ]}
          />
        </div>
        <div className="mt-8 flex flex-col items-center gap-4">
          <p className="text-base sm:text-md md:text-lg lg:text-xl font-medium text-[#425061] leading-relaxed max-w-3xl text-center">
            {" "}
            Not ready to pay yet? Try the free demo with 600 icons. Same styles,
            same features, same flexibility. It also includes full preview.
          </p>
          <Button icon={<Gift className="w-5 h-5" />}>Try the free demo</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
