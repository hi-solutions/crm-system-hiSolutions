"use client";
import React from "react";
import { Gift } from "lucide-react";
import {
  MdOutlineMoneyOff,
  MdOutlinePerson,
  MdOutlineGroups,
  MdSettings,
} from "react-icons/md";
import PricingCard from "../Card/PricingCard";
import SectionHeader from "../SectionHeader/SectionHeader";
import Button from "../Button";
import { Dictionary } from "@/lib/dictionary";
import Image from "next/image";
import { useSubscriptionModal } from "@/context/SubscriptionModalContext";
import pricingVector from "../../../public/images/pricing-vetor.webp";

interface PricingData {
  freeLeads: number;
  paidLeads: number | string;
  enterprisePrice: number | string;
  individualPrice: number | string;
  customPriceText: string;
}

interface PricingProps {
  dict: Dictionary;
  pricingData?: PricingData;
}

const Pricing: React.FC<PricingProps> = ({ dict, pricingData }) => {
  const { openModal } = useSubscriptionModal();
  // Use passed data if available, otherwise fall back to defaults
  const { freeLeads, enterprisePrice, individualPrice, customPriceText } =
    pricingData ?? {
      freeLeads: 100,
      paidLeads: dict.unlimited_users,
      enterprisePrice: dict.enterprise_price,
      individualPrice: dict.individual_price,
      customPriceText: dict.custom_price_text,
    };

  const freePlanAdvantages = [
    dict?.manage_leads_per_month.replace("{{count}}", freeLeads.toString()),
    { text: dict?.limited_users, included: true },
    { text: dict?.social_media_integration_feature, included: true },
    { text: dict?.free_system_trial, included: true },
    { text: dict?.ideal_for_small_teams, included: true },
    { text: dict?.manage_sales, included: true },
    { text: dict?.quick_actions_daily, included: false },
    { text: dict?.full_user_management, included: false },
    { text: dict?.import_export_excel, included: false },
    { text: dict?.real_time_notifications, included: false },
  ];

  const paidPlanAdvantages = [
    dict?.quick_actions_daily,
    dict?.manage_unlimited_leads,
    dict?.unlimited_users,
    dict?.full_user_management,
    dict?.import_export_excel,
    dict?.manage_sales_rentals,
    dict?.real_time_notifications,
    dict?.full_social_integration,
    dict?.moneyBackGuarantee,
  ];
  const paidPlanAdvantages2 = [...paidPlanAdvantages, dict?.website_included];
  const pricingDummyData = [
    // free plan
    {
      tagText: dict?.free_plan,
      icon: <MdOutlineMoneyOff className="w-6 h-6" />,
      // planDescription: dict?.pricing_professional_description,
      planPrice: dict.free_plan,
      hasPeriod: false,
      buttonText: dict?.pricing_free_button ?? "",
      planAdvantages: freePlanAdvantages,
      priceSuffix: dict?.EGP ?? "",
      className: "w-full max-w-[350px]",
      onButtonClick: () => openModal(dict?.free_plan),
    },

    // individual plan
    {
      tagText: dict?.individual_plan,
      icon: <MdOutlinePerson className="w-6 h-6" />,
      // planDescription: dict?.pricing_team_description,
      planPrice: individualPrice,
      hasPeriod: true,
      buttonText: dict?.pricing_paid_button ?? "",
      planAdvantages: paidPlanAdvantages2,
      bestPlan: false,
      bestPlanLabel: dict?.pricing_best_value_tag,
      priceSuffix: "E£",
      className: "w-full max-w-[350px]",
      onButtonClick: () => openModal(dict?.paid_plan),
    },
    // enterprise plan
    {
      tagText: dict?.enterprise_plan,
      icon: <MdOutlineGroups className="w-6 h-6" />,
      // planDescription: dict?.pricing_team_description,
      planPrice: enterprisePrice,
      hasPeriod: true,
      buttonText: dict?.pricing_paid_button ?? "",
      planAdvantages: paidPlanAdvantages,
      bestPlan: true,
      bestPlanLabel: dict?.pricing_best_value_tag,
      priceSuffix: "E£",
      className: "w-full max-w-[350px]",
      onButtonClick: () => openModal(dict?.paid_plan),
    },
    //custom plan
    {
      tagText: dict?.custom_plan,
      icon: <MdSettings className="w-6 h-6" />,
      planPrice: customPriceText,
      hasPeriod: false,
      buttonText: dict?.pricing_paid_button ?? "",
      planAdvantages: paidPlanAdvantages2,
      bestPlan: false,
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
      <div className="relative z-10 mx-auto px-4 md:px-10 flex flex-col">
        <div className="flex justify-center items-center mb-10">
          <SectionHeader
            tag={{ title: dict?.pricing }}
            title={dict?.one_time_payment_forever_use}
            description={dict?.flexible_pricing_for_any_team}
          />
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"> */}
        {/* //! removed lg:grid-cols-3 because we have only two plans */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8 place-items-stretch">
          {pricingDummyData.map((plan, index) => (
            <PricingCard
              dict={dict}
              key={`${plan.tagText}-${index}`}
              {...plan}
              className="w-full"
            />
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 relative ">
          <p className="text-base sm:text-md md:text-lg lg:text-xl font-medium text-[#425061] leading-relaxed max-w-3xl text-center">
            {" "}
            {dict?.not_ready_to_pay}
          </p>
          <Button
            icon={<Gift className="w-5 h-5" />}
            onClick={() => openModal()}
          >
            {dict?.try_free_demo}
          </Button>
          <div className="md:block hidden absolute bottom-0 w-[148px] h-[88px] translate-x-55 translate-y-15">
            <Image
              src={pricingVector}
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
