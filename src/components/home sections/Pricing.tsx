import React from "react";
import { User, Users, Building2 } from "lucide-react";
import PricingCard from "../Card/PricingCard";

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
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
      </div>
    </section>
  );
};

export default Pricing;
