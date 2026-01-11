import { getDictionary } from "@/lib/dictionary";
import { Params } from "../layout";
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import PricingSection from "@/components/home sections/Pricing";
import FAQSection from "@/components/FAQ/FAQSection";
import PricesComparison from "@/components/pricing-sections/PricesComparison";
import DecoratedElements from "@/components/DecoratedElements/DecoratedElements";

export default async function PricingPage({ params }: { params: Params }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white ">
      {/* hero sectin  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10 overflow-hidden">
        <DecoratedElements />

        {/* Content */}
        <SectionHeader
          tag={{ title: dict?.prices }}
          title={dict?.flexible_pricing_plans}
          description={dict?.choose_the_right_plan}
        />
      </section>

      {/* pricing section  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 relative flex flex-col items-center justify-center gap-10  bg-gradient-to-b from-gray-50 to-white">
        <div className="min-h-screen bg-white ">
          <PricingSection dict={dict} />
        </div>
      </section>

      {/* Comprehensive comparison of plans section  */}
      <section className="py-20 px-4 md:px-10 lg:px-16 bg-gray-50 relative flex flex-col items-center justify-center gap-10">
        <PricesComparison dict={dict} />
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
