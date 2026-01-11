"use client";
import React from "react";
import { Gift } from "lucide-react";
import { MdOutlineMoneyOff, MdOutlineAttachMoney } from "react-icons/md";
import PricingCard from "../Card/PricingCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button";
import { Dictionary } from "@/lib/dictionary";
import Image from "next/image";
import { useSubscriptionModal } from "@/context/SubscriptionModalContext";

interface PricingData {
  freeLeads: number;
  paidLeads: number;
  paidPrice: number;
}

interface PricingProps {
  dict: Dictionary;
  pricingData?: PricingData;
}

const Pricing: React.FC<PricingProps> = ({ dict, pricingData }) => {
  const { openModal } = useSubscriptionModal();
  // Use passed data if available, otherwise fall back to defaults
  const { freeLeads, paidLeads, paidPrice } = pricingData ?? {
    freeLeads: 100,
    paidLeads: 100000,
    paidPrice: 17500,
  };

  const freePlanAdvantages = [
    dict?.manage_leads_per_month.replace("{{count}}", freeLeads.toString()),
    dict?.limited_users,
    dict?.social_media_integration_feature,
    dict?.free_system_trial,
    dict?.ideal_for_small_teams,
  ];

  const paidPlanAdvantages = [
    dict?.quick_actions_daily,
    dict?.manage_leads_per_month.replace("{{count}}", paidLeads.toString()),
    dict?.unlimited_users,
    dict?.full_user_management,
    dict?.import_export_excel,
    dict?.manage_sales_rentals,
    dict?.real_time_notifications,
    dict?.full_social_integration,
  ];

  const pricingDummyData = [
    // free plan
    {
      tagText: dict?.free_plan,
      icon: <MdOutlineMoneyOff className="w-6 h-6" />,
      // planDescription: dict?.pricing_professional_description,
      planPrice: 0,
      buttonText: dict?.pricing_free_button ?? "",
      planAdvantages: freePlanAdvantages,
      priceSuffix: "E£",
      className: "w-full max-w-[350px]",
      onButtonClick: () => openModal(dict?.free_plan),
    },
    // paid plan
    {
      tagText: dict?.paid_plan,
      icon: <MdOutlineAttachMoney className="w-6 h-6" />,
      // planDescription: dict?.pricing_team_description,
      planPrice: paidPrice,
      buttonText: dict?.pricing_paid_button ?? "",
      planAdvantages: paidPlanAdvantages,
      bestPlan: true,
      bestPlanLabel: dict?.pricing_best_value_tag,
      priceSuffix: "E£",
      className: "w-full max-w-[350px]",
      onButtonClick: () => openModal(dict?.paid_plan),
    },
    // {
    //   tagText: dict?.pricing_enterprise_tag,
    //   icon: <Building2 className="w-6 h-6" />,
    //   planDescription: dict?.pricing_enterprise_description,
    //   planPrice: dict?.pricing_enterprise_price ?? "",
    //   buttonText: dict?.pricing_enterprise_button ?? "",
    //   planAdvantages: dict?.pricing_enterprise_advantages ?? [],
    //   priceSuffix: "E£",
    //   className: "w-full max-w-[350px]",
    // },
  ];
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 lg:px-16 flex flex-col">
        <div className="flex justify-center items-center mb-10">
          <SectionHeader
            tag={{ title: dict?.pricing }}
            title={dict?.one_time_payment_forever_use}
            description={dict?.flexible_pricing_for_any_team}
          />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"> */}
        {/* //! removed lg:grid-cols-3 because we have only two plans */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center md:place-items-start">
          {pricingDummyData.map((plan, index) => (
            <PricingCard
              key={`${plan.tagText}-${index}`}
              {...plan}
              className="min-w-[350px] w-[350px]"
            />
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 relative ">
          <p className="text-base sm:text-md md:text-lg lg:text-xl font-medium text-[#425061] leading-relaxed max-w-3xl text-center">
            {" "}
            {dict?.not_ready_to_pay}
          </p>
          <Button icon={<Gift className="w-5 h-5" />}>
            {dict?.try_free_demo}
          </Button>
          <div className="md:block hidden absolute bottom-0 w-[148px] h-[88px] translate-x-55 translate-y-15">
            <Image
              src="/images/pricing-vetor.png"
              alt=""
              fill
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
