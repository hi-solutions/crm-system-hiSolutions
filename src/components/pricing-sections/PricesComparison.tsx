import React from "react";
import {
  Dictionary,
  PricingComparisonValue,
  PricingPlanId,
} from "@/lib/dictionary";
import { Check, X } from "lucide-react";
import SectionHeader from "../SectionHeader/SectionHeader";

interface PricesComparisonProps {
  dict: Dictionary;
}

const PricesComparison: React.FC<PricesComparisonProps> = ({ dict }) => {
  const comparison = dict?.pricing_comparison;
  const plans = comparison?.plans ?? [];
  const rows = comparison?.rows ?? [];

  // const resolvePlanId = (id: string): PricingPlanId | null => {
  //   if (id === "basic" || id === "professional" || id === "enterprise") {
  //     return id;
  //   }
  //   return null;
  // };
  const resolvePlanId = (id: string): PricingPlanId | null => {
    if (id === "free" || id === "paid") {
      return id;
    }
    return null;
  };

  const renderValue = (value: PricingComparisonValue) => {
    if (value === true) {
      return (
        <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100">
          <Check className="h-4 w-4 text-blue-600" />
        </div>
      );
    }

    if (value === false) {
      return (
        <div className="mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3F4F6]">
          <X className="h-4 w-4 text-[#9CA3AF]" />
        </div>
      );
    }

    if (typeof value === "string" && value.trim().length > 0) {
      return (
        <span className="text-sm font-medium text-slate-700 md:text-base">
          {value}
        </span>
      );
    }

    return <span className="text-sm text-slate-400">—</span>;
  };

  const getCellClasses = (featured?: boolean) => {
    const base =
      "px-4 py-4 text-center align-middle text-sm text-slate-600 md:text-base";
    const featuredStyles = featured
      ? "bg-sky-50 font-semibold text-sky-700"
      : "";

    return `${base} ${featuredStyles}`.trim();
  };

  const featuredPlanId = plans.find((plan) => plan.featured)?.id;

  return (
    <section className="relative w-full bg-gradient-to-b from-sky-50/60 via-white to-sky-50/60 py-16 md:py-20">
      <div className="mx-auto flex w-full flex-col gap-10 px-4 md:px-10 lg:px-16">
        <SectionHeader
          title={dict?.comprehensive_comparison_of_plans}
          description={dict?.comprehensive_comparison_of_plans_description}
        />
        <div className="w-full">
          <div className="hidden overflow-hidden rounded-none border border-slate-100 bg-white shadow-[0_40px_60px_-45px_rgba(15,23,42,0.35)] md:block md:rounded-3xl">
            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-0 md:min-w-[720px]">
                <thead className="bg-gradient-to-r from-sky-50 via-white to-sky-50">
                  <tr>
                    <th className="w-1/3 px-6 py-6 text-left text-sm font-semibold text-slate-600 md:text-base">
                      {/* {dict?.features} */}
                    </th>
                    {plans.map((plan) => {
                      const headerClasses = [
                        "px-6 py-6 text-center text-sm font-semibold md:text-base",
                        plan.featured
                          ? "bg-sky-50 text-sky-700"
                          : "text-slate-700",
                      ]
                        .filter(Boolean)
                        .join(" ");

                      return (
                        <th key={plan.id} className={headerClasses}>
                          <div className="mx-auto flex w-full flex-col items-center gap-2">
                            {plan.badge ? (
                              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                                {plan.badge}
                              </span>
                            ) : (
                              <span className="h-5" />
                            )}
                            <span className="text-lg font-semibold">
                              {plan.name}
                            </span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr
                      key={row.label}
                      className="border-b border-slate-100 last:border-b-0"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-slate-700 md:text-base">
                        {row.label}
                      </td>
                      {plans.map((plan) => {
                        const planKey = resolvePlanId(plan.id);
                        const value = planKey ? row[planKey] : null;
                        const featured = featuredPlanId === plan.id;
                        return (
                          <td
                            key={plan.id}
                            className={getCellClasses(featured)}
                          >
                            <span className="inline-flex items-center justify-center">
                              {renderValue(value)}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:hidden">
            {plans.map((plan) => {
              const planKey = resolvePlanId(plan.id);
              return (
                <div
                  key={plan.id}
                  className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.35)]"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      {plan.badge ? (
                        <span className="mb-2 inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
                          {plan.badge}
                        </span>
                      ) : null}
                      <h3 className="text-xl font-semibold text-slate-900">
                        {plan.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    {rows.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                      >
                        <span className="text-sm font-medium text-slate-700">
                          {row.label}
                        </span>
                        <span className="flex items-center">
                          {renderValue(planKey ? row[planKey] : null)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricesComparison;
